"use client";

import { ArticleGrid } from "@/components/sections/resources/ArticleGrid";
import { DownloadGuides } from "@/components/sections/resources/DownloadGuides";
import { KnowledgeBase } from "@/components/sections/resources/KnowledgeBase";
import { CTA } from "@/components/sections/CTA";
import { ResourcesHeroClient } from "./ResourcesHeroClient";

export default function ResourcesPageClient() {
  return (
    <main>
      <ResourcesHeroClient />
      <ArticleGrid />
      <DownloadGuides />
      <KnowledgeBase />
      <CTA />
    </main>
  );
}
