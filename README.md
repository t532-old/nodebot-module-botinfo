# nodebot-module-botinfo
nodebot-module-botinfo 是 nodebot 的官方模块。它提供了查询 qq bot 信息所需的一些功能。

*此模块可以与 nodebot-module-helper 协同工作。*

## 命令
- about: 发送 bot 的版本信息。
- usage: 发送命令的用量信息。

## 依赖
- MongoDB 3.x

## 配置模板
将以下内容复制到你的 config.yml 进行配置：
```yml
botinfo:
    version: '5.0.0' # {string} The version. This only influences the botinfo.about command.
```