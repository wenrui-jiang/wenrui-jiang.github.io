+++
title = "Beijing Heyicloud Technology Co., Ltd. - Becario desarrollador Java"
date = "2022-12-01"
period = "2022.12 - 2023.03"
draft = false
+++

### Beijing Heyicloud Technology Co., Ltd.

<i class="fa-solid fa-calendar-days"></i> **2022.12 - 2023.03**  
<i class="fa-solid fa-briefcase"></i> **Becario desarrollador Java**

### Resumen del proyecto

La plataforma A/B analiza versiones de páginas o aplicaciones, determina la mejor versión con datos de usuario y algoritmos, y ajusta dinámicamente la distribución de tráfico.

### Tecnologías

Spring Cloud, MyBatis, MySQL, RabbitMQ, XXL-JOB

### Mi trabajo

- Responsable del ciclo de vida y planificación de experimentos, con estados de borrador, pendiente, ejecución, pausa y finalización; usé XXL-JOB e idempotencia para callbacks y cambios concurrentes.
- Diseñé división estable de usuarios con hash por experimento y usuario, y snapshots de configuración para aislar resultados históricos.
- Consumí eventos de exposición, clic y conversión con RabbitMQ, usando restricciones únicas para consumo idempotente y agregando UV, CTR y CVR.
- Conecté resultados a estrategias Epsilon-Greedy y UCB1, limitando riesgos con muestra mínima, ajuste máximo por paso y rollback de anomalías.
