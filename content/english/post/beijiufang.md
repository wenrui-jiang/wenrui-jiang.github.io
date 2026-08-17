+++
title = "Beijing Beijiufang Railway Traffic Technology Co., Ltd. - Backend Project Intern"
date = "2025-04-01"
period = "2025.04 - 2025.07"
draft = false
+++

### Beijing Beijiufang Railway Traffic Technology Co., Ltd.

<i class="fa-solid fa-calendar-days"></i> **2025.04 - 2025.07**  
<i class="fa-solid fa-briefcase"></i> **Backend Project Intern**

### Project Overview

For locomotive maintenance at a heavy-haul railway depot, the project digitized manual ticketing workflows, covering ticket entry and retrieval, maintenance document and image upload, algorithm-recognition result write-back, business data aggregation, and unified maintenance dispatching.

### Tech Stack

Java, Spring Boot, Spring Security, JWT, RBAC, MyBatis-Plus, MySQL, RabbitMQ, MinIO

### What I Did

- Owned the core locomotive maintenance ticketing module, designed data models for tickets, attachments, faults, and recognition results, and used a state machine to track submitted, recognition-pending, review-pending, and completed states.
- Implemented unified authentication and authorization with Spring Security, JWT, and RBAC; designed user-role-permission relationships and restricted data access by depot, department, and position.
- Designed the maintenance document and image processing pipeline with MinIO for files, MySQL for attachment metadata, and RabbitMQ for asynchronous algorithm recognition; added business IDs, state checks, idempotency, retry, and manual review support for callbacks.
- Optimized MySQL indexes and paginated queries for multi-condition search and fault statistics by model, component, fault type, and time range.
