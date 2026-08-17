+++
title = "Beijing Heyicloud Technology Co., Ltd. - Java Developer Intern"
date = "2022-12-01"
draft = false
+++

### Beijing Heyicloud Technology Co., Ltd.

<i class="fa-solid fa-calendar-days"></i> **2022.12 - 2023.03**  
<i class="fa-solid fa-briefcase"></i> **Java Developer Intern**

### Project Overview

The A/B testing platform analyzes multiple versions of a web page or application, identifies better versions from user behavior and algorithms, and dynamically adjusts traffic allocation.

### Tech Stack

Spring Cloud, MyBatis, MySQL, RabbitMQ, XXL-JOB

### What I Did

- Owned the A/B experiment lifecycle and scheduling module, designed draft, pending, running, paused, and finished states, scheduled start/stop windows with XXL-JOB, and handled duplicate callbacks and concurrent configuration changes with version checks and idempotent APIs.
- Designed stable user traffic splitting by hashing experiment IDs and user identifiers so users consistently stayed in the same version; stored experiment configuration snapshots to isolate historical results.
- Consumed exposure, click, and conversion events asynchronously with RabbitMQ, used unique constraints for idempotent consumption, and aggregated UV, CTR, and CVR metrics by experiment and version.
- Connected aggregated results to Epsilon-Greedy and UCB1 multi-armed bandit strategies, constrained automated traffic shifts with minimum sample size, maximum single-step adjustment, and anomaly rollback, and generated customer email reports.
