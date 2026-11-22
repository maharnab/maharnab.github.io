---
title: Equalising 768-channel detector sectors with cosmic muons
summary: Iterative, model-based correction of SiPM voltages using cosmic-ray muons, which brought a 768-channel calorimeter sector from 28% to 99.5% of channels within ±10% of target response.
period: 2023 – 2026
org: LHEP, JINR · NICA-MPD ECAL
role: Developed the equalisation method and analysis package; ran the pilot on assembled sectors.
order: 2
featured: true
cover: /images/work/basket_equalisation_pilot.png
coverAlt: Channel responses before and after equalisation
skills: [Python, weighted least squares, model selection, robust statistics, RooFit, pytest]
links:
  - { label: 'Paper: Phys. Part. Nucl. 55 (2024)', href: 'https://doi.org/10.1134/S1063779624700217' }
  - { label: 'Paper: Phys. Part. Nucl. Lett. 22 (2025)', href: 'https://doi.org/10.1134/S1547477125701377' }
---

## The problem

After assembly, each calorimeter half-sector ("basket") holds 48 modules and 768 channels. Board-level LED
calibration gives a good starting point, but light yield, fibre coupling and electronics vary from module to
module. The aim is a **uniform response to the same energy deposit in every channel**. The only calibration
source available in the assembly hall is cosmic-ray muons.

<figure>
  <img src="/images/work/basket_photo.jpg" alt="An assembled calorimeter half-sector with readout cabling" loading="lazy" />
  <figcaption>An assembled half-sector during cosmic-ray testing.</figcaption>
</figure>

## What I built

- **Muon selection and response fits.** Cosmic tracks are reconstructed inside the sector. The minimum-ionising
  response of every channel is fitted (Landau ⊗ Gaussian / Crystal-Ball models in RooFit). Path-length effects
  are corrected using track reconstruction (PPNL 2025).
- **Response-versus-voltage model.** Short voltage scans give, per channel, a weighted-least-squares fit of
  response against voltage. An F-test chooses between linear and quadratic models, and MAD-based outlier
  rejection keeps single bad runs from biasing the fit.
- **Iterative correction.** New voltages are solved for a common target, respecting the HV-controller
  DAC limits, and written out as deployable configurations. The loop then repeats.
- **Software.** A packaged Python tool with a CLI, about 5k lines with a pytest suite, plus validation that
  compares runs and configurations.

## Result

<figure>
  <img src="/images/work/basket_equalisation_pilot.png" alt="Per-channel response before (top) and after (bottom) the second correction" loading="lazy" />
  <figcaption>The same 768 channels before (top) and after two corrections (bottom). The band marks ±10% around the target.</figcaption>
</figure>

On the pilot sector, the share of channels within ±10% of target rose from **214 of 768** at the LED starting
point to **760 after one correction and 764 after two**.

<div class="todo">The ICPPA 2026 slides describe these as preliminary counts, before the final fit-quality audit. Confirm they can be shown publicly, or replace them with final numbers. Add how many of the 50 sectors have been equalised so far.</div>

**Transferable skills:** closed-loop optimisation on noisy measurements, model selection, robust regression, and building a tool other people run.
