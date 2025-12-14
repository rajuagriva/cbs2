module.exports = {
  async rewrites() {
    return [
      {
        // Apapun yang Anda ketik di belakang domain kita...
        source: '/:path*',
        // ...akan dicarikan isinya ke website kantor
        destination: 'https://apps.kgsplantation.com/:path*',
      },
    ]
  },
}
