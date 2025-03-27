var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// src/utils/siteMetaData.js
var require_siteMetaData = __commonJS({
  "src/utils/siteMetaData.js"(exports, module) {
    var siteMetadata = {
      title: "Next.js Blog With Tailwind CSS and Contentlayer",
      author: "CodeBucks",
      headerTitle: "Next.js Blog",
      description: "A blog created with Next.js, Tailwind.css and contentlayer.",
      language: "en-us",
      theme: "system",
      // system, dark or light
      siteUrl: "https://create-blog-with-nextjs.vercel.app",
      // your website URL
      siteLogo: "/logo.png",
      socialBanner: "/social-banner.png",
      // add social banner in the public folder
      email: "shimaamohamedd462@gmail.com",
      github: "https://github.com/ShimaaMohamedRoshdi",
      twitter: "https://twitter.com/",
      facebook: "https://www.facebook.com/profile.php?id=100071288824312",
      youtube: "https://youtube.com/codebucks",
      linkedin: "https://www.linkedin.com/in/shimaa-mohamed-502aab27bi",
      dribbble: "https://www.dribbble.com",
      locale: "en-US"
    };
    module.exports = siteMetadata;
  }
});

// contentlayer.config.js
var import_siteMetaData = __toESM(require_siteMetaData());
import { makeSource, defineDocumentType } from "@contentlayer/source-files";
import readingTime from "reading-time";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import GithupSluggr from "github-slugger";
var Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: "**/**/*.mdx",
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true
    },
    publishAt: {
      type: "date",
      required: true
    },
    updatedAt: {
      type: "date",
      required: true
    },
    description: {
      type: "date",
      required: true
    },
    image: { type: string, required: true },
    isPublished: {
      type: "boolean",
      default: true
    },
    author: {
      type: "string",
      required: true
    },
    tags: {
      type: "list",
      of: { type: "string" }
    }
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (doc) => `/blogs/${doc._raw.flattenedPath}`
    },
    readingTime: {
      type: "json",
      resolve: (doc) => readingTime(doc.body.raw)
    },
    toc: {
      type: "json",
      resolve: async (doc) => {
        const regulrExp = /\n(?<flag>#{1,6})\s+(?<content>.+)/g;
        const slugger = new GithupSluggr();
        const headings = Array.from(doc.body.raw.matchAll(regulrExp)).map(
          ({ groups }) => {
            const flag = groups?.flag;
            const content = groups?.content;
            return {
              level: flag?.length == 1 ? "one" : flag?.length == 2 ? "two" : "three",
              text: content,
              slug: content ? slugger.slug(content) : void 0
            };
          }
        );
        return headings;
      }
    }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "content",
  documentTypes: [Blog],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlungins: [
      rehypeSlug,
      [rehypeAutolinkHeadings, { behavior: "append" }]
    ]
  }
});
export {
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-PS7QTVVL.mjs.map
