<template>
    <div class="course">
        <div class="number">
            <div class="white-over"></div>
            <div class="number2">101</div>

        </div>
        <div class="course-name">HTML, CSS, JavaScript & Coding Fundamentals</div>
        <div style="margin-top: 5rem;">hey now</div>
        <div>hey now</div>
        <div>hey now</div>
        <div>hey now</div>
        <div>hey now</div>
    </div>
</template>

<style lang="sass" scoped>
$borderWidth: 3px
$borderRadius: 10px
.course
    // background-color: rgba(255, 255, 255, 0.8)
    margin: 3rem 1rem 1rem
    height: 20rem
    .course-name
        position: relative
        top: 30px
        font-weight: 900
        font-family: 'Catamaran'
        font-size: 2rem
        line-height: 2rem
        text-align: center
        // border: 1px blue solid
        padding-top: 10rem
        background: url('https://images.unsplash.com/photo-1675800473686-ab069894ccf8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1931&q=80')
        background-repeat: no-repeat
        background-size: 99%
        background-position: center 80%
        letter-spacing: 0.02rem
        background-clip: text
        color: rgba(30, 30, 30, 0.6)
    .number
        width: 20rem
        position: absolute
        left: 0
        right: 0
        margin: 0 auto
        top: 0
        font-size: 10rem
        line-height: 10rem
        font-family: 'Catamaran'
        font-weight: 800
        padding-left: 20px
        margin-bottom: 10rem
        background: no-repeat center/250% url('https://images.unsplash.com/photo-1675800473686-ab069894ccf8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1931&q=80')
        // background-repeat: no-repeat
        // background-size: 250%
        // background-position: center 90%
        color: white
        // background-clip: 
        color: transparent
        text-shadow: 4px 4px 20px var(--color-dark-b)
        border: 2px transparent solid
        display: flex
        justify-content: center
        align-items: center
        border-radius: $borderRadius
        .white-over
            position: absolute
            top: $borderWidth
            left: $borderWidth
            bottom: $borderWidth
            right: $borderWidth
            background-color: var(--color-white)
            border-radius: $borderRadius
        .number2
            position: absolute
            top: 0
            left: 0
            width: 100%
            height: 100%
            margin-right: 2rem
            display: inline-block
            position: relative
            top: 0
            font-size: 10rem
            line-height: 10rem
            font-family: 'Catamaran'
            font-weight: 800
            padding-left: 20px
            background: url('https://images.unsplash.com/photo-1675800473686-ab069894ccf8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1931&q=80')
            background-repeat: no-repeat
            background-size: 250%
            background-position: center 90%
            color: white
            background-clip: text
            color: transparent
            text-shadow: 4px 4px 20px var(--color-dark-b)
            border: 2px transparent solid
            // background-color: white
</style>