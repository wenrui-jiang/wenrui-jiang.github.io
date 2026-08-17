+++
title = "Project"
description = "Projects and technical work"
date = "2025-05-19"
author = "Jiang Wenrui"
+++

## Triage Agent Integration for a Medical Information Integration Platform

- **Period:** 2026.06 - 2026.07
- **Role:** Backend / Agent Application Developer
- **Tech Stack:** Java, Spring Boot, Spring Cloud, OpenFeign, DeepSeek API, Function Calling / Tool Calling, Agent Workflow, Session State, Human-in-the-loop, Redis, MySQL, MongoDB, JWT, Nginx, Docker

### Project Overview

For a city-level medical information integration platform, I added an intelligent triage Agent microservice on top of a Spring Cloud appointment system that aggregates departments, doctors, and schedules from local medical institutions. The Agent connects to existing business APIs to support symptom understanding, visit-intent recognition, department recommendation, schedule lookup, booking confirmation, and pre-consultation report generation.

### What I Did

- Designed an independent Agent microservice integration that decouples triage orchestration from hospital, user, and order services; wrapped allowlisted tools through OpenFeign and used DeepSeek native Tool Calling to form a multi-turn model-decision, tool-execution, result-return loop.
- Designed a state machine for symptom intake, department recommendation, schedule lookup, booking confirmation, order submission, and visit guidance; maintained multi-turn context through slots and prevented unauthorized ordering with emergency rules, negative-symptom recognition, and Human-in-the-loop confirmation.
- Built an Agent evaluation set covering emergency recognition, negative symptoms, tool routing, parameter completeness, and order-submission protection.
- Designed short-term session and long-term memory storage with Redis and vector retrieval concepts to support shared sessions, recovery after restart, and user-level memory isolation.
- Added idempotency protection to booking APIs and timeout, bounded retry, circuit-breaker, and fallback handling to OpenFeign tool calls.
- Built a RAG knowledge base for departments, booking rules, and visit instructions with document parsing, hybrid retrieval, citation tracing, and incremental updates.

**Project URL:** [https://medical.jiangwenrui.com/](https://medical.jiangwenrui.com/)
