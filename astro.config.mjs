import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],

  // 👇 1. 修改为你的真实主站域名（用于生成正确的绝对链接和 SEO sitemap）
  site: 'https://shenwan.life',

  // 👇 2. 核心：配置基础路径。加上这个，打包出来的 CSS 和 JS 才会带上 /gallery/ 前缀
  base: '/gallery',

});