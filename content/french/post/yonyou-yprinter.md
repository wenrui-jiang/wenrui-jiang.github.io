+++
title = "Yonyou Network Technology Co., Ltd. - Ingénieur développement backend"
date = "2026-07-01"
period = "2026.07 - Aujourd'hui"
draft = false
+++

### Yonyou Network Technology Co., Ltd. - Département développement installateur

<i class="fa-solid fa-calendar-days"></i> **2026.07 - Aujourd'hui**  
<i class="fa-solid fa-briefcase"></i> **Ingénieur développement backend**

### Nom du projet

Installateur dédié YonBIP/iuap (YPRInstaller)

### Présentation du projet

Plateforme backend d'orchestration d'installation pour les scénarios de déploiement privé et de cloud dédié YonBIP. Construite en Go, elle abstrait les packages produit, middlewares, microservices, Nginx, l'initialisation de bases de données et la publication vers le centre de configuration en processus automatisés configurables, orchestrables et traçables, adaptés au bare metal, au cloud conteneurisé et aux environnements multi-pools de ressources.

### Stack technique

Go, Beego, DDD/CommandBus, YAML DSL, LevelDB, K8s client-go, SSH/SFTP, MySQL, adaptation aux bases de données nationales

### Mon travail

- Participation à la modélisation des tâches d'installation et à la génération DSL, en transformant packages, middlewares, hôtes, pools de ressources et paramètres cloud-native en plans d'installation exécutables pour installation, mise à niveau, migration et patchs.
- Participation au flux principal d'installation produit et à la boucle d'exécution des plugins, couvrant la modélisation des paramètres, la génération de plans, l'exécution par étapes avec Actuator, l'orchestration des dépendances et le déploiement des plugins product/app.
- Participation à la publication de configuration YMS et à l'écriture des états d'installation, avec les flux Build / Check / Publish et la synchronisation entre l'état local LevelDB et l'état distant CMDB.
- Participation à l'adaptation des canaux bare metal et cloud conteneurisé, en distinguant initialisation des hôtes, ressources K8s, Nginx et initialisation de bases de données sous un modèle d'étapes unifié.
