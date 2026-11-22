---
title: Geant4 simulation of a sampling calorimeter for DUNE
summary: A full Geant4 simulation and reconstruction study of a scintillator-bar electromagnetic calorimeter for the DUNE near detector, covering energy resolution, linearity, and π⁰ reconstruction with DBSCAN + PCA clustering.
period: 2016 – 2024
org: Gauhati University · IIT Guwahati (DUNE-India)
role: Simulation, reconstruction and analysis (PhD thesis, chapter 2).
order: 6
featured: true
cover: /images/work/sim_energy_resolution.png
coverAlt: Energy resolution versus incident energy with a fitted resolution function
skills: [C++, Geant4, ROOT, Python, DBSCAN, PCA, CMake, SLURM]
metrics:
  - { value: '6.7%/√E', label: 'stochastic term of the energy resolution' }
  - { value: '3', label: 'detector geometries compared' }
links:
  - { label: 'Code on GitHub', href: 'https://github.com/maharnab/ecalSimulation' }
---

## The problem

The DUNE near detector needed an electromagnetic calorimeter to measure photons and electrons, including the
two photons from π⁰ decays. I studied a design based on the T2K ND280 downstream ECAL: plastic-scintillator bars
interleaved with lead or tungsten absorber. The question was what energy resolution and π⁰ reconstruction
performance such a design could deliver.

## What I built

- **Geant4 application.** Three geometries (from 34 layers × 50 bars at 4 cm pitch up to 75 × 100 bars at 2 cm
  with configurable absorbers), with per-cell hits stored in ROOT trees through custom dictionary classes.
  Simulation runs were batched on a SLURM cluster.
- **Reconstruction.** Shower energy and position from cell hits. For π⁰ → γγ, hits are clustered with DBSCAN and
  each cluster's direction comes from PCA, which gives the opening angle and the invariant mass.

<div class="fig-row">
<figure>
  <img src="/images/work/sim_energy_resolution.png" alt="Energy resolution versus energy" loading="lazy" />
  <figcaption>Energy resolution, fitted as S/√E ⊕ N/E ⊕ C.</figcaption>
</figure>
<figure>
  <img src="/images/work/sim_gamma_linearity.png" alt="Reconstructed versus true photon energy" loading="lazy" />
  <figcaption>Photon energy linearity.</figcaption>
</figure>
</div>

<div class="fig-row">
<figure>
  <img src="/images/work/sim_dbscan_pca.png" alt="DBSCAN clusters with PCA axes in two projections" loading="lazy" />
  <figcaption>Two photon showers separated by DBSCAN, with their PCA axes.</figcaption>
</figure>
<figure>
  <img src="/images/work/sim_pi0_mass.png" alt="Reconstructed π0 mass versus energy" loading="lazy" />
  <figcaption>Reconstructed π⁰ mass versus energy (the line marks the true mass).</figcaption>
</figure>
</div>

## Outcome

The study became chapter 2 of my PhD thesis. DUNE later chose to reuse the KLOE calorimeter for its near
detector, so this design was not built. The simulation and reconstruction code is public.

<div class="todo">Check the stated resolution (S = 6.72 ± 0.58 %, N ≈ 1.1, C ≈ 1.1 %) and the period. Before linking the code, check that the thesis results don't come from the commit where the primary energy is randomised (see ~/Projects/github/TODO.md #3).</div>
