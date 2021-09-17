<template>
    <div>
        <h1>Artist view</h1>
        <div>
            {{getArtistInfo.name}}
            
            {{bId}}
        </div>
    </div>
</template>


<script>
export default {
    

    computed:{
        getArtistInfo(){
            return this.$store.state.artists
        }
    },

    data(){
        return{
            bId: this.$route.params.browseId
        }
    },

    methods:{
        getCurrentArtist(bId){
        this.$store.dispatch('fetchYouTubeArtistApi', bId)
      }
   },
    
}
</script>