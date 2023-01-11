// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    nitro: {
        preset: 'aws-lambda'
    },
    typescript: {
        shim: false
    },
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
