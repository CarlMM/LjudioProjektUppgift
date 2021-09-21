<template>
    <div>
        <h1>Artist view</h1>
        <div>
            <button @click="copyToClipboard()">Share Artist</button>
            <h4>{{getArtistInfo.name}}</h4>
            
            <p>
                {{bId}}
            </p>
            
            
            <div v-for="o in getArtistSongs" :key="o.videoId">
                <div>
                    <p>
                        {{o.name}} - Artist {{o.artist.name}} - videoId {{o.videoId}}
                        <button @click="setSongInfo(o.videoId)">Play Song</button>
                    </p>
                </div>

            </div>
            
                <media-player/>
            
            

            
            
        </div>
    </div>
</template>
<script>
import MediaPlayer from '../MediaPlayer.vue'


export default {


    components:{
        MediaPlayer,
    },



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
        },
        getAllSongs(){
            return this.$store.state.song
        }
       
        
    },

    created(){
        this.$store.dispatch('fetchYouTubeArtistApi', this.bId)
    },

    methods:{

        copyToClipboard(){
            navigator.clipboard.writeText(`http://localhost:3000/artistdetails/${this.bId}`)
            alert('Link copied to clipboard!')
        },

        setSongInfo(vidId){
            this.$store.dispatch('fetchCurrentSong', vidId)
        },
 

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