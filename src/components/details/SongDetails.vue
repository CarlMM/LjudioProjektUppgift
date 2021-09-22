<template>
    <div>
        <h1>Song Details</h1>
            <button @click="copyToClipboard">Share song</button>
            <div>
                {{vidId}}
                
                 <p>
                     {{getSongInfo.artist.name}}
                     {{getSongInfo.name}}
                     
                     <!-- {{getSongInfo.name}} +  -->
                     <!-- {{vidId}} -->
                 </p>
                <button @click="playSong()">Play</button>
                <button @click="pauseSong()">Pause</button>
                <input @change="changeVolume(inputRange)" type="range" min="0" max="100" v-model='inputRange'>
            </div>
        
    </div>
</template>

<script>
//metod som returnerar https://www.youtube.com/watch?v={vId}

export default {

    computed:{
    getSongInfo(){
        return this.$store.state.song
        },

    getArtistSongInfo(){

    },
 },

    data(){
        return{
            vidId: (this.$route.params.videoId),
            inputRange: 3,

        }
    },

    created(){
        this.$store.dispatch('fetchCurrentSong', this.vidId)
    },

    methods:{

        copyToClipboard(){
            navigator.clipboard.writeText(`http://localhost:3000/songdetails/${this.vidId}`)
            alert('Link copied to clipboard!')
        },

        getCurrentSong(vidId){
        this.$store.dispatch('fetchCurrentSong', vidId)
        },
      playSong(){
       window.player.loadVideoById(this.vidId)
       window.player.playVideo()
      },
        pauseSong(){
        window.player.pauseVideo()
        },
        changeVolume(inputRange){
        window.player.setVolume(inputRange)
        },

     },

   
   
}

</script>

<style>
@import '/src/assets/style.css';


</style>