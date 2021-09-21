<template>
  <div>
    <div>
        <h5>Artist: </h5>

            
            <p v-if="getSongInfo.artist">
            {{ getSongInfo.artist.name }}
            </p>
    </div>
    <div>
        <h5>Låtnamn: </h5>
        {{ getSongInfo.name }}
    </div>
    <button @click="getVideoIdFromArtistSong()">Ladda in spellista</button>
    <input @change="changeVolume(inputRange)" type="range" min="0" max="100" v-model='inputRange'>
    <button @click="playSong(getSongInfo.videoId)">Play</button>
    <button @click="pauseSong()">Pause</button>
    <button @click="playNextSong()">Nästa</button>
    <button @click="playPreviousSong()">Föregående</button>
  </div>
</template>


<script>
//Måste hämta artistSongs
//Loopa igenom artistSongs
//Hitta vilket Id man är på(?)
//Nästa knappen får i++ (eventuellt i+1)
//Föregående knappen får i-- (eventuellt i-1)

export default {

    // created(){
    //     this.getVideoIdFromArtistSong()
    // },

    data(){
        return{
        inputRange: 2
        }
    },

    computed:{
        getSongInfo(){
            return this.$store.state.song
        },
        getArtistSongs(){
            return this.$store.state.artistSongs
        },
        getArtistPlaylist(){
          return this.$store.state.artistSongPlaylist
        }
    },

  methods: {
    
    

    async getVideoIdFromArtistSong(){
             let everyVidId = []
            this.getArtistSongs.map(songId => {
             everyVidId = [...everyVidId,songId.videoId]

            })
            console.log('varje videoID',everyVidId)
            await this.$store.commit('setArtistSongPlaylist', everyVidId)
            window.player.loadPlaylist(everyVidId)
            
        },

        loadMyPlaylist(){
         window.player.loadPlaylist(getArtistPlaylist())
        },


    playSong() {
      
      window.player.playVideo();
    },
    loadMyPlaylist(){
      window.player.loadPlaylist(getArtistPlaylist())
    },

    pauseSong() {
      window.player.pauseVideo(this.vidId);
    },

    changeVolume(inputRange) {
      window.player.setVolume(inputRange);
    },
    playNextSong(){
        console.log('Nästa låt')
        window.player.nextVideo()
    },
    playPreviousSong(){
        console.log('Föregående låt')
        window.player.previousVideo()
    }
  },
};
</script>