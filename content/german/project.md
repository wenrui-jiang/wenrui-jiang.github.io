+++
title = "Projekt"
description = "Projekte und technische Arbeit"
date = "2025-05-19"
author = "Jiang Wenrui"
+++

## Integration eines Triage-Agenten in eine medizinische Informationsplattform

- **Zeitraum:** 2026.06 - 2026.07
- **Rolle:** Backend / Agent-Anwendungsentwicklung
- **Technologien:** Java, Spring Boot, Spring Cloud, OpenFeign, DeepSeek API, Function Calling / Tool Calling, Agent Workflow, Session State, Human-in-the-loop, Redis, MySQL, MongoDB, JWT, Nginx, Docker

### Projektüberblick

Pour une plateforme urbaine d'information médicale regroupant services, médecins et plannings, j'ai ajouté un microservice Agent de triage à un système de rendez-vous Spring Cloud. L'Agent s'appuie sur les APIs existantes pour comprendre les symptômes, reconnaître l'intention de consultation, recommander un service, consulter les créneaux, confirmer une réservation et générer un rapport préalable.

### Meine Arbeit

- Conception d'un microservice Agent indépendant découplé des services hôpital, utilisateur et commande; encapsulation d'outils autorisés via OpenFeign et boucle Tool Calling avec DeepSeek.
- Conception d'une machine d'états pour symptômes, recommandation, créneaux, confirmation, commande et guidage; contexte par slots, règles d'urgence, symptômes niés et confirmation Human-in-the-loop.
- Construction d'un jeu d'évaluation couvrant urgences, symptômes niés, routage d'outils, complétude des paramètres et protection de commande.
- Conception d'un stockage de session courte et mémoire longue avec Redis et recherche vectorielle.
- Ajout d'idempotence aux APIs de réservation et de timeouts, retries bornés, circuit breaker et fallback pour OpenFeign.
- Construction d'une base RAG pour services, règles de réservation et consignes de visite avec parsing, recherche hybride, traçabilité et mise à jour incrémentale.

**Projekt-URL:** [https://medical.jiangwenrui.com/](https://medical.jiangwenrui.com/)
