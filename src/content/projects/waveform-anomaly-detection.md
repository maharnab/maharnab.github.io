---
title: Anomaly detection on detector waveforms
summary: A streaming C++17 engine that classifies every SiPM pulse into normal, no-signal or anomalous using physics-informed rules, the first stage of an ML anomaly-detection project on real sensor data.
period: 2026 – ongoing
org: LHEP, JINR · NICA-MPD ECAL
role: "Sole developer: design, rules, tests and data exploration."
order: 3
featured: true
cover: /images/work/waveform_anomaly_examples.png
coverAlt: Normal SiPM pulses next to examples flagged as anomalous
skills: [C++17, streaming I/O, anomaly detection, feature engineering, class imbalance, Python, unit testing]
needsInput: true
---

## The problem

Each calorimeter channel records a 60-sample waveform per event. Most pulses are textbook shapes, but a small
fraction are not: saturation, pile-up, distorted tails, baseline shifts, dead or noisy channels. These are rare
(roughly one in a thousand in a typical run), easy to miss in aggregate statistics, and they bias
calibrations if left in.

## What I built

- **A streaming decoder and analyser** in dependency-free C++17. It reads the raw DAQ archive in bounded chunks,
  so memory stays flat on multi-GB files, and decodes every waveform.
- **Region-based features.** Each pulse is split into pedestal, fast fall, slow rise and post-tail regions.
  Constrained exponential fits and summary statistics describe each region.
- **A rule engine** driven by a versioned, schema-validated JSON file. It assigns one of four decisions and any of
  11+ anomaly codes, such as "tail not finished" or "pedestal shift".
- **Engineering hygiene:** atomic output writes, tests for malformed frames, and a synthetic-data generator,
  so the whole pipeline builds and passes its tests from a clean clone with no external dependencies.

<figure>
  <img src="/images/work/waveform_anomaly_examples.png" alt="Left: 300 normal pulses with their median. Right: six flagged pulses with anomaly codes" loading="lazy" />
  <figcaption>Left: 300 normal pulses from one run (23,703 in the sample). Right: pulses the rule engine flagged, with their anomaly codes.</figcaption>
</figure>

## Next: from rules to ML

The rule engine gives labels, and the region features give a feature matrix. That sets up a supervised and
semi-supervised ML problem with real-world properties: extreme class imbalance, label noise from rules, and
drift between runs. The plan is to compare isolation forests and gradient boosting on the engineered features
against a 1D-CNN or autoencoder on raw samples, using the rules as a baseline.

<div class="todo">Results of the ML stage go here once done: precision and recall against hand-checked labels, and what the model finds that the rules miss. Add a link to the public repository and a sample dataset (waveforms are cleared for release).</div>

**Transferable skills:** anomaly detection under class imbalance, feature engineering on time series, high-throughput C++, and testable data tooling.
