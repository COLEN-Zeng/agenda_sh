# Agenda

轻量级作业计划库

## 配置任务

```js
    agenda.every(interval, functionName, [data], [options], [cb])
    agenda.every('00 09 18 * * *', 'updateCampaignTimeout', {}, {timezone: 'Asia/Shanghai'}) // 市区默认America/New_York
    agenda.every('30 seconds', 'updateCampaignOverBudget')
    agenda.every('1 minutes', 'synchronizeBudget')
```

### 参数说明

 interval
可以是字符串，或cron时间

```s
* * * * * *
| | | | | |
| | | | | +-- 星期几（范围：0-6，星期一代表0）
| | | | +---- 月（范围：0-11）
| | | +------ 每月的某天（范围：1-31）
| | +-------- 小时（范围：0-23）
| +---------- 分钟（范围：0-59）
+------------ 秒（范围：0-59）
```
