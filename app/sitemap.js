const SITE_URL = "https://gmtdevs.com";

const staticRoutes = [
  { path: "/", priority: 1, changeFrequency: "yearly" },
  { path: "/About-us", priority: 0.8, changeFrequency: "monthly" },
  { path: "/services", priority: 0.8, changeFrequency: "monthly" },
  { path: "/projects", priority: 0.9, changeFrequency: "weekly" },
  { path: "/contact", priority: 0.8, changeFrequency: "monthly" },
];

const projectSlugs = [
  "EdvalTours-Website-Project",
  "EdvalBiography-Website-Project",
  "foremaj-Website-Project",
  "Foodieland-Concept-Project",
];

export default function sitemap() {
  const now = new Date("2026-11-11");

  const routes = staticRoutes.map(({ path, priority, changeFrequency }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));

  const projectRoutes = projectSlugs.map((slug) => ({
    url: `${SITE_URL}/projects/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...routes, ...projectRoutes];
}