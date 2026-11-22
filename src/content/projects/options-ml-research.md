---
title: Machine learning for index-options trading (research)
summary: Self-directed research on ML and deep-learning models for index-options strategies, evaluated with paper trading, with the focus on methodology over returns.
period: 2025 – ongoing
org: Independent project
order: 10
featured: false
skills: [Python, time-series ML, deep learning, backtesting, options pricing, risk metrics]
needsInput: true
---

## The problem

Can learned models find a robust edge in index-options strategies once realistic costs are included? Most
attempts fail in ways that are easy to miss: look-ahead bias, overfitting to one market regime, and ignoring
slippage and fees.

## Approach

- Data pipeline for underlying and option-chain data, with Black–Scholes pricing and Greeks.
- Feature sets and models compared under walk-forward (out-of-sample) validation.
- Paper trading through a broker API to measure live behaviour against backtests.

<div class="todo">This page is a placeholder. The code is on another machine or drive, or will be rebuilt. Fill in once it exists: data period, models tried, the validation protocol, and honest results (including negative ones). Remove the page if you'd rather not show it.</div>
