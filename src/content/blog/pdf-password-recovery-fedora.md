---
title: "Recovering My Own Forgotten PDF Passwords on Fedora"
description: "A practical, authorized-only workflow I use when Past Me encrypts PDFs and forgets to leave clues."
pubDate: 2025-09-18
updatedDate: 2026-03-13
---

Every now and then I open an old PDF and realize it was protected by Past Me, who apparently trusted memory more than documentation.

This post is my repeatable **authorized-use-only** workflow for recovering access to PDFs I own.

## Why Password-Protect Work PDFs At All?

In research workflows, PDF protection is often about reducing accidental exposure rather than hiding final published science.

- Drafts may contain internal review comments or collaborator-only notes.
- Some files include personal/contact details, signatures, or admin metadata.
- Early analysis summaries may be shared only within a project phase.
- Passwords add a basic guardrail when files are moved across laptops, USB drives, or email threads.

Done well, this is just hygiene: protect sensitive drafts, then archive responsibly.

## Important Scope (Please Read)

Use this only for documents you own or have explicit permission to recover. Do not use password-recovery methods on someone else’s files.

## Recovery Workflow I Actually Use

### 1. Start with the low-friction checks

- Check password managers and old note files.
- Try my common historical patterns (year suffixes, project names, keyboard variations).
- Check whether I saved an unencrypted copy elsewhere.

Why this helps: many "lost" passwords are recoverable in minutes from old habits.

### 2. Set up a clean Fedora workspace

Create a dedicated working directory and install dependencies:

```bash
mkdir -p ~/pdf-recovery/work
cd ~/pdf-recovery
python3 -m venv venv
source venv/bin/activate
pip install --upgrade pip
pip install pikepdf pyhanko
sudo dnf install hashcat john the-ripper
```

Keep a log file of attempts:

```bash
touch recovery.log
```

Why this helps: reproducibility and less chaos during longer sessions.

### 3. Extract and validate the PDF hash format

**Option A: Using john the ripper (recommended for password-protected PDFs)**

```bash
# Extract hash from the target PDF
pdf2john.py /path/to/protected.pdf > hash.txt

# Check the extracted hash format (should be something like: filename:$pdf$...)
cat hash.txt
```

**Option B: Using hashcat (if the PDF uses AES-256 encryption)**

```bash
# Hashcat requires a different approach; extract with:
hashcat --example-hashes | grep -i pdf

# Then extract your PDF hash manually or use:
python3 -c "
import pikepdf
pdf = pikepdf.open('/path/to/protected.pdf', password='')
" 2>&1 | grep -i encryption
```

**Option C: Using pyhanko for detailed inspection**

```bash
python3 << 'EOF'
from pyhanko.pdf_utils import generic
from pyhanko.pdf_utils.reader import PdfFileReader

with open('/path/to/protected.pdf', 'rb') as f:
    r = PdfFileReader(f)
    if r.is_encrypted:
        print("PDF is encrypted")
        print("Security handler:", r.encryption_handler)
        # Attempt to read with empty password to trigger error details
        try:
            r.security_handler.authenticate(b'')
        except Exception as e:
            print("Encryption info:", str(e))
EOF
```

Verify the extracted hash matches expected formats:

```bash
# John format (PDF hashes):
# filename:$pdf$1*2*40*-1*0*16*1234567890abcdef*32*abcdef1234...

# Hashcat format (mode 10500, 10700, 10800 depending on PDF version):
# $pdf$1*2*40*-1*0*16*...
```

Why this helps: wrong format/mode is the most common reason for "tool not working" confusion.

### 4. Run constrained recovery attempts first

**Using john the ripper (faster for typical work PDFs):**

```bash
# Dictionary attack (fastest)
john --wordlist=/usr/share/dict/words hash.txt

# Common suffixes and patterns (year-based)
john --rules=Single hash.txt

# Mask-based attack for structured guesses
john --mask='?d?d?d?d' hash.txt  # 4 digits
john --mask='[aeiou]?l?d?d?d?d' hash.txt  # vowel + letter + 4 digits

# Show recovered passwords
john --show hash.txt
```

**Using hashcat (GPU-accelerated, for longer searches):**

```bash
# First, identify your GPU:
hashcat -I

# Dictionary attack (mode 10500 for PDF user password)
hashcat -m 10500 -a 0 hash.txt /usr/share/dict/words

# Mask attack (example: password + 4 digits)
hashcat -m 10500 -a 3 hash.txt '?l?l?l?l?d?d?d?d'

# Hybrid: dictionary + mask append
hashcat -m 10500 -a 6 hash.txt /usr/share/dict/words '?d?d?d?d'

# Show results
hashcat -m 10500 hash.txt --show
```

**Custom mask syntax for hashcat:**
- `?l` = lowercase letter
- `?u` = uppercase letter
- `?d` = digit
- `?s` = special character
- `?a` = all (letters + digits + special)

**Example targeted masks (informed by your own patterns):**

```bash
# If you remember it starts with "Project" + year:
hashcat -m 10500 -a 6 hash.txt dict.txt '2024?d?d'
hashcat -m 10500 -a 6 hash.txt dict.txt '2025?d?d'

# If it's your initials + underscore + year:
hashcat -m 10500 -a 3 hash.txt 'JD_?d?d?d?d'

# If it's likely a keyboard pattern:
john --mask='[a-z]{4}[0-9]{2}' hash.txt --external=KBD
```

Why this helps: targeted attempts are dramatically faster than brute-forcing huge search spaces.

### 5. Once recovered, verify and store safely

```bash
# Extract the password from john results
PASSWORD=$(john --show hash.txt | cut -d':' -f2)

# Test it works
python3 << EOF
import pikepdf
try:
    pdf = pikepdf.open('/path/to/protected.pdf', password='$PASSWORD')
    print("✓ Password confirmed; PDF unlocked")
    pdf.close()
except Exception as e:
    print("✗ Password invalid:", e)
EOF

# Save password securely (use a password manager, not plaintext!)
# Example: add to 1Password, Bitwarden, pass, or similar

# Optional: create an unencrypted copy for archival
python3 << EOF
import pikepdf
pdf = pikepdf.open('/path/to/protected.pdf', password='$PASSWORD')
pdf.save('/path/to/unencrypted.pdf')
print("Unencrypted copy saved")
EOF
```

Why this helps: the best recovery workflow is one you do not need to repeat.

## Troubleshooting

### john reports "No password hashes loaded" or hash format not recognized

Check extraction and format:

```bash
# Verify pdf2john extracted something
cat hash.txt | head -5

# If empty, try explicit path to pdf2john:
python3 /path/to/john/run/pdf2john.py /path/to/protected.pdf > hash.txt

# Verify the hash line starts with filename: and contains $pdf$
# Expected format: filename:$pdf$1*2*40*-1*0*16*...

# If still failing, the PDF may use a non-standard encryption method
# Try hashcat variant detection:
hashcat --example-hashes | grep -A2 pdf
```

### hashcat reports "No hashes loaded" or mode mismatch

Confirm the correct mode for your PDF version:

```bash
# List all PDF modes:
hashcat --help | grep -i pdf

# Common modes:
# 10500 = PDF 1.4 - 1.7 (User password) ← Most common
# 10700 = PDF 1.7 Level 8 (User password)
# 10800 = PDF 1.7 Level 8 (Owner password)

# If unsure, try all common modes:
for mode in 10500 10700 10800; do
  echo "Testing mode $mode..."
  hashcat -m $mode -a 0 hash.txt /usr/share/dict/words --status-timer=5 --workload-profile=3
done
```

### hashcat shows "No devices available / No USB devices enabled"

Install GPU drivers for Fedora:

```bash
# For NVIDIA GPUs:
sudo dnf install kernel-devel gcc
sudo dnf install cuda-toolkit
sudo dnf install hashcat

# Verify GPU is detected:
hashcat -I

# If still not showing, check driver:
nvidia-smi

# For AMD GPUs:
sudo dnf install rocm-dkms
sudo dnf install hashcat-rocm
```

### Dictionary/mask attack completes quickly but finds nothing

Your password is likely outside the candidate space. Expand coverage:

```bash
# Try larger dictionary:
curl -O https://raw.githubusercontent.com/danielmiessler/SecLists/master/Passwords/common-passwords.txt
john hash.txt --wordlist=common-passwords.txt

# Try broader mask patterns:
# Instead of just lowercase: ?l?l?l?l
# Try mixed case: ?a?a?a?a
# Try with keyboard patterns: [a-z0-9_\-\.][a-z0-9_\-\.][a-z0-9_\-\.][a-z0-9_\-\.]

# Or use exhaustive incremental mode (slower):
john --incremental hash.txt --length=6 --max-candidates=5000000
```

### Runtime/linker issues on Fedora when building locally

If installing from source:

```bash
# Ensure all build dependencies:
sudo dnf install gcc gcc-c++ make autoconf automake libssl-devel

# Build john locally:
cd /tmp
git clone https://github.com/openwall/john -b bleeding-jumbo
cd john/src
./configure && make -j$(nproc)

# Use local build:
./john --wordlist=/usr/share/dict/words /path/to/hash.txt
```

### GPU appears available but performance is poor or crashes

Monitor and manage thermal/power load:

```bash
# Watch GPU usage in real-time:
watch -n1 'nvidia-smi'  # NVIDIA
watch -n1 'rocm-smi'    # AMD

# If overheating, reduce workload:
hashcat -m 10500 hash.txt dict.txt --workload-profile=1  # Low power
hashcat -m 10500 hash.txt dict.txt --workload-profile=2  # Default
hashcat -m 10500 hash.txt dict.txt --workload-profile=3  # High (may throttle)

# Check if another GPU process is running:
ps aux | grep -i gpu

# Kill competing workloads, then retry:
killall glxinfo
killall blender
```

### Repeated failures after many hours of attempts

Reassess candidate strategy instead of brute-forcing larger spaces:

```bash
# Log what you've tried:
echo "Attempted 2^32 combinations with mask [a-z]{4}[0-9]{4}" >> recovery.log

# Think laterally:
# - Did you use a passphrase instead of a password?
# - Was it based on a song lyric, book quote, or shared reference?
# - Did you nest multiple separators (e.g., "My_Pass.word.123")?

# Try hybrid with known keywords:
john --wordlist=dict.txt --rules=KnownKeywords hash.txt

# Look for unencrypted backups in other places:
find ~ -type f -name "*.pdf" -size +1M 2>/dev/null | head -20
find /mnt -type f -name "*.pdf" 2>/dev/null

# If this is critical institutional data, escalate:
# - Contact your institution's IT/security team with proof of ownership
# - They may have centralized password backup or recovery procedures
# - Document the attempt for institutional records
```

## What I Changed in My Own Practice

- I now keep sensitive archive passwords in a proper manager.
- I include a short metadata note for future me (without exposing secrets).
- I treat recovery as a last resort, not a routine workflow.

If you are in research workflows like me, this usually saves more time than chasing larger brute-force ranges blindly.
