---
title: "MongoDB on Fedora for C++ Workflows (Podman-First)"
description: "A cleaner 2026-ready setup for MongoDB + mongocxx on Fedora, updated from my 2024 notes."
pubDate: 2024-02-12
updatedDate: 2026-03-13
---

I originally wrote these notes in 2024 and kept refining them after repeated reinstalls. This version is a cleaned-up 2026 workflow for Fedora users who want MongoDB for C++ development without fighting package drift.

## Recommended Path: Podman-First MongoDB

Run MongoDB as a container and keep your data in a persistent volume.

```bash
podman pull docker.io/library/mongo:latest
podman volume create mongodb_data
podman run --name mongodb \
  -p 27017:27017 \
  -v mongodb_data:/data/db:Z \
  -d docker.io/library/mongo:latest
```

Why this path: fewer host-level conflicts, easier resets, and cleaner reproducibility across machines.

Basic checks:

```bash
podman ps
podman logs mongodb --tail=50
```

## MongoDB C++ Driver (mongocxx)

Install baseline build dependencies:

```bash
sudo dnf install cmake openssl-devel gcc-c++ git pkgconf-pkg-config
```

### Option A (recommended): follow current upstream docs

Use the official MongoDB C++ driver installation docs for current build flags and compatibility:

- https://www.mongodb.com/docs/languages/cpp/cpp-driver/current/

### Option B (manual build from source)

If you prefer manual control:

1. Build/install `mongo-c-driver`.
2. Build/install `mongo-cxx-driver` (`mongocxx`).

Recent mongocxx builds can also fetch/install C driver automatically depending on configuration, but explicit control is often easier to debug on Fedora.

## Compiling a C++ Example

Instead of hardcoding include/lib paths, prefer `pkg-config`:

```bash
g++ -std=c++17 mongo_example.cpp -o mongo_example \
  $(pkg-config --cflags --libs libmongocxx)
./mongo_example
```

If linker issues appear, first check library visibility:

```bash
ldconfig -p | grep -E "mongocxx|bsoncxx"
```

If needed, add runtime path (adjust `lib` vs `lib64` to your install):

```bash
export LD_LIBRARY_PATH=/usr/local/lib64:$LD_LIBRARY_PATH
```

## MongoDB Compass (GUI)

Use the current RPM from official MongoDB Compass download page rather than pinning an old version.

- https://www.mongodb.com/try/download/compass

Install:

```bash
sudo dnf install ./mongodb-compass-*.x86_64.rpm
mongodb-compass
```

## Optional Appendix: Host-Service MongoDB (Not My Default)

If you explicitly need host-native `mongod` with systemd, use current MongoDB repo/docs and avoid old EOL versions (for example 4.4 is EOL).

I keep this as optional because containerized MongoDB is usually simpler to maintain on Fedora.

## Storage on Another Drive

For containerized usage, prefer mapping a bind mount or using a dedicated podman volume path on the target drive instead of old symlink-heavy host-database layouts.

## What Changed Since My 2024 Notes

- Removed dependence on old MongoDB 4.4 host repository instructions.
- Switched recommendation to Podman-first workflow.
- Replaced fixed Compass version pinning with "install current official RPM".
- Replaced hardcoded compile flags with `pkg-config` flow.
- Kept host `mongod` setup only as an optional appendix.

## Quick Sanity Checklist

```bash
# container health
podman ps
podman logs mongodb --tail=20

# c++ toolchain visibility
pkg-config --modversion libmongocxx || true
pkg-config --modversion libbsoncxx || true

# optional connection test from app/client
# (use your own test binary or mongo shell equivalent)
```

This setup has been the most stable path for me after fresh Fedora installs.
