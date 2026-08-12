import type { CollectionEntry, CollectionKey } from "astro:content";
import type { MarkdownHeading } from "astro";

export type GenericEntry = CollectionEntry<CollectionKey>;

// 中台庭園主題
export type CherryEntry = CollectionEntry<"cherry">;
export type LotusEntry = CollectionEntry<"lotus">;
export type BonsaiEntry = CollectionEntry<"bonsai">;
export type FloraEntry = CollectionEntry<"flora">;
export type NewsEntry = CollectionEntry<"news">;

// 原有（保留）
export type AuthorsEntry = CollectionEntry<"authors">;
export type BlogEntry = CollectionEntry<"blog">;
export type DocsEntry = CollectionEntry<"docs">;
export type HomeEntry = CollectionEntry<"home">;
export type IndexCardsEntry = CollectionEntry<"indexCards">;
export type PoetryEntry = CollectionEntry<"poetry">;
export type PortfolioEntry = CollectionEntry<"portfolio">;
export type RecipesEntry = CollectionEntry<"recipes">;
export type TermsEntry = CollectionEntry<"terms">;

export type SearchableEntry =
  | AuthorsEntry
  | BonsaiEntry
  | CherryEntry
  | BlogEntry
  | DocsEntry
  | FloraEntry
  | LotusEntry
  | NewsEntry
  | PoetryEntry
  | PortfolioEntry
  | RecipesEntry
  | TermsEntry;

export type SocialLinks = {
  discord?: string;
  email?: string;
  facebook?: string;
  github?: string;
  instagram?: string;
  linkedIn?: string;
  pinterest?: string;
  tiktok?: string;
  website?: string;
  youtube?: string;
}

export type EntryReference = {
  id: string;
  collection: string;
};

// Define heading hierarchy so that we can generate ToC
export interface HeadingHierarchy extends MarkdownHeading {
  subheadings: HeadingHierarchy[];
}

export type MenuItem = {
  title?: string;
  id: string;
  children: MenuItem[];
};

// Define the type for menu items to created nested object
export type MenuItemWithDraft = {
  title?: string;
  id: string;
  draft: boolean;
  children: MenuItemWithDraft[];
};

// Define the props for the SideNavMenu component
export type SideNavMenuProps = {
  items: MenuItemWithDraft[];
  level: number;
};

// 盆栽分盆個體型別
export type BonsaiSpecimen = {
  id: string;
  label: string;
  image: string;
  note?: string;
};

// 櫻花地圖位置型別
export type CherryMapPosition = {
  x: number;
  y: number;
  label?: string;
};
