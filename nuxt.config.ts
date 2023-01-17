// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            title: 'Koi Fish Coding'
        }
    },
    modules: [
        ['@nuxtjs/google-fonts', {
            families: {
                'Lexend+Mega': [600],
                'Lilita+One': true,
                'Heebo': true,
                Montserrat: [400, 500, 600, 700]
            }
        }]
    ],
    nitro: {
        preset: 'aws-lambda',
        serveStatic: true,
        compressPublicAssets: {
            gzip: true,
            brotli: true
        }
    },
    typescript: {
        shim: false
    },
    css: [
        '@fortawesome/fontawesome-svg-core/styles.css'
    ],
    vite: {
        css: {
            preprocessorOptions: {
                sass: {
                    additionalData: '@use "@/assets/sass/_colors.sass" as *\n'
                }
            }
        }
    }
})
