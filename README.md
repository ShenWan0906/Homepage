# 📷 光影浮生

> "用镜头记录人间烟火，定格那些不经意的瞬间。"

[![Astro](https://img.shields.io/badge/Built%20with-Astro-ff5a03?style=flat-square&logo=astro&logoColor=white)](https://astro.build/)
[![Tailwind CSS](https://img.shields.io/badge/Style-Tailwind_CSS-38bdf8?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.style=flat-square)](https://opensource.org/licenses/MIT)

**光影浮生** 是一个基于 `Astro` + `Tailwind CSS` 构建的极简摄影作品展示画廊。作为 [项目经理的浮生绘记](https://shenwan.life) 的数字子站，它剥离了所有冗余的社交元素，采用类似“暗房”的沉浸式深色设计，将视觉焦点完全还给影像本身。

🔗 **[点击这里，在线预览我的光影集](https://shenwan.life/gallery/)**

---

## ✨ 核心特性

- 🌊 **纯 CSS 瀑布流**：抛弃笨重的 JS 布局库，利用 CSS `columns` 实现轻量级、高性能的响应式照片墙。
- 🏷️ **丝滑分类筛选**：内置优雅的淡入微上浮动画（Fade-In-Up），切换分类时如洗牌般流畅，告别生硬的闪烁感。
- 🖼️ **沉浸式灯箱**：点击图片即可放大查看细节与 Exif 信息（光圈、快门、ISO 等）。
- ⚡ **极致性能**：基于 Astro SSG（静态站点生成），零客户端 JS 负担（按需加载），享受秒级打开体验。
- 🤖 **全自动化部署**：配置 GitHub Actions CI/CD 流水线，代码 Push 即刻触发打包并自动 SCP 部署至服务器 Nginx 子目录。

## 🛠️ 技术栈

- **框架**: [Astro 4.x](https://astro.build/) - 打造极致内容驱动的静态网站。
- **样式**: [Tailwind CSS](https://tailwindcss.com/) + [daisyUI](https://daisyui.com/) - 实用优先的原子化 CSS 与极简组件库。
- **图标**: [Font Awesome](https://fontawesome.com/) & Astro Icon。
- **设备**: 📷 Canon EOS 800D (18-135 STM)

## 🚀 本地开发与运行

如果你喜欢这个画廊的设计，欢迎 Clone 到本地进行二次开发：

### 1. 克隆项目
```bash
git clone [https://github.com/ShenWan0906/shenwan-gallery.git](https://github.com/ShenWan0906/shenwan-gallery.git)
cd shenwan-gallery
2. 安装依赖
Bash
npm install
3. 本地启动服务
Bash
npm run dev
打开浏览器访问 http://localhost:4321/gallery/ 即可预览。

4. 构建生产环境产物
Bash
npm run build
编译后的纯静态文件将生成在 dist/ 目录下。

📂 目录结构
Plaintext
├── src/
│   ├── components/    # UI 组件 (图片卡片、按钮等)
│   ├── layouts/       # 全局基础布局 (Layout.astro)
│   ├── pages/         # 页面路由 (index.astro)
│   └── styles/        # 全局样式与自定义动画
├── public/            # 静态资源 (图片、favicon 等)
├── astro.config.mjs   # Astro 核心配置文件 (已配置 /gallery base 路径)
└── package.json       # 项目依赖与脚本


👨‍💻 关于作者
西瓜 (@ShenWan)
项目经理 (PMP) / 独立开发者 / 个人博主


📄 开源协议
本项目基于 MIT License 开源。欢迎 Star ⭐️ 和 Fork！如果你使用了本模板，如果能在页脚保留一个回到本仓库的链接，我将不胜感激。