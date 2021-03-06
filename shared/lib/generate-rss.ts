import { escape } from '@/shared/lib/utils/htmlEscaper'

import siteMetadata from '@/data/siteMetadata'
import { PostFrontMatter } from '@/shared/models/PostFrontMatter'

const generateRssItem = (post: PostFrontMatter, type?: 'notes' | 'blog' | 'projects') => `
  <item>
    <guid>${siteMetadata.siteUrl}/${
  type === 'blog' ? 'blog' : type === 'notes' ? 'apuntes' : 'proyectos'
}/${post.slug}</guid>
    <title>${escape(post.title)}</title>
    <link>${siteMetadata.siteUrl}/notes/${post.slug}</link>
    ${post.summary && `<description>${escape(post.summary)}</description>`}
    <pubDate>${new Date(post.date).toUTCString()}</pubDate>
    <author>${siteMetadata.email} (${siteMetadata.author})</author>
    ${post.tags && post.tags.map((t) => `<category>${t}</category>`).join('')}
  </item>
`

const generateRss = (
  posts: PostFrontMatter[],
  page = 'feed.xml',
  type?: 'notes' | 'blog' | 'projects'
) => `
  <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
      <title>${escape(siteMetadata.title)}</title>
      <link>${siteMetadata.siteUrl}/notes</link>
      <description>${escape(siteMetadata.description)}</description>
      <language>${siteMetadata.language}</language>
      <managingEditor>${siteMetadata.email} (${siteMetadata.author})</managingEditor>
      <webMaster>${siteMetadata.email} (${siteMetadata.author})</webMaster>
      <lastBuildDate>${new Date(posts[0].date).toUTCString()}</lastBuildDate>
      <atom:link href="${siteMetadata.siteUrl}/${page}" rel="self" type="application/rss+xml"/>
      ${posts.map((p: any) => generateRssItem(p, type)).join('')}
    </channel>
  </rss>
`
export default generateRss
