---
title: Calibrating 2,400 SiPM readout boards
summary: An LED-based calibration pipeline that set the operating voltage of all 38,400 silicon photomultipliers in the NICA-MPD calorimeter, plus a population study across board types, production batches and test conditions.
period: 2021 – 2026
org: LHEP, JINR · NICA-MPD ECAL
role: Designed and ran the calibration pipeline and the test campaign analysis; maintained the code from first prototype to production.
order: 1
featured: true
cover: /images/work/board_halfsector_voltage_map.png
coverAlt: Heat map of mean board voltage across 50 calorimeter half-sectors
skills: [C++17, Python, ROOT RNTuple, pandas, statistical fitting, GNU Parallel, data reconciliation]
---

## The problem

The MPD electromagnetic calorimeter reads its light out with silicon photomultipliers (SiPMs), 16 per readout
board. A SiPM's gain depends steeply on its bias voltage and on temperature, and every device is slightly
different. Before installation, **each of the 38,400 channels needed its own operating voltage**, chosen so
that all channels respond alike, and the collaboration needed evidence that every board met spec.

## What I built

<figure>
  <img src="/images/work/readout_test_setup.jpg" alt="Readout-board test stand with ADC64 DAQ, LED and HV controllers" loading="lazy" />
  <figcaption>The LED test stand: a pulsed LED illuminates all 16 SiPMs through a diffuser while the bias voltage is scanned.</figcaption>
</figure>

- **Acquisition → decoding.** A C++ decoder turns the raw binary DAQ stream (sync-word framed, 16-channel
  waveforms) into ROOT RNTuple files. Up to three boards are processed in parallel.
- **Per-channel statistics.** For every voltage step, pedestal and signal distributions are fitted. The
  number of fired pixels is estimated photostatistically, *N*<sub>pix</sub> = μ² / (σ²<sub>signal</sub> − σ²<sub>pedestal</sub>),
  together with gain and signal-to-noise.
- **Model fitting.** Gain-versus-voltage curves are fitted per channel. The voltage that reaches a common
  target gain is solved for and corrected to a reference temperature.
- **Output.** Controller configuration files with one trim voltage per channel, plus diagnostic plots and a
  documented ROOT data format.

<figure>
  <img src="/images/work/board_npix_gain_snr_vs_voltage.png" alt="Npix, gain and SNR versus bias voltage for one channel" loading="lazy" style="max-width:420px" />
  <figcaption>One channel's voltage scan: number of fired pixels, gain and SNR versus bias voltage.</figcaption>
</figure>

## Population analysis

When the campaign closed in 2026, I reconciled **3,877 test files against the 2,448-board roster**. That
meant matching inconsistent file names, resolving re-tests and identifying the installed set. I then analysed
the full population.

<div class="fig-row">
<figure>
  <img src="/images/work/board_voltage_distribution.png" alt="Distribution of configured channel voltages, median 57.0 V" loading="lazy" />
  <figcaption>Configured voltages for all 38,400 channels (median 57.0 V).</figcaption>
</figure>
<figure>
  <img src="/images/work/board_npix_snr.png" alt="SNR versus Npix scatter for 900 boards" loading="lazy" />
  <figcaption>SNR versus N<sub>pix</sub> for 14,400 channels of one board type.</figcaption>
</figure>
</div>

<figure>
  <img src="/images/work/board_halfsector_voltage_map.png" alt="Mean board voltage per half-sector and board position" loading="lazy" />
  <figcaption>Mean board voltage mapped onto the detector: 50 half-sectors × 48 board positions.</figcaption>
</figure>

## Result

Every installed board has a validated per-channel voltage map, and the campaign statistics feed directly into
the sector-level equalisation (next project). The work was presented at ICPPA 2026.

<div class="todo">Check the numbers above (2,752 tested = 2,400 + 352 spare; 3,877 files; 2,448-board roster) and the campaign dates (first tests Aug 2021?). Add a one-line outcome, e.g. the fraction of boards within spec or the number rejected.</div>

**Transferable skills:** large-scale data reconciliation, robust per-unit model fitting, statistical QA over thousands of devices, and reproducible batch pipelines.
