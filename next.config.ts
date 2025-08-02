
import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // This is required to allow the Next.js dev server to accept requests from the browser
  // in this environment.
  allowedDevOrigins: [
    'https://*.cluster-ikxjzjhlifcwuroomfkjrx437g.cloudworkstations.dev',
  ],
};

export default nextConfig;
