// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        cdnURL: 'https://static.koifishcoding.com',
        head: {
            title: 'Koi Fish Coding',
            link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}]
        }
    },
    modules: [
        ['@nuxtjs/google-fonts', {
            download: true,
            base64: true,
            families: {
                // 'Lexend+Mega': [600],
                // 'Lilita+One': true,
                // 'Heebo': true,
                Montserrat: [400, 500, 600, 700]
            }
        }]
    ],
    nitro: {
        preset: 'aws-lambda',
        serveStatic: true,
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
