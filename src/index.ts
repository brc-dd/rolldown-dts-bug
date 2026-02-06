import MarkdownIt from 'markdown-it'
import attrs, { type MarkdownItAttrsOptions } from 'markdown-it-attrs'

export function markdownToHtml(
  markdown: string,
  options: { attrs: MarkdownItAttrsOptions }
): string {
  const md = new MarkdownIt()
  attrs(md, options.attrs)
  return md.render(markdown)
}
