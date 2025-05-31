import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import sanitizeHtml from "sanitize-html";
import MarkdownIt from "markdown-it";
const parser = new MarkdownIt();

export async function GET(context) {
  const collections = await getCollection("collections");
  return rss({
    stylesheet: "/rss/rss.xsl",
    title: "Andreas Hartman",
    description: "Making memories by capturing them.",
    site: context.site,
    items: collections.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/collections/${post.id}/`,
      content: sanitizeHtml(parser.render(post.body)),
      ...post.data,
    })),
    customData: `<language>en-us</language>`,
  });
}
