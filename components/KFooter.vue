<template>
    <footer>
        <div class="row logo">
            <img src="~/assets/svgs/koi_logo.png" alt="">
        </div>
        <div class="row">
            <div class="copyright">&copy;2023 Chop Media Group, LLC</div>
            <div class="icon">
                <img src="~/assets/jpgs/kai-favicon.png" />
            </div>
            <div class="social">
                <div class="link">Facebook</div>
                <div class="link">Instagram</div>
                <div class="link">YouTube</div>
                <div class="link">Twitter</div>
            </div>
        </div>
    </footer>
</template>

<style lang="sass" scoped>
footer
    margin-top: 2rem
    padding-bottom: 1rem
    min-height: 5rem
    background-color: var(--color-bg-1)
    font-family: 'Catamaran'
    .row
        display: flex
        align-items: flex-end
        max-width: 80rem
        margin: 0 auto 0
        &.logo
            padding-top: 2rem
            justify-content: center
            img
                width: 25%
        &:last-child
            letter-spacing: 0.03rem
            font-weight: 500
            color: var(--color-dark)
            .copyright
                width: 40%
            .icon
                width: 20%
                text-align: center
                display: flex
                justify-content: center
                align-items: flex-end
                img
                    width: 65px
            .social
                width: 40%
                display: flex
                justify-content: flex-end
                .link
                    margin-left: 1rem
</style>