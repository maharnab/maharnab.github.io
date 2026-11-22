---
title: Design of a live data-quality monitoring system
summary: Design and prototype of a streaming monitoring system for 38,400 detector channels, covering the TCP receiver, a queueing layer, per-channel metrics and bulk database ingest, sized for 1,000 events/s (about 4.6 GB/s raw).
period: '2026'
org: LHEP, JINR · NICA-MPD ECAL
role: System design, receiver implementation and benchmarking.
order: 4
featured: true
cover: /images/work/monitoring_pipeline.svg
coverAlt: Data-path diagram from detector to live UI
skills: [C++17, Python, PostgreSQL, Docker Compose, performance profiling, system design, TCP]
metrics:
  - { value: '≈4.6 GB/s', label: 'raw input at 1,000 events/s' }
  - { value: '768k', label: 'channel-waveforms per second to reduce' }
  - { value: '38,400', label: 'channels on the live map' }
needsInput: true
---

## The problem

During data taking, operators need to see within seconds whether any of the 38,400 calorimeter channels is
dead, noisy or drifting. At full rate the detector produces about 4.6 GB/s of raw waveforms. Storing
everything and checking it later is too slow, and a single-threaded script falls behind within minutes.

## What I built

<figure>
  <img src="/images/work/monitoring_pipeline.svg" alt="Pipeline: ADC boards → C++ TCP/TLV receiver → segment queue → per-channel metrics and PostgreSQL COPY writers → live UI" loading="lazy" />
  <figcaption>The data path, from the readout boards to the operator display.</figcaption>
</figure>

- **Throughput budget.** I worked out the data rates (events/s → channel-waveforms/s → bytes/s → database
  rows/s) and the CPU and GPU split, then defined benchmark experiments with acceptance criteria.
- **Receiver.** A Python reference implementation of the binary TLV protocol, then an optimised C++ receiver
  with a zero-allocation reduction hot path. Both were validated against replayed DAQ captures.
- **Pipelines.** Two designs, a linear pipeline and a staged one, with segment queues for back-pressure and
  replay, a pool of PostgreSQL `COPY` writers for bulk ingest, and per-channel pedestal, amplitude and tail
  statistics.
- **Deployment.** Containerised with Docker Compose for reproducible benchmarking.

<div class="todo">Add measured numbers: sustained throughput of the C++ receiver and the writer pool on the benchmark host, and the end-to-end latency. Say whether this is running in real data taking or remains a prototype.</div>

**Transferable skills:** streaming data engineering, performance work in C++, database bulk ingest, and capacity planning.
