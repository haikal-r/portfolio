import { defineDocumentType, makeSource } from "contentlayer/source-files";
import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields = {
  slug: {
    type: "string",
    resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx/, ""),
  },
};

/** @type {import('contentlayer/source-files').defineDocumentType} */
const About = defineDocumentType(() => ({
  name: "About",
  filePathPattern: `about/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    summary: { type: "string", required: true },
  },
  computedFields,
}));

/** @type {import('contentlayer/source-files').defineDocumentType} */
const Projects = defineDocumentType(() => ({
  name: 'Projects',
  filePathPattern: `projects/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    summary: { type: 'string', required: true },
    image: { type: 'string', required: true },
    source: {type: 'string', required: true},
    demo: {type: 'string', required: true},
    tag: {
      type: 'list',
      of: { type: 'string' },
      required: true
    }
  },
  computedFields
}))

/** @type {import('rehype-pretty-code').Options} */
const rehypePrettyOptions = {
  theme: "github-dark-dimmed",
  keepBackground: false,
};

/** @type {import('contentlayer/source-files').SourcePlugin} */
export default makeSource({
  contentDirPath: "./src/content",
  documentTypes: [About, Projects],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      rehypeAutolinkHeadings,
      [rehypePrettyCode, rehypePrettyOptions],
    ],
  },
});
