<template>
    <div>
        <div id="ljudioLogo">
            <img @click="linkToHome()" src="/src/assets/ljudioLogo2.png"/>
        </div>
        <nav>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
        </nav>
    </div>
</template>

<script>
export default {
    
    methods:{
        linkToHome(){
            this.$router.push('/')
        }
    }
}
</script>