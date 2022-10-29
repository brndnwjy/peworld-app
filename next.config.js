/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: '/auth/company/login',
        destination: '/auth/recruiter/login',
      },
      {
        source: '/auth/company/register',
        destination: '/auth/recruiter/register',
      },
      {
        source: '/auth/login',
        destination: '/auth/recruitee/login',
      },
      {
        source: '/auth/register',
        destination: '/auth/recruitee/register',
      },
    ]
  },
}

module.exports = nextConfig
