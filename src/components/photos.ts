// src/constants/photos.ts

export interface Photo {
  id: string;
  src: string;
  title: string;
  exif: string;
  category: string;
  likes: number;
  date: string; // 用于默认排序
}

export const photos: Photo[] = [
  { 
    id: "p1",
    src: "/gallery/images/bohaidengta.jpg", 
    title: "烟台-渤海灯塔", 
    exif: "Canon EOS 800D | f/8 | 1/500s | ISO 100",
    category: "风景",
    likes: 342,
    date: "2020-08-15"
  },
  { 
    id: "p2",
    src: "/gallery/images/lamian.jpg",     
    title: "一兰拉面", 
    exif: "iPhone 14 Pro",
    category: "美食",
    likes: 521,
    date: "2025-02-13"
  },
  { 
    id: "p7",
    src: "/gallery/images/mocha.jpg",     
    title: "抹茶", 
    exif: "iPhone 14 Pro",
    category: "美食",
    likes: 521,
    date: "2025-02-14"
  },
  { 
    id: "p5",
    src: "/gallery/images/shaoniao.jpg", 
    title: "烧鸟", 
    exif: "iPhone 14 Pro",
    category: "美食",
    likes: 289,
    date: "2026-02-13"
  },
  { 
    id: "p6",
    src: "/gallery/images/ribenyuzhi.jpg", 
    title: "日本-宇治", 
    exif: "Canon EOS 800D | f/4 | 1/250s | ISO 200",
    category: "城市",
    likes: 672,
    date: "2026-02-22"
  }
];

// 提取所有不重复的分类，方便页面渲染 Filter 按钮
export const categories = ["全部", ...new Set(photos.map(p => p.category))];