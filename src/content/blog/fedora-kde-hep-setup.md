---
title: "Fedora KDE Fresh Install Setup for HEP Work"
description: "My repeatable Fedora KDE post-install checklist for detector software, simulation stacks, and daily research workflow."
pubDate: 2025-12-12
updatedDate: 2026-03-13
---

I end up doing Linux setup often enough that documenting it saves real time. This is my practical Fedora KDE checklist for getting back to a high-energy physics workflow quickly after a fresh install.

It is not a generic beginner guide. It is a reproducible working baseline for my own use, especially for ROOT/Geant4/FLUKA-heavy workflows.

I usually wait at least 45 days after a major Fedora release before updating my main machine. This gives key repositories time to settle so core packages are stable and available without weird dependency breaks or orphaned package gaps.

## Base System and First Pass

1. Install Fedora KDE.
2. Update everything and reboot.
3. Follow Fedora post-install steps (with my own modifications):
  - https://github.com/devangshekhawat/Fedora-43-Post-Install-Guide
4. Fix power settings, sleep/screen lock, appearance, and verify GPU state with `nvidia-smi`.

Why this matters: stable power/GPU behavior prevents random interruptions during long builds, reconstruction runs, and simulations.

## Minimum HEP Setup (Fast Track)

If I need a working machine quickly, this is the minimum path:

1. Core CLI and build dependencies (`cmake`, compiler toolchain, `root-*`, C++ scientific libs).
2. Docker + non-sudo Docker group setup.
3. FLUKA via Docker.
4. Geant4 dependencies and Geant4 install.
5. VPN (`outline-cli`) for immediate access to remote resources.

Why this matters: gets analysis, simulation, and remote collaboration working first; everything else can be layered later.

## Core CLI and HEP Build Dependencies

I install:

```bash
sudo dnf install mc tmux btop cmake git parallel htop glogg ark boost-devel python3-pip xerces-c-devel motif-devel eigen3-devel root-*
```

Why these matter:

- `git`, `cmake`, `gcc/g++` toolchain dependencies: baseline for building analysis and detector software.
- `boost-devel`, `eigen3-devel`, `xerces-c-devel`, `motif-devel`: common C++ scientific dependencies for HEP frameworks.
- `root-*`: immediate ROOT-ready environment for analysis and plotting.
- `tmux`, `parallel`, `htop`, `btop`: better control over long jobs and resource monitoring.
- `mc`, `glogg`, `ark`: practical file and log handling during debugging.

## Optional Desktop and Productivity Extras

I install:

- `texlive-scheme-full`, `texstudio`
- `jupyterlab`
- `kate`, `vscode`
- `nvtop`
- `transmission`
- Flatpak apps: AnyDesk, Telegram, GIMP, VLC

Why these matter: writing papers/notes, interactive analysis, and editor flexibility are just as important as compilers.

## Network and Remote Access

- Install `outline-cli` and add VPN key:
  - https://github.com/Kira-NT/outline-cli

Why this matters: fast recovery of access to institutional resources and remote systems.

## Docker and Containerized Physics Software

Install Docker from official instructions, then allow non-sudo usage:

```bash
sudo usermod -aG docker $USER
```

Reboot after changing group membership.

Why this matters: containers make simulation stacks more reproducible across laptops/workstations.

## FLUKA via Docker

- Setup reference:
  - https://flukadocker.github.io/F4D/

Why this matters: avoids painful local dependency drift and keeps FLUKA runtime isolated.

## Geant4 Prerequisites

I install Geant4 from upstream source, with prerequisites such as:

```bash
sudo dnf install gcc gcc-c++ make cmake libX11-devel libXmu-devel libXi-devel mesa-libGL-devel qt5-qtbase-devel hdf5-devel expat-devel vtk-devel
```

Why this matters: explicit dependency setup saves time when enabling visualization/UI features during Geant4 builds.

## File Sync Utility

Install rsyncy:

```bash
curl https://laktak.github.io/rsyncy.sh | bash
```

Why this matters: lightweight sync helper for moving analysis outputs between systems.

## Quick Verification Checklist

After setup, I run a short sanity check before I call the machine ready:

```bash
# GPU
nvidia-smi

# ROOT
root -l -q

# Docker (without sudo)
docker run --rm hello-world

# Geant4 (example: check environment)
echo $G4INSTALL

# Python/Jupyter
python3 -V
jupyter lab --version
```

For FLUKA, I verify by running the first containerized test from the F4D docs.

## Notes to Future Me

- Keep this checklist versioned and update after each successful reinstall.
- Prefer official docs for major components (Docker, Geant4, VS Code).
- For `curl | bash` installs, review scripts first if using this in a stricter environment.
