import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Food",
    pageTitleSuffix: " | Rezepte",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "de-DE",
    baseUrl: "visuallounge.github.io/food",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Playfair Display",
        body: "Lato",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#f8f9fc",
          lightgray: "#e8eaf0",
          gray: "#9a9cb8",
          darkgray: "#4a4a6a",
          dark: "#1e1e3f",
          secondary: "#5c4b8a",
          tertiary: "#7b68c4",
          highlight: "rgba(92, 75, 138, 0.12)",
          textHighlight: "#c4b5fd66",
        },
        darkMode: {
          light: "#13131f",
          lightgray: "#252540",
          gray: "#6b6b8d",
          darkgray: "#d4d4e8",
          dark: "#f0f0f8",
          secondary: "#9d8cd6",
          tertiary: "#7c6bc4",
          highlight: "rgba(124, 107, 196, 0.15)",
          textHighlight: "#9d8cd644",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
