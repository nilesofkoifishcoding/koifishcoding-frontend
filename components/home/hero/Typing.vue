<template>
    <div class="typing">
        <div class="screen" ref="screen">
            <pre v-html="newHtml" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { resolve } from 'mlly';


const html = ref(`&lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;<span class="gradient-text-2">Koi Fish Coding</span>&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;header&gt;
        &lt;div class="flex items-center justify-between"&gt;
            &lt;a href="<span class="gradient-text-2">koifishcoding.com</span>"&gt;<img class="html-logo" src="/favicon.ico" />&lt;/a&gt;
        &lt;/div&gt;
        &lt;nav&gt;
            &lt;NavItem&gt;Live&lt;/NavItem&gt;
            &lt;NavItem&gt;Laugh&lt;/NavItem&gt;
            &lt;NavItem&gt;Love&lt;/NavItem&gt;
        &lt;/nav&gt;
    &lt;/header&gt;
    &lt;main&gt;
        &lt;aside&gt;
            &lt;blockquote&gt;
                Integrity-Based Learning
            &lt;/blockquote&gt;
        &lt;/aside&gt;
        &lt;section&gt;
            &lt;ol&gt;
                &lt;li&gt;Study&lt;/li&gt;
                &lt;li&gt;Prepare&lt;/li&gt;
                &lt;li&gt;<span class='gradient-text-2'>Succeed</span>&lt;/li&gt;
            &lt;/ol&gt;
        &lt;/section&gt;
        &lt;footer&gt;
            &lt;CompanyLogo /&gt;
            &lt;div class="mt-8 grid grid-cols-4 gap-4"&gt;
                &lt;span&gt;Directory&lt;/span&gt;
                &lt;span&gt;Contact Us&lt;/span&gt;
                &lt;span&gt;About Us&lt;/span&gt;
                &lt;span&gt;Careersy&lt;/span&gt;
            &lt;/div&gt;
        &lt;/footer&gt;
    &lt;/main&gt;
    &lt;script src="/gAnalytics.js" type="text/javascript"&gt;&lt;/script&gt;
  &lt;/body&gt;
&lt;/html&gt;`)

const newHtml = ref('')
const screen = ref(null)

async function handleTyping() {
    const chars = html.value.split('')

    if (!screen.value) {
        return
    }
    const el = (screen.value as HTMLElement)

    for (let i = 0; i < chars.length; i++) {
        newHtml.value = newHtml.value + chars[i]

        await new Promise((resolve) => setTimeout(resolve, 2));

        const additional = el.scrollHeight - el.clientHeight
        el.scrollTop = additional
    }
    el.scrollTop = 0
}

onMounted(handleTyping)

</script>

<style lang="sass" scoped>
.typing
    display: flex
    justify-content: center
    align-items: center
    flex: 1
    width: 45%
    .screen
        width: 60%
        height: 70%
        margin: 0 auto
        box-shadow: 0 0 6px 1px var(--color-dark-d)
        border-radius: 6px
        background-color: rgba(255, 255, 255, 0.2)
        backdrop-filter: blur(3px)
        padding: 1rem
        box-sizing: border-box

        overflow-y: scroll
        overflow-x: hidden

        transition: all 500ms linear

        scroll-behavior: smooth

        -ms-overflow-style: none
        scrollbar-width: none
        &::-webkit-scrollbar
            display: none

        pre
            margin-top: 0
</style>

<style lang="sass">
.html-logo
    position: relative
    top: 5px
    margin: -7px 2px 0
    width: 21px

.success
    color: var(--color-success)
</style>