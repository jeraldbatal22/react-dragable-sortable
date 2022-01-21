module.exports = {
    mode: 'jit',
    purge: [
      './public/**/*.html',
      './src/**/*.{js,jsx,ts,tsx,vue}',
    ],
    theme: {
      extend: {
        width: {
          560: "560px"
        },
        height: {
          69: "69px"
        },
      },
      variants: {
        extend: {
          backgroundColor: ['focus']
        },
      },
    }
  }
