import { MarkdownItAttrsOptions } from "markdown-it-attrs";

//#region src/index.d.ts
declare function markdownToHtml(markdown: string, options: {
  attrs: MarkdownItAttrsOptions;
}): string;
//#endregion
export { markdownToHtml };