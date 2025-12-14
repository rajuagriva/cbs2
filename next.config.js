module.exports = {
  async rewrites() {
    return {
      // "beforeFiles" artinya: Lakukan jembatan INI DULU sebelum cek file lokal
      beforeFiles: [
        {
          source: '/',
          destination: 'https://apps.kgsplantation.com/',
        },
        {
          source: '/:path*',
          destination: 'https://apps.kgsplantation.com/:path*',
        },
      ],
    }
  },
}
