<template>
    <div id="artistViewDiv">
        <h1>Artist view</h1>
        <div>
            
            <button @click="copyToClipboard()">Share Artist</button>
            <h2>{{getArtistInfo.name}}</h2>
            <div id="artinstSongsLoop" v-for="o in getArtistSongs" :key="o.videoId">
                    <p>
                        Track: {{o.name}} 
                    </p>
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
            artistRoute: '/artistdetails/',
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
            navigator.clipboard.writeText(`${window.location.origin}` + `${this.artistRoute}` + `${this.bId}`)
            alert('Link copied to clipboard!')
        },

        setSongInfo(vidId){
            this.$store.dispatch('fetchCurrentSong', vidId)
        },
        
        async getAllArtistSongs(bandName){
            bandName = this.$store.state.artists.name
           
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