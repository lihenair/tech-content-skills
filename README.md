# tech-content-skills

科技内容创作用的 AI Skill 合集。

## Skills

- [xhs-tech-post](skills/xhs-tech-post/SKILL.md)：把科技新闻、访谈、视频或讨论帖做成小红书图文。完整准确优先；调性跟正文结构走（认知差不是默认主，见 [tones.md](skills/xhs-tech-post/tones.md)）。出图视觉锁在暗色规范（见 [visual.md](skills/xhs-tech-post/visual.md)）。流程还包括降敏、核实引语和数字、定稿后再出图，以及措辞自检。口吻以已落盘文章为底，慢慢形成辨识度。

## 用法

把对应文件夹放进你的 agent 的 skills 目录（例如 `.cursor/skills/` 或 `~/.claude/skills/`），agent 会按 SKILL.md 里的 description 判断何时调用。

## Posts

用上面 skill 做出来的成品，每篇包含文案和配图：

- [2026-10-01 Anthropic 给自己踩刹车](posts/2026-10-01-anthropic-brakes/)：小红书版 `xiaohongshu.md`（含引语时间戳核对清单）、公众号长文 `wechat.md`、10 张配图
- [2026-10-01 MCP 已死？Pi 团队改口](posts/2026-10-01-mcp-debate/)：小红书文案 `xiaohongshu.txt`、10 张配图
- [2026-10-01 Opus 5.5降智了？有人开始拿数据测](posts/2026-10-01-livenerf-opus-nerf/)：livenerf daily tracking experiment on Opus 5.5 quality
