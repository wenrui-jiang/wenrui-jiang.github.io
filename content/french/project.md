+++
title = "Projet"
description = "Projets et travail technique"
date = "2025-05-19"
author = "Jiang Wenrui"
+++

## Intégration d'un Agent intelligent pour plateforme de rendez-vous médicaux

- **Période :** 2026.06 - 2026.07
- **Rôle :** Développeur Backend / Application Agent
- **Architecture :** Spring Cloud, Spring Boot, OpenFeign, Redis, MySQL, MongoDB, JWT, API DeepSeek, machine d'états de workflow

### Ce que j'ai fait

- Conçu un plan d'intégration Agent indépendant pour découpler le dialogue de triage et l'orchestration des outils des services de réservation centraux.
- Construit les états de workflow et les slots pour la collecte des symptômes, la recommandation de service, la recherche de créneaux, la confirmation et le guidage de consultation.
- Intégré DeepSeek pour l'extraction intention/slots avec des garde-fous de confirmation côté backend afin d'empêcher les commandes directes non autorisées.
- Mis en place des wrappers d'outils et l'observabilité pour les opérations hôpital, service, planning, patient et commande.

**URL d'accès :** [https://medical.jiangwenrui.com/](https://medical.jiangwenrui.com/)
