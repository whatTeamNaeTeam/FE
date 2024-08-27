/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'wtnt-bucket.s3.ap-northeast-2.amazonaws.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        pathname: '**',
      },
    ],
  },
  redirects() {
    return [
      {
        source: '/project/:slug/manage',
        destination: '/project/:slug/manage/member',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
