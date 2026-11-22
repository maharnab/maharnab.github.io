---
title: Test-station software for Thirty Meter Telescope actuators
summary: A Qt GUI and an embedded C server that drove and validated the mirror-segment actuators built in India for the Thirty Meter Telescope before they were shipped to the US.
period: 2013 – 2014
org: Indian Institute of Astrophysics, Bangalore · TMT India
role: Sole developer of the client and server software (BS thesis project, then a 9-month internship).
order: 7
featured: true
cover: /images/work/tmt_test_station.svg
coverAlt: Diagram of the actuator test station, embedded server and GUI
skills: [C++, Qt, embedded C, pthreads, TCP sockets, real-time plotting, hardware testing]
links:
  - { label: 'GUI code (GitHub)', href: 'https://github.com/maharnab/tactsof' }
  - { label: 'Server code (GitHub)', href: 'https://github.com/maharnab/tactsof-server-side' }
needsInput: true
---

## The problem

The Thirty Meter Telescope's primary mirror is made of 492 hexagonal segments, each positioned by three
precision actuators. India's contribution included actuators built by Indian industry. Each unit's voice-coil
motor, off-loader motor and position encoder had to be tested against specification before shipment.

## What I built

<figure>
  <img src="/images/work/tmt_test_station.svg" alt="Actuator under test, embedded server on an ARM single-board computer, and Qt GUI client over LAN" loading="lazy" />
  <figcaption>The test-station architecture.</figcaption>
</figure>

- **Embedded server** in C on an ARM single-board computer. It drives the motors through GPIO, samples sensors
  through the ADC, and serves test commands over TCP, using pthreads.
- **Qt GUI client** for operators: test sequences for the encoder, off-loader (1/3/6 mm steps) and voice-coil
  motor, live plots, and data logging over the LAN.
- **Outcome:** the software was used at the IIA test station during production testing. Actuators that passed
  went on to further testing in the US.

<div class="todo">Add a photo of the test station or a GUI screenshot if you have one, roughly how many actuators were tested, and a link to the NEMA 2015 talk.</div>
