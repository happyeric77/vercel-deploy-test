/** @type {import('next').NextConfig} */
import { log } from 'console';
import process from 'process';

const args = process.argv;

log(args.join(' '));

let nextConfig = {
  webpack: (config) => {
    return config;
  },
};

if (args.includes('build')) {
  nextConfig = {
    ...nextConfig,
    /** ⬇️ For including static index.html: https://nextjs.org/docs/app/building-your-application/deploying/static-exports */
    output: 'export',
    /** ⬇️ For @xmpt/sdk requires .wasm bundled  */
    webpack: (config) => {
      
      return config;
    },
  };
}

export default nextConfig;
