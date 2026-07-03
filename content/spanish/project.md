+++
title = "Proyecto"
description = "Proyectos y trabajo técnico"
date = "2025-05-19"
author = "Jiang Wenrui"
+++

## Integración de Agent inteligente para plataforma de citas médicas

- **Periodo:** 2026.06 - 2026.07
- **Rol:** Desarrollador Backend / Aplicaciones Agent
- **Arquitectura:** Spring Cloud, Spring Boot, OpenFeign, Redis, MySQL, MongoDB, JWT, DeepSeek API, máquina de estados de workflow

### Lo que hice

- Diseñé un plan de integración Agent independiente para desacoplar la orquestación de diálogo/herramientas de triaje de los servicios centrales de citas.
- Construí estados de workflow y slots para recopilación de síntomas, recomendación de departamento, consulta de agenda, confirmación de cita y guía de atención.
- Integré DeepSeek para extracción de intención/slots y añadí validaciones de confirmación en backend para evitar pedidos directos no autorizados.
- Implementé wrappers de herramientas y observabilidad para operaciones de hospital, departamento, agenda, paciente y orden.

**URL de acceso:** [https://medical.jiangwenrui.com/](https://medical.jiangwenrui.com/)
