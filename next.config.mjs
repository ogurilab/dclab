import withBundleAnalyzer from "@next/bundle-analyzer";
import { createContentlayerPlugin } from "next-contentlayer";

import remarkGfm from "remark-gfm";
import createMDX from "@next/mdx";

const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  images: {
    loader: "custom",
    loaderFile: "./src/loader.ts",
    unoptimized: true,
  },
  assetPrefix: isProd
    ? "https://feature-proxy-assets.ogurilab-org.pages.dev"
    : "",
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkGfm],
  },
});

export default withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
})(createContentlayerPlugin(nextConfig)(withMDX(nextConfig)));
