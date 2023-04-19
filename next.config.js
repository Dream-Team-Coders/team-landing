/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS ?? false
const config = {
    reactStrictMode: true
}

if (isGithubActions)
    config.images = {
        unoptimized: true
    }

module.exports = config