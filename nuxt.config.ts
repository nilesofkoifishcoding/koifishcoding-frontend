// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        ['@nuxtjs/google-fonts', {
            families: {
                'Lexend+Mega': [600],
                'Lilita+One': true,
            }
        }]
    ],
    nitro: {
        preset: 'aws-lambda'
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
