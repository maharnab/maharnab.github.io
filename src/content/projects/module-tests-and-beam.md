---
title: Testing 2,400 calorimeter modules with cosmics and electron beams
summary: Cosmic-muon certification of every calorimeter module before sector assembly, plus electron-beam studies of energy response. This was the longest-running part of the calorimeter production, 2019–2026.
period: 2019 – 2026
org: LHEP, JINR · NICA-MPD ECAL
role: Module test analysis from 2019 (first-author paper 2020); electron-beam data analysis.
order: 5
featured: false
cover: /images/work/module_cosmic_fits.png
coverAlt: Grid of per-channel cosmic-muon response fits
skills: [C++, ROOT, RooFit, Python, Landau fits, batch processing]
links:
  - { label: 'Paper: J. Phys. Conf. Ser. 1690 (2020)', href: 'https://doi.org/10.1088/1742-6596/1690/1/012052' }
---

## The problem

Calorimeter modules came from several production sites. Before a module is glued into a sector, which is
practically irreversible, each of its 16 towers has to be shown to work and to respond consistently.

## What I did

- **Cosmic-muon test stand analysis.** Modules are stacked and read out while cosmic muons pass through.
  Isolated vertical tracks are selected, and each tower's minimum-ionising response is fitted. Towers with
  abnormal response, missing light or broken readout are flagged before assembly.
- **Producer comparison.** The response distributions from the different production sites were compared over
  about 24,000 towers. This exposed systematic differences in light yield between producers.
- **Electron-beam tests.** Module responses were analysed at beam energies from 30 to 280 MeV, giving energy
  linearity and resolution.

<div class="fig-row">
<figure>
  <img src="/images/work/module_towers_by_producer.png" alt="Peak ADC integral distributions per production site" loading="lazy" />
  <figcaption>Cosmic response of 23,984 towers, split by production site.</figcaption>
</figure>
<figure>
  <img src="/images/work/ebeam_280MeV_fits.png" alt="Signal amplitude fits for four channels at 280 MeV" loading="lazy" />
  <figcaption>Electron-beam response of four towers at 280 MeV.</figcaption>
</figure>
</div>

<div class="todo">Add the module count actually certified, the rejection rate, and the beam-test year(s) and facility. Add the energy-resolution result if it can be shown.</div>
