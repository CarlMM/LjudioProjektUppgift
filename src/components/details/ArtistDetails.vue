<template>
    <div>
        <h1>Artist view</h1>
        <div>
            
            <h4>{{getArtistInfo.name}}</h4>
            
            <p>
                {{bId}}
            </p>
            
            <!-- {{bId}} -->
            <div v-for="o in getArtistSongs" :key="o.videoId">
                <div>
                    <p>
                        {{o.name}} - Artist {{o.artist.name}} - videoId {{o.videoId}}
                    </p>
                <button @click="playSong(o.videoId)">Play</button>
                <button @click="pauseSong()">Pause</button>
                <input @change="changeVolume(inputRange)" type="range" min="0" max="100" v-model='inputRange'>
                </div>

            </div>

            

            <!-- v-if="o.artist.browseId === this.bId" -->
            
        </div>
    </div>
</template>
<script>



export default {
    
    data(){
        return{
            bId: this.$route.params.browseId,
            inputRange: 5,
        }
    },
    computed:{
        getArtistInfo(){
            this.getAllArtistSongs()
            return this.$store.state.artists
        },
        getArtistSongs(){
            return this.$store.state.artistSongs
        }
       
        
    },

    created(){
        this.$store.dispatch('fetchYouTubeArtistApi', this.bId)
    },

    methods:{
 

      async getAllArtistSongs(bandName){
            bandName = this.$store.state.artists.name
           
            console.log('Detta är bandets namn: ', bandName)
             await this.$store.dispatch('fetchAllArtistSongs', bandName)
        },

        playSong(vidId){
       window.player.loadVideoById(vidId)
       window.player.playVideo()
        },
        pauseSong(){
        window.player.pauseVideo(this.vidId)
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