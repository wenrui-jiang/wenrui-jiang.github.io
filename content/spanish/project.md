+++
title = "Proyecto"
description = "Proyectos y trabajo técnico"
date = "2025-05-19"
author = "Jiang Wenrui"
+++

## Integración de Agent de triaje en una plataforma de información médica

- **Periodo:** 2026.06 - 2026.07
- **Rol:** Desarrollador Backend / Aplicaciones Agent
- **Tecnologías:** Java, Spring Boot, Spring Cloud, OpenFeign, DeepSeek API, Function Calling / Tool Calling, Agent Workflow, Session State, Human-in-the-loop, Redis, MySQL, MongoDB, JWT, Nginx, Docker

### Resumen del proyecto

Para una plataforma urbana de información médica que integra departamentos, médicos y horarios de instituciones locales, añadí un microservicio Agent de triaje sobre una arquitectura Spring Cloud de citas médicas. El Agent se conecta a APIs existentes para comprender síntomas, identificar intención de consulta, recomendar departamentos, consultar disponibilidad, confirmar reservas y generar informes previos.

### Mi trabajo

- Diseñé un microservicio Agent independiente desacoplado de los servicios de hospital, usuario y órdenes; encapsulé herramientas permitidas con OpenFeign y usé DeepSeek Tool Calling para cerrar el ciclo modelo-herramienta-resultado.
- Diseñé una máquina de estados para síntomas, recomendación, consulta de horarios, confirmación, envío de orden y guía de visita; mantuve contexto con slots y añadí reglas de urgencia, reconocimiento de síntomas negados y confirmación Human-in-the-loop.
- Construí un conjunto de evaluación para urgencias, síntomas negados, enrutamiento de herramientas, completitud de parámetros y protección de reservas.
- Diseñé almacenamiento de sesión corta y memoria larga con Redis y recuperación vectorial para compartir sesiones, recuperar tras reinicios y aislar memoria por usuario.
- Añadí idempotencia a las APIs de reserva y timeouts, reintentos limitados, circuit breaker y degradación para llamadas OpenFeign.
- Construí una base RAG para departamentos, reglas de reserva e instrucciones de visita con parsing, recuperación híbrida, trazabilidad de citas y actualización incremental.

**URL del proyecto:** [https://medical.jiangwenrui.com/](https://medical.jiangwenrui.com/)
