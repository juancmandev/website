import rss from "@astrojs/rss";
import type { RSSFeedItem } from "@astrojs/rss";
import { getCollection } from "astro:content";
import sanitizeHtml from "sanitize-html";
import MarkdownIt from "markdown-it";
import { parse as htmlParser } from "node-html-parser";
import { getImage } from "astro:assets";
import type { ImageMetadata } from "astro";

const markdownParser = new MarkdownIt();

const imagesBlog = import.meta.glob<{ default: ImageMetadata }>(
  "/src/assets/blog/**/**/*.{jpeg,jpg,png,gif,webp}",
);
const imagesPortfolio = import.meta.glob<{ default: ImageMetadata }>(
  "/src/assets/portfolio/**/**/*.{jpeg,jpg,png,gif,webp}",
);

export async function GET(context: any) {
  const items: RSSFeedItem[] = [];

  const blog = await getCollection(
    "blog",
    ({ data }) => data.draft !== true && data.rss === true,
  );
  const portfolio = await getCollection(
    "portfolio",
    ({ data }) => data.draft !== true && data.rss === true,
  );

  for await (const post of blog) {
    const body = markdownParser.render(post.body);
    const html = htmlParser.parse(body);
    const images = html.querySelectorAll("img");

    for await (const img of images) {
      const src = img.getAttribute("src")!;
      console.log(src);

      if (src.startsWith("@/")) {
        const prefixRemoved = src.replace("@/", "");
        const imagePathPrefix = `/src/${prefixRemoved}`;
        const imagePath = await imagesBlog[imagePathPrefix]?.()?.then(
          (res: any) => res.default,
        );

        if (imagePath) {
          const optimizedImg = await getImage({ src: imagePath });
          img.setAttribute(
            "src",
            context.site + optimizedImg.src.replace("/", ""),
          );
        }
      } else if (src.startsWith("/images")) {
        img.setAttribute("src", context.site + src.replace("/", ""));
      } else {
        throw Error("src unknown");
      }
    }

    items.push({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      author: post.data.author,
      link: `/blog/${post.slug}/`,
      content: sanitizeHtml(html.toString(), {
        allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img"]),
      }),
    });
  }

  for await (const project of portfolio) {
    const body = markdownParser.render(project.body);
    const html = htmlParser.parse(body);
    const images = html.querySelectorAll("img");

    for await (const img of images) {
      const src = img.getAttribute("src")!;

      if (src.startsWith("@/")) {
        const prefixRemoved = src.replace("@/", "");
        const imagePathPrefix = `/src/${prefixRemoved}`;
        const imagePath = await imagesPortfolio[imagePathPrefix]?.()?.then(
          (res: any) => res.default,
        );

        if (imagePath) {
          const optimizedImg = await getImage({ src: imagePath });
          img.setAttribute(
            "src",
            context.site + optimizedImg.src.replace("/", ""),
          );
        }
      } else if (src.startsWith("/images")) {
        // images starting with `/images/` is the public dir
        img.setAttribute("src", context.site + src.replace("/", ""));
      } else {
        throw Error("src unknown");
      }
    }

    items.push({
      title: project.data.title,
      pubDate: project.data.date,
      description: project.data.description,
      author: project.data.author,
      link: `/portfolio/${project.slug}/`,
      content: sanitizeHtml(html.toString(), {
        allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img"]),
      }),
    });
  }

  console.log(items);

  return rss({
    title: "juancmandev",
    description: "Welcome to my domain, stranger.",
    customData: `<language>en-us</language>`,
    site: context.site,
    items,
    trailingSlash: false,
  });
}
