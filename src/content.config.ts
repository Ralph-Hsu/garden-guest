import { defineCollection, reference, z } from "astro:content";
import { glob } from "astro/loaders";

// May also need to update /src/types/index.d.ts when updating this file
// When updating the set of searchable collections, update collectionList in /src/pages/search.astro

const searchable = z.object({
  title: z.string(),
  description: z.string().optional(),
  autodescription: z.boolean().default(true),
  draft: z.boolean().default(false),
});

const social = z.object({
  discord: z.string().optional(),
  email: z.string().optional(),
  facebook: z.string().optional(),
  github: z.string().optional(),
  instagram: z.string().optional(),
  linkedIn: z.string().optional(),
  pinterest: z.string().optional(),
  tiktok: z.string().optional(),
  website: z.string().optional(),
  youtube: z.string().optional(),
});

// =============================================
// 中台庭園：四大主題 Collections
// =============================================

// 櫻花品種（cherry）
// 圖片路徑範例：/images/cherry/kawazu/cover.jpg
const cherry = defineCollection({
  loader: glob({ pattern: "**\/[^_]*.{md,mdx}", base: "./src/content/cherry" }),
  schema: z.object({
    title: z.string(),                          // 品種中文名稱
    latinName: z.string().optional(),            // 拉丁學名
    description: z.string().optional(),          // 簡介
    draft: z.boolean().default(false),
    image: z.string().optional(),               // 封面圖：/images/cherry/[品種]/cover.jpg
    gallery: z.array(z.string()).optional(),     // 更多照片陣列
    bloomSeason: z.string().optional(),          // 花期文字，如「1月下旬～2月」
    color: z.string().optional(),               // 花色，如「粉紅」
    mapPosition: z.object({                      // 園區地圖上的位置（百分比座標）
      x: z.number(),                             // 水平位置 0-100
      y: z.number(),                             // 垂直位置 0-100
      label: z.string().optional(),              // 地圖標籤文字
    }).optional(),
    order: z.number().default(99),              // 顯示排序
  }),
});

// 睡蓮品種（lotus）
// 圖片路徑範例：/images/lotus/hardy/[品種].jpg 或 /images/lotus/tropical/[品種].jpg
const lotus = defineCollection({
  loader: glob({ pattern: "**\/[^_]*.{md,mdx}", base: "./src/content/lotus" }),
  schema: z.object({
    title: z.string(),                           // 品種中文名稱
    latinName: z.string().optional(),             // 拉丁學名
    type: z.enum(["hardy", "tropical"]).optional(), // -index.md 無此欄位故設為 optional
    description: z.string().optional(),           // 簡介
    draft: z.boolean().default(false),
    image: z.string().optional(),                // 照片：/images/lotus/[hardy|tropical]/[品種].jpg
    color: z.string().optional(),                // 花色
    bloomSeason: z.string().optional(),           // 花期
    order: z.number().default(99),
  }),
});

// 盆栽品種（bonsai）
// 封面圖：/images/bonsai/[品種]/cover.jpg
// 分盆照：/images/bonsai/[品種]/001.jpg、002.jpg...
const bonsai = defineCollection({
  loader: glob({ pattern: "**\/[^_]*.{md,mdx}", base: "./src/content/bonsai" }),
  schema: z.object({
    title: z.string(),                           // 品種名稱
    latinName: z.string().optional(),             // 拉丁學名
    category: z.string().optional(),             // 分類，如「松柏類」、「榕樹類」
    description: z.string().optional(),           // 品種介紹
    draft: z.boolean().default(false),
    image: z.string().optional(),                // 封面圖：/images/bonsai/[品種]/cover.jpg
    specimens: z.array(z.object({               // 分盆個體陣列
      id: z.string(),                            // 如「pine-001」
      label: z.string(),                         // 展示標籤
      image: z.string(),                         // 分盆照片路徑
      note: z.string().optional(),               // 備注（樹齡、特色等）
    })).optional(),
    order: z.number().default(99),
  }),
});

// 花草品種（flora）
// 圖片路徑範例：/images/flora/[品種].jpg
const flora = defineCollection({
  loader: glob({ pattern: "**\/[^_]*.{md,mdx}", base: "./src/content/flora" }),
  schema: z.object({
    title: z.string(),                           // 品種名稱
    latinName: z.string().optional(),             // 拉丁學名
    plantType: z.enum(["草本", "藤本", "小灌木"]).optional(), // 植物類型
    description: z.string().optional(),           // 簡介
    draft: z.boolean().default(false),
    image: z.string().optional(),                // 照片：/images/flora/[品種].jpg
    color: z.string().optional(),                // 花色
    bloomSeason: z.string().optional(),           // 花期
    order: z.number().default(99),
  }),
});

// 最新花況（news，原 blog 改名）
// 圖片路徑範例：/images/news/[文章slug].jpg
const news = defineCollection({
  loader: glob({ pattern: "**\/[^_]*.{md,mdx}", base: "./src/content/news" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    autodescription: z.boolean().default(true),
    draft: z.boolean().default(false),
    date: z.date().optional(),
    image: z.string().optional(),               // 封面圖：/images/news/[slug].jpg
    imageAlt: z.string().default(""),
    categories: z.array(z.string()).optional(),
    tags: z.array(z.string()).optional(),
  }),
});

// =============================================
// 原有 Collections（保留，導覽已隱藏）
// =============================================

const about = defineCollection({
  loader: glob({ pattern: "-index.{md,mdx}", base: "./src/content/about" }),
  schema: ({ image }) =>
    searchable.extend({
      image: image().optional(),
      imageAlt: z.string().default(""),
    }),
});

const authors = defineCollection({
  loader: glob({
    pattern: "**\/[^_]*.{md,mdx}",
    base: "./src/content/authors",
  }),
  schema: ({ image }) =>
    searchable.extend({
      email: z.string().optional(),
      image: image().optional(),
      imageAlt: z.string().default(""),
      social: social.optional(),
    }),
});

const blog = defineCollection({
  loader: glob({ pattern: "**\/[^_]*.{md,mdx}", base: "./src/content/blog" }),
  schema: ({ image }) =>
    searchable.extend({
      date: z.date().optional(),
      image: image().optional(),
      imageAlt: z.string().default(""),
      author: reference("authors").optional(),
      categories: z.array(z.string()).optional(),
      tags: z.array(z.string()).optional(),
      complexity: z.number().default(1),
      hideToc: z.boolean().default(false),
    }),
});

const docs = defineCollection({
  loader: glob({ pattern: "**\/[^_]*.{md,mdx}", base: "./src/content/docs" }),
  schema: ({ image }) =>
    searchable.extend({
      pubDate: z.date().optional(),
      modDate: z.date().optional(),
      image: image().optional(),
      imageAlt: z.string().default(""),
      hideToc: z.boolean().default(false),
      hideNav: z.boolean().default(false),
    }),
});

const home = defineCollection({
  loader: glob({ pattern: "-index.{md,mdx}", base: "./src/content/home" }),
  schema: ({ image }) =>
    z.object({
      image: image().optional(),
      imageAlt: z.string().default(""),
      title: z.string(),
      content: z.string(),
      button: z
        .object({
          label: z.string(),
          link: z.string().optional(),
        })
        .optional(),
    }),
});

const indexCards = defineCollection({
  loader: glob({
    pattern: "-index.{md,mdx}",
    base: "./src/content/index-cards",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    cards: z.array(z.string()),
  }),
});

const poetry = defineCollection({
  loader: glob({ pattern: "**\/[^_]*.{md,mdx}", base: "./src/content/poetry" }),
  schema: ({ image }) =>
    searchable.extend({
      date: z.date().optional(),
      image: image().optional(),
      imageAlt: z.string().default(""),
      author: reference("authors").optional(),
    }),
});

const portfolio = defineCollection({
  loader: glob({
    pattern: "-index.{md,mdx}",
    base: "./src/content/portfolio",
  }),
  schema: searchable.extend({
    projects: z.array(
      z.object({
        title: z.string(),
        github: z.string().optional(),
        technologies: z.array(z.string()).optional(),
        content: z.array(z.string()).optional(),
      }),
    ),
  }),
});

const recipes = defineCollection({
  loader: glob({
    pattern: "**\/[^_]*.{md,mdx}",
    base: "./src/content/recipes",
  }),
  schema: ({ image }) =>
    searchable.extend({
      date: z.date().optional(),
      image: image().optional(),
      imageAlt: z.string().default(""),
      author: reference("authors").optional(),
      prepTime: z.number().optional(),
      servings: z.number().optional(),
      diet: z.string().optional(),
      ingredients: z
        .object({
          list: z.array(z.string()),
          qty: z.array(z.string()),
        })
        .optional(),
      instructions: z.array(z.string()).optional(),
      notes: z.array(z.string()).optional(),
    }),
});

const terms = defineCollection({
  loader: glob({ pattern: "-index.{md,mdx}", base: "./src/content/terms" }),
  schema: searchable,
});

// Export collections
export const collections = {
  // 中台庭園主題
  cherry,
  lotus,
  bonsai,
  flora,
  news,
  // 原有（保留）
  about,
  authors,
  blog,
  docs,
  home,
  indexCards,
  poetry,
  portfolio,
  recipes,
  terms,
};
