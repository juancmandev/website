import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import sanitizeHtml from "sanitize-html";
import MarkdownIt from "markdown-it";
const parser = new MarkdownIt();

export async function GET(context) {
  const blog = await getCollection(
    "blog",
    ({ data }) => data.draft !== true && data.rss === true,
  );
  const portfolio = await getCollection(
    "portfolio",
    ({ data }) => data.draft !== true && data.rss === true,
  );

  const blogItems = blog.map((post) => ({
    title: post.data.title,
    pubDate: post.data.date,
    description: post.data.description,
    tags: post.data.tags,
    author: post.data.author,
    link: `/blog/${post.slug}/`,
    content: sanitizeHtml(parser.render(post.body), {
      allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img"]),
    }),
  }));

  const portfolioItems = portfolio.map((project) => ({
    title: project.data.title,
    pubDate: project.data.date,
    description: project.data.description,
    tags: project.data.tags,
    author: project.data.author,
    link: `/portfolio/${project.slug}/`,
    content: sanitizeHtml(parser.render(project.body), {
      allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img"]),
    }),
  }));

  const items = [...blogItems, ...portfolioItems];

  return rss({
    title: "juancmandev",
    description: "Welcome to my domain, stranger.",
    customData: `<language>en-us</language><lastBuildDate>${new Date()}</lastBuildDate>`,
    site: context.site,
    items,
  });
}
