// src/constants/photos.ts

// 1. 引入 Astro 内置的图片元数据类型
import type { ImageMetadata } from 'astro';

// 2. 静态导入你放在 src/assets 下的原图
import imgBohaidengta from '../assets/gallery/images/bohaidengta.jpg';
import imgLamian from '../assets/gallery/images/lamian.jpg';
import imgMocha from '../assets/gallery/images/mocha.jpg';
import imgShaoniao from '../assets/gallery/images/shaoniao.jpg';
import imgRibenyuzhi from '../assets/gallery/images/ribenyuzhi.jpg';

export interface Photo {
  id: string;
  src: ImageMetadata; // 3. 关键：把原先的 string 改为 ImageMetadata
  title: string;
  exif: string;
  category: string;
  likes: number;
  date: string;
}

export const photos: Photo[] = [
  { 
    id: "p1",
    src: imgBohaidengta, // 4. 直接使用上面 import 进来的变量
    title: "烟台-渤海灯塔", 
    exif: "Canon EOS 800D | f/8 | 1/500s | ISO 100",
    category: "风景",
    likes: 342,
    date: "2020-08-15" 
  },
  { 
    id: "p2",
    src: imgLamian,      
    title: "一兰拉面", 
    exif: "iPhone 14 Pro",
    category: "美食",
    likes: 521,
    date: "2025-02-13"
  },
  { 
    id: "p7",
    src: imgMocha,      
    title: "抹茶", 
    exif: "iPhone 14 Pro",
    category: "美食",
    likes: 521,
    date: "2025-02-14"
  },
  { 
    id: "p5",
    src: imgShaoniao, 
    title: "烧鸟", 
    exif: "iPhone 14 Pro",
    category: "美食",
    likes: 289,
    date: "2026-02-13"
  },
  { 
    id: "p6",
    src: imgRibenyuzhi, 
    title: "日本-宇治", 
    exif: "Canon EOS 800D | f/4 | 1/250s | ISO 200",
    category: "城市",
    likes: 672,
    date: "2026-02-22"
  }
];

export const categories = ["全部", ...new Set(photos.map(p => p.category))];