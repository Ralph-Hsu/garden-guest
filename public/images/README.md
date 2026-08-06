# 📸 中台庭園圖片放置說明

本資料夾存放所有網站使用的圖片。請依照以下說明放置您的照片。

---

## 📁 資料夾結構與說明

### /images/backgrounds/
網站全頁背景圖片

| 檔名 | 用途 | 建議尺寸 |
|------|------|---------|
| `garden-day.jpg` | **亮色模式背景**（白天庭園照） | 1920×1080px 以上 |
| `garden-night.jpg` | **暗色模式背景**（夜景或日落照） | 1920×1080px 以上 |

---

### /images/cherry/
櫻花相關圖片

| 路徑 | 用途 |
|------|------|
| `hero.jpg` | 櫻花頁首大圖 | 1920×900px |
| `garden-map.jpg` | **園區分佈地圖**（地圖互動的底圖）| 1600×900px 以上（橫向） |
| `family-tree.jpg` | 族譜圖片 | 任意尺寸 |
| `kawazu/cover.jpg` | 河津櫻封面 | 800×600px |
| `kawazu/01.jpg`，`02.jpg`... | 河津櫻相簿 | 800×600px |
| `formosana/cover.jpg` | 福爾摩沙櫻封面 | 同上 |
| `tsubakikanzan/cover.jpg` | 椿寒櫻封面 | 同上 |
| `fuji/cover.jpg` | 富士櫻封面 | 同上 |
| `shidare/cover.jpg` | 枝垂櫻封面 | 同上 |
| `yae/cover.jpg` | 八重櫻封面 | 同上 |
| `sumizome/cover.jpg` | 墨染櫻封面 | 同上 |

---

### /images/lotus/
睡蓮相關圖片

| 路徑 | 用途 |
|------|------|
| `hero.jpg` | 睡蓮頁首大圖 | 1920×900px |
| `hardy/[品種名].jpg` | **寒帶睡蓮**各品種照片 | 800×800px（正方形佳） |
| `tropical/[品種名].jpg` | **熱帶睡蓮**各品種照片 | 800×800px（正方形佳） |

> 例：`hardy/hermine.jpg`、`tropical/blue-bird.jpg`

---

### /images/bonsai/
盆栽相關圖片

| 路徑 | 用途 |
|------|------|
| `hero.jpg` | 盆栽頁首大圖 | 1920×900px |
| `[品種]/cover.jpg` | 品種封面圖 | 800×600px |
| `[品種]/001.jpg`，`002.jpg`... | **分盆個體照片**（輪播使用） | 800×600px |

> 例：`pine/cover.jpg`、`pine/001.jpg`、`ficus/002.jpg`

---

### /images/flora/
花草相關圖片

| 路徑 | 用途 |
|------|------|
| `hero.jpg` | 花草頁首大圖 | 1920×900px |
| `[品種名].jpg` | 各品種照片 | 800×800px（正方形佳） |

> 例：`lavender.jpg`、`jasmine.jpg`

---

### /images/news/
最新花況文章圖片

| 路徑 | 用途 |
|------|------|
| `[文章slug].jpg` | 各花況文章的封面圖 | 1200×630px |

> 例：`kawazu-bloom-2026.jpg`、`spring-festival-2026.jpg`

---

## 💡 通用建議

- **格式**：JPG 或 WebP（品質設定 80～85%）
- **大小**：每張圖片盡量控制在 500KB 以下，大圖（hero）可到 1～2MB
- **命名**：全部使用小寫英文、數字、連字號（`-`），不要使用中文或空格
- **alt 文字**：放置照片後，請到對應的 `.md` 檔案中填入 `imageAlt` 欄位

---

## 🗺️ 特別說明：園區地圖 `/images/cherry/garden-map.jpg`

這是滾動故事地圖的底圖，網站會在使用者捲動時自動縮放並平移地圖。

**放置地圖後，你還需要調整地圖上的品種位置坐標**，請到：
`src/components/cherry/CherryMap.astro`

找到 `MAP_STEPS` 陣列，依照你的地圖調整各品種的 `x`、`y` 數值（百分比坐標，0 = 左上，100 = 右下）。
