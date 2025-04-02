import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  /* config options here */
    // reactStrictMode:false // 关闭严格模式
    /*webpack: (config) => {
        config.resolve.alias['@images'] = path.join(__dirname, 'public/images');
        return config;
    },*/
};

export default nextConfig;
