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
    src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80", 
    title: "远山的呼唤", 
    exif: "Canon EOS 800D | f/8 | 1/500s | ISO 100",
    category: "风景",
    likes: 342,
    date: "2025-10-12"
  },
  { 
    id: "p2",
    src: "https://images.unsplash.com/photo-1493770348161-369560ae357d?auto=format&fit=crop&w=800&q=80", 
    title: "深夜食堂的烟火", 
    exif: "Canon EOS 800D | f/2.8 | 1/100s | ISO 400",
    category: "美食",
    likes: 521,
    date: "2025-11-05"
  },
  { 
    id: "p3",
    src: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=800&q=80", 
    title: "城市街角", 
    exif: "Canon EOS 800D | f/5.6 | 1/200s | ISO 100",
    category: "城市",
    likes: 128,
    date: "2026-01-20"
  },
  { 
    id: "p4",
    src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80", 
    title: "晨雾弥漫", 
    exif: "Canon EOS 800D | f/8 | 1/125s | ISO 100",
    category: "风景",
    likes: 456,
    date: "2026-02-10"
  },
  { 
    id: "p5",
    src: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=800&q=80", 
    title: "午后咖啡", 
    exif: "Canon EOS 800D | f/1.8 | 1/60s | ISO 800",
    category: "美食",
    likes: 289,
    date: "2026-02-18"
  },
  { 
    id: "p6",
    src: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=800&q=80", 
    title: "晚霞迷踪", 
    exif: "Canon EOS 800D | f/4 | 1/250s | ISO 200",
    category: "城市",
    likes: 672,
    date: "2026-02-22"
  }
];

// 提取所有不重复的分类，方便页面渲染 Filter 按钮
export const categories = ["全部", ...new Set(photos.map(p => p.category))];