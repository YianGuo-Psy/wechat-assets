# 心启新章·悦见成长 — 微信公众号素材与替换说明

## 文章
- slug: `2026-sept-heart-growth`
- HTML: `wechat-rich.html`
- GitHub目录: `articles/2026-sept-heart-growth/`

## 现场照片占位
当前 HTML 不再使用固定高度、固定底色的照片占位框，而全部使用普通 `<img>`。
后续替换现场照片时，只需要替换对应图片的 `src`，图片高度会根据实际比例自动变化，不会与底色框冲突。

- PHOTO_01 开场布置：https://raw.githubusercontent.com/YianGuo-Psy/wechat-assets/main/articles/2026-sept-heart-growth/assets/photo-01-setup-placeholder.jpg
- PHOTO_02 活动精彩瞬间：https://raw.githubusercontent.com/YianGuo-Psy/wechat-assets/main/articles/2026-sept-heart-growth/assets/photo-02-moment-placeholder.jpg
- PHOTO_03 活动精彩瞬间：https://raw.githubusercontent.com/YianGuo-Psy/wechat-assets/main/articles/2026-sept-heart-growth/assets/photo-03-moment-placeholder.jpg
- PHOTO_04 作品/留言：https://raw.githubusercontent.com/YianGuo-Psy/wechat-assets/main/articles/2026-sept-heart-growth/assets/photo-04-work-placeholder.jpg
- PHOTO_05 作品/留言：https://raw.githubusercontent.com/YianGuo-Psy/wechat-assets/main/articles/2026-sept-heart-growth/assets/photo-05-work-placeholder.jpg
- PHOTO_06 奖品展示：https://raw.githubusercontent.com/YianGuo-Psy/wechat-assets/main/articles/2026-sept-heart-growth/assets/photo-06-prize-placeholder.jpg
- PHOTO_07 结尾合影：https://raw.githubusercontent.com/YianGuo-Psy/wechat-assets/main/articles/2026-sept-heart-growth/assets/photo-07-ending-placeholder.jpg

这些图片现在都位于本文章自己的 GitHub `assets/` 目录中。

## 稳定性处理
- 原 A07 章节标题素材不再在 HTML 内做动态裁剪，改为 HTML/CSS 章节标签，避免微信后台裁剪错位。
- 原 A11 分隔素材不再动态裁剪，改为简单 HTML 分隔。
- A01、A09、A10 继续作为 135 区域背景使用，其上文字保持真实、可编辑。
- A02、T01、T02 保持独立图片。
- 现场照片占位全部是普通图片元素，没有固定高度背景容器。
- 建议在 135 中导入后使用“保存同步”进入微信公众号后台。
