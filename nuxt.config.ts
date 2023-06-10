// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        pageTransition: {
            name: 'page',
            mode: 'out-in'
        },
        cdnURL: 'https://static.koifishcoding.com',
        head: {
            title: 'Koi Fish Coding',
            link: [{ rel: 'icon', type: 'image/x-icon', href: 'https://static.koifishcoding.com/favicon.ico'}],
            script: [
                { src: 'https://js.stripe.com/v3/pricing-table.js'},
            ]
        },
    },
    vue: {
        compilerOptions: {
            isCustomElement: (tag: string) => {
                return (
                    tag === 'stripe-pricing-table'
                )
            }
        }
    },
    modules: [
        ['@nuxtjs/google-fonts', {
            download: true,
            base64: true,
            families: {
                'Lexend Mega': [200, 300, 400, 500, 600, 700],
                'Catamaran': [100, 200, 300, 400, 500, 600, 700, 800, 900],
                Montserrat: [400, 500, 600, 700],
                'Bungee Shade': [400],
                'Geologica': [300, 400, 500, 600, 700, 800],
                'Kalam': [300, 400, 700]
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
