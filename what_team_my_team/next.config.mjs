/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: [process.env.NEXT_REPUBLIC_ALLOWED_IMAGE_DOMAIN],
  },
}

export default nextConfig
