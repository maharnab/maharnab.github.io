---
title: Calorimeter data analysis inside MPD
summary: Decoding, quality control and calibration analysis of cosmic-ray and beam data recorded with the calorimeter installed in the MPD detector, including a faster waveform-to-digit method for the collaboration's reconstruction software.
period: 2026 – ongoing
org: LHEP, JINR · MPD experiment
role: "Run-level analysis of the installed calorimeter: decoding, QA and cosmic calibration pipeline; author of the fast waveform converter in the MPD decoder."
order: 2.5
featured: true
cover: /images/work/mpd_cosmic_basket_map.png
coverAlt: Per-channel cosmic-muon response maps for one installed half-sector
skills: [C++17, ROOT, RooFit, Python, CMake, memory-mapped I/O, data quality monitoring]
needsInput: true
---

## Context

Once the half-sectors were installed in MPD, the calorimeter started recording data as part of the full
detector: dedicated cosmic-ray runs and, more recently, beam (collision) runs. The questions change at this
stage. Did every channel survive transport and installation? Are the calibrations made in the test hall still
valid in the experiment's own readout and environment? How should the raw waveforms be turned into energies and
times efficiently enough for reconstruction and monitoring?

## Cosmic runs with the installed calorimeter

I built a run-analysis pipeline that runs from the raw DAQ files to per-half-sector reports:

- **Decoding.** A C++17 decoder reads the multi-part raw files of a run through read-only memory mapping. It maps
  every ADC channel to its detector cell using the MPD channel map, and writes one ROOT file per run, with
  waveform-quality information kept for every channel.
- **Quality control.** Baseline level and noise, pulse amplitudes and the fraction of waveforms with pulses,
  checked per channel and shown as maps in detector coordinates.
- **Cosmic calibration.** Transverse and longitudinal muon selections with RooFit response fits per cell,
  reported as maps of mean response, fit quality and muon counts for every installed half-sector.

One cosmic run with eight installed half-sectors gave **5.4 million events and 81 million waveforms over 6,144
channels**, processed with memory that stays flat regardless of run length.

<figure>
  <img src="/images/work/mpd_cosmic_basket_map.png" alt="Maps of mean response, fit quality and muon counts for one half-sector" loading="lazy" />
  <figcaption>One installed half-sector in a cosmic run: per-cell response, fit χ²/ndf and number of selected muons (φ × z).</figcaption>
</figure>

<figure>
  <img src="/images/work/mpd_run_qc_distributions.png" alt="Distributions of baseline mean, baseline RMS, maximum amplitude and pulse fraction per channel" loading="lazy" />
  <figcaption>Run-level QA: baseline, noise, amplitude and pulse fraction for every channel.</figcaption>
</figure>

## A faster waveform converter for MPD reconstruction

For the collaboration's decoding and reconstruction software, I wrote a fast method that reduces each calorimeter
waveform to one digit: amplitude, integral, time (t50), pulse width, pedestal and tail values, a pile-up
description and quality flags. On the same data it runs **about 3.5–3.9× faster per channel** than the existing
method, and it flags pile-up (two pulses in one waveform), which matters at higher rates.

<figure>
  <img src="/images/work/mpd_pileup_example.png" alt="A waveform with two pulses, both identified by the fast converter" loading="lazy" />
  <figcaption>A pile-up waveform: the converter finds both pulses and marks the integration window and pedestal region.</figcaption>
</figure>

## Beam data

Analysis of the first beam (collision) runs with the calorimeter in MPD has started: reading the experiment's
raw event format, extracting the calorimeter blocks, and per-event displays of the recorded signals.

<div class="todo">Describe the beam-run work in a sentence or two: which runs or period, and what you look at (timing, occupancy, energy deposits, comparison with cosmics?). Add a figure if one can be shown. Confirm the numbers above (cosmic run 137: 8 half-sectors, 5.4 M events, 81 M waveforms; fast converter 3.5–3.9× faster than the Z-score method), and whether the converter has been merged into the main decoder. Check that collaboration rules allow these internal-run figures to be public.</div>
