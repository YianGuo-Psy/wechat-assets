# 心启新章·悦见成长 — 微信公众号素材与替换说明

## 文章
- slug: 2026-sept-heart-growth
- HTML: wechat-rich.html

## 现场照片占位
当前 HTML 不再使用固定高度底色占位框，而全部使用普通 `<img>`。
后续替换现场照片时，只需替换对应 `src`；图片的高度会根据实际宽高比自动变化。

- PHOTO_01 开场布置：临时引用 articles/2026-fall-psych-adjustment/assets/01-cover-campus.jpg
- PHOTO_02 活动精彩瞬间：临时引用 03-campus-desk.jpg
- PHOTO_03 活动精彩瞬间：临时引用 04-campus-walk.jpg
- PHOTO_04 作品/留言：临时引用 05-campus-corridor.jpg
- PHOTO_05 作品/留言：临时引用 13-emotion-campus-evening.jpg
- PHOTO_06 奖品展示：临时引用 03-campus-desk.jpg
- PHOTO_07 结尾合影：临时引用 19-ending-sky.jpg

以上临时图片均已存放在同一 GitHub 仓库中，通过 raw.githubusercontent.com HTTPS 地址引用。

## 稳定性处理
- 原 A07 章节标题素材不再进行 HTML 动态裁剪，改为 HTML/CSS 标签，避免微信后台裁剪错位。
- 原 A11 分隔素材不再动态裁剪，改为 HTML 文本/线条分隔。
- A01、A09、A10 保持为区域背景，内部文字均为真实可编辑 HTML。
- A02、T01、T02 保持独立图片。
- 请优先在 135 中导入并使用“保存同步”到微信公众号后台。
