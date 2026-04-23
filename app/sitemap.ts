import { MetadataRoute } from "next";
import { articles } from "@/lib/articles";
import { projects } from "@/lib/projects";

const BASE_URL = "https://www.sideklar.no";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, priority: 1.0, changeFrequency: "weekly" },
    { url: `${BASE_URL}/tjenester`, priority: 0.9, changeFrequency: "monthly" },
    { url: `${BASE_URL}/pakker`, priority: 0.9, changeFrequency: "monthly" },
    { url: `${BASE_URL}/prosjekter`, priority: 0.8, changeFrequency: "weekly" },
    { url: `${BASE_URL}/artikler`, priority: 0.8, changeFrequency: "weekly" },
    { url: `${BASE_URL}/om`, priority: 0.7, changeFrequency: "monthly" },
    { url: `${BASE_URL}/priskalkulator`, priority: 0.8, changeFrequency: "monthly" },
  ];

  const articlePages: MetadataRoute.Sitemap = articles.map((a) => ({
    url: `${BASE_URL}/artikler/${a.slug}`,
    priority: 0.7,
    changeFrequency: "monthly" as const,
  }));

  const projectPages: MetadataRoute.Sitemap = projects.map((p) => ({
    url: `${BASE_URL}/prosjekter/${p.slug}`,
    priority: 0.6,
    changeFrequency: "monthly" as const,
  }));

  return [...staticPages, ...articlePages, ...projectPages];
}
