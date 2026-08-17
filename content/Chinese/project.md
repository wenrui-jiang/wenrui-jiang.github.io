+++
title = "项目"
description = "项目与技术工作"
date = "2025-05-19"
author = "蒋文睿"
+++

## 医疗信息集成平台导诊 Agent 接入

- **时间:** 2026.06 - 2026.07
- **角色:** 后端 / Agent 应用开发
- **技术栈:** Java, Spring Boot, Spring Cloud, OpenFeign, DeepSeek API, Function Calling / Tool Calling, Agent Workflow, Session State, Human-in-the-loop, Redis, MySQL, MongoDB, JWT, Nginx, Docker

### 项目简介

面向城市级医疗信息整合平台，平台汇聚当地医疗机构的科室、医生及排班等信息，并基于 Spring Cloud 微服务架构提供医疗预约服务。在原有医院、用户、订单等核心服务解耦运行的情况下，新增智能导诊 Agent 微服务，通过对接既有业务接口，为患者提供症状理解、就诊意图识别、科室推荐、号源查询、挂号确认及预诊报告生成等能力，降低患者理解医院科室体系和选择就诊科室的门槛。

### 我的工作

- 设计独立 Agent 微服务接入方案，将导诊编排与医院、用户、订单等核心服务解耦；通过 OpenFeign 封装白名单工具，并基于 DeepSeek 原生 Tool Calling 实现多轮“模型决策、工具执行、结果回传”闭环。
- 设计症状收集、科室推荐、号源查询、挂号确认、订单提交及就诊引导状态机，通过 slots 维护多轮上下文，并结合急症规则、否定症状识别及 Human-in-the-loop 确认机制阻止模型越权下单。
- 构建覆盖急症识别、否定症状、工具路由、参数完整性及下单保护的 Agent 评测集，为后续量化任务完成率、工具调用准确率和响应延迟提供验证基础。
- 基于 Redis 与向量检索思路设计短期会话和长期记忆双层存储，支持多实例会话共享、服务重启恢复与用户级记忆隔离。
- 为挂号接口设计幂等保护，并为 OpenFeign 工具调用增加超时、有限重试、熔断和降级，降低重复提交与外部服务波动带来的风险。
- 建设面向医院科室、挂号规则及就诊须知的 RAG 知识库，支持文档解析、混合检索、引用溯源和增量更新。

**项目地址:** [https://medical.jiangwenrui.com/](https://medical.jiangwenrui.com/)
