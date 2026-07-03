+++
title = "项目"
description = "项目与技术工作"
date = "2025-05-19"
author = "蒋文睿"
+++

## 医疗预约平台 - 智能导诊 Agent 接入改造

- **时间：**2026.06 - 2026.07
- **角色：**后端 / Agent 应用开发
- **架构：**Spring Cloud、Spring Boot、OpenFeign、Redis、MySQL、MongoDB、JWT、DeepSeek API、工作流状态机

### 我做了什么

- 设计独立 Agent 接入方案，将导诊对话与工具编排和原有预约挂号核心服务解耦。
- 设计导诊工作流状态机和 slots 槽位，支持症状收集、科室推荐、查号源、挂号确认、订单提交与就诊引导。
- 接入 DeepSeek 进行意图识别与槽位抽取，并通过后端确认保护避免模型越权直接下单。
- 封装医院、科室、排班、就诊人、订单工具调用并记录参数、耗时与失败原因。

**访问链接：**[http://jiangwenrui.com:8082/](http://jiangwenrui.com:8082/)
