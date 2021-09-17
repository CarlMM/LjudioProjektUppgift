<template>
    <div>
        <h1>Song Details</h1>
            <p>Videon/låten tänkt spelat här</p>
            <div>
                
                 <p>
                     {{getSongInfo.artist.name}} + 
                     {{getSongInfo.name}} + 
                     <!-- {{vidId}} -->
                 </p>
                <button @click="playSong(vidId)">Play</button>
                <button @click="pauseSong()">Pause</button>
                <input @change="changeVolume(inputRange)" type="range" min="0" max="100" v-model='inputRange'>
            </div>
        
    </div>
</template>

<script>


export default {

    computed:{
    getSongInfo(){
        return this.$store.state.song
        }
    },

    data(){
        return{
            vidId: this.$route.params.videoId,
            inputRange: 5,

        }
    },

methods:{
      getCurrentSong(vidId){
        this.$store.dispatch('fetchCurrentSong', vidId)
      },

      playSong(vidId){
       window.player.loadVideoById(vidId)
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