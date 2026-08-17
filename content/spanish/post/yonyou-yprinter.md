+++
title = "Yonyou Network Technology Co., Ltd. - Ingeniero de desarrollo backend"
date = "2026-07-01"
period = "2026.07 - Presente"
draft = false
+++

### Yonyou Network Technology Co., Ltd. - Departamento de desarrollo del instalador

<i class="fa-solid fa-calendar-days"></i> **2026.07 - Presente**  
<i class="fa-solid fa-briefcase"></i> **Ingeniero de desarrollo backend**

### Nombre del proyecto

Instalador dedicado YonBIP/iuap (YPRInstaller)

### Resumen del proyecto

Plataforma backend de orquestación de instalaciones para entregas privadas y de nube dedicada de YonBIP. Construida con Go, abstrae paquetes de producto, middleware, microservicios, Nginx, inicialización de bases de datos y publicación en el centro de configuración como procesos automatizados, configurables, orquestables y trazables para entornos bare metal, nube de contenedores y múltiples pools de recursos.

### Tecnologías

Go, Beego, DDD/CommandBus, YAML DSL, LevelDB, K8s client-go, SSH/SFTP, MySQL, adaptación a bases de datos nacionales

### Mi trabajo

- Participé en el modelado de tareas de instalación y generación de DSL, convirtiendo paquetes, middleware, hosts, pools de recursos y parámetros cloud-native en planes ejecutables para instalación, actualización, migración y parches.
- Participé en el flujo principal de instalación y el ciclo de ejecución de plugins, cubriendo modelado de parámetros, generación de planes, ejecución por fases con Actuator, orquestación de dependencias y despliegue de plugins product/app.
- Participé en la publicación de configuración YMS y escritura de estado, organizando los flujos Build / Check / Publish y la sincronización entre el estado local en LevelDB y el estado remoto en CMDB.
- Participé en la adaptación de canales bare metal y nube de contenedores, distinguiendo inicialización de hosts, recursos K8s, Nginx e inicialización de bases de datos bajo un modelo de fases unificado.
