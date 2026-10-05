import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap { return [{ url:"https://YOUR_DOMAIN", lastModified:new Date() }]; }
