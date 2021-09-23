<template>
    <div id="songDetailsDiv">
        <h1>Song Details</h1>
            <div><button id="shareButton" @click="copyToClipboard">Share song</button></div>
            <div>
                    <p>
                     Artist: {{getSongInfo.artist.name}}
                     </p>
                     <p>
                         Låt: {{getSongInfo.name}}
                    </p>
                    
                 
                <div id="playPauseBtnDiv">
                    <button @click="playSong()">Play <i class="fa fa-play" aria-hidden="true"></i></button>
                    <button @click="pauseSong()">Pause <i class="fa fa-pause" aria-hidden="true"></i></button>
                    <div>
                        <p>
                            Volym: {{this.inputRange}}
                        </p>
                        <input @change="changeVolume(inputRange)" type="range" min="0" max="100" v-model='inputRange'>
                        </div>
                </div>
            </div>
        
    </div>
</template>

<script>

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
            isPlayingSong: false,
            songRoute: '/songdetails/',

        }
    },
    created(){
        this.$store.dispatch('fetchCurrentSong', this.vidId)
    },
    methods:{
        copyToClipboard(){
            navigator.clipboard.writeText(`${window.location.origin}` + `${this.songRoute}` + `${this.vidId}`)
            alert('Link copied to clipboard!')
        },
        getCurrentSong(vidId){
        this.$store.dispatch('fetchCurrentSong', vidId)
        },
      playSong(){
         if(this.isPlayingSong === false){
             this.isPlayingSong = true;
             window.player.loadVideoById(this.vidId)
         } 
       else if(this.isPlayingSong === true){
        window.player.playVideo()
       }
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