# 主页编辑说明

主页已经改成参考页那种简洁的学术个人主页风格。大多数内容集中在 `_data/profile.yml`，以后优先改这个文件即可。

## 常用修改位置

- 姓名、当前身份、所在地、邮箱、GitHub、Google Scholar、LinkedIn、CV：`_data/profile.yml` 顶部。
- 研究兴趣：`_data/profile.yml` 的 `interests`。
- 首页简介：`_data/profile.yml` 的 `intro`。
- Research 三个研究方向：`_data/profile.yml` 的 `research`。
- News：`_data/profile.yml` 的 `news`。
- Publications：`_data/profile.yml` 的 `publications`。每一项的 `links` 可以填 `label` 和 `url`，例如 `Paper`、`Code`、`Project`。
- 工作经历、教育经历、技能：`_data/profile.yml` 中对应的 `experience`、`education`、`skills`。
- 头像：当前使用 `images/profile-initials.svg` 作为无照片占位图。如果想换成自己的照片，把照片放进 `images/`，再把 `_data/profile.yml` 的 `avatar` 改成文件名，例如 `profile.jpg`。
- 颜色、间距、字体和响应式布局：`assets/css/profile.css`。
- 顶部导航和页面结构：`_layouts/profile.html` 与 `_pages/about.md`。一般不需要改。

## 本地预览

在仓库根目录运行：

```bash
bundle install
bundle exec jekyll serve --livereload --host 0.0.0.0
```

然后打开 `http://localhost:4000/`。修改 `_config.yml` 后需要重启 Jekyll。
