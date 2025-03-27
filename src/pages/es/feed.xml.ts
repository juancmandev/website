import rss from '@astrojs/rss';
import type { RSSFeedItem } from '@astrojs/rss';
import { getCollection } from 'astro:content';
import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';
import { parse as htmlParser } from 'node-html-parser';
import { getImage } from 'astro:assets';
import type { ImageMetadata } from 'astro';

const markdownParser = new MarkdownIt();

const imagesBlog = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/blog/**/*.{jpeg,jpg,png,gif,webp}'
);

export async function GET(context: any) {
  const items: RSSFeedItem[] = [];

  const blog = await getCollection(
    'blog',
    ({ data }) => data.draft !== true && data.rss === true
  );
  const filterBlog = blog.filter((post) => {
    const [lang] = post.id.split('/');

    return lang === 'es' && post;
  });

  for await (const post of filterBlog) {
    const body = markdownParser.render(post.body!);
    const html = htmlParser.parse(body);
    const images = html.querySelectorAll('img');

    for await (const img of images) {
      const src = img.getAttribute('src')!;

      if (src.startsWith('@/')) {
        const prefixRemoved = src.replace('@/', '');
        const imagePathPrefix = `/src/${prefixRemoved}`;
        const imagePath = await imagesBlog[imagePathPrefix]?.()?.then(
          (res: any) => res.default
        );

        if (imagePath) {
          const optimizedImg = await getImage({ src: imagePath });
          img.setAttribute(
            'src',
            context.site + optimizedImg.src.replace('/', '')
          );
        }
      } else if (src.startsWith('/images')) {
        img.setAttribute('src', context.site + src.replace('/', ''));
      } else {
        throw Error('src unknown');
      }
    }

    items.push({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      author: post.data.author || 'Juan Manzanero',
      link: `/blog/${post.id.split('.')[0]}/`,
      content: sanitizeHtml(html.toString(), {
        allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img']),
      }),
    });
  }

  return rss({
    xmlns: { atom: 'http://www.w3.org/2005/Atom' },
    title: 'Juan Manzanero',
    description: 'Bienvenido a mi dominio, extraño.',
    site: `${context.site}es/`,
    customData: [
      '<language>es-mx</language>',
      `<image>
          <url>${context.site}/logo.png</url>
          <title>Juan Manzanero</title>
          <link>${context.site}</link>
      </image>`,
      `<atom:link href="${context.site}/es/feed.xml" rel="self" type="application/rss+xml"/>`,
    ].join(''),
    items,
    trailingSlash: false,
  });
}
