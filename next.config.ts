import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML export for GitHub Pages
  output: "export",
  trailingSlash: true,
  // Images are optimized at build time by next-image-export-optimizer
  images: {
    loader: "custom",
    // One file is written per screenshot per width, so keep these to what the
    // guide column can show: the widest screenshot is 1908px.
    imageSizes: [384],
    deviceSizes: [640, 828, 1200, 1920],
  },
  transpilePackages: ["next-image-export-optimizer"],
  env: {
    nextImageExportOptimizer_imageFolderPath: "public/guide",
    nextImageExportOptimizer_exportFolderPath: "out",
    nextImageExportOptimizer_quality: "75",
    nextImageExportOptimizer_storePicturesInWEBP: "true",
    nextImageExportOptimizer_exportFolderName: "nextImageExportOptimizer",
    nextImageExportOptimizer_generateAndUseBlurImages: "false",
    nextImageExportOptimizer_remoteImageCacheTTL: "0",
  },
};

export default nextConfig;
