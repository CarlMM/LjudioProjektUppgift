<template>
  <div id="mediaPlayerDiv">
    <div>
      <h5>Artist:</h5>
        <p v-if="this.pressedPlay === true">
          {{getArtistInfo.name}}
        </p>
        
    </div>
    <div>
      <h5>Låtnamn:</h5>
      <div v-for="arr in this.arrayOfSongsVideoId" :key="arr">
        <p v-if="arr === getArtistSongs.videoId">
          {{arr}}
        </p>
            
          

               
      </div>
    </div>

    <p>
      
     
    </p>
    <!-- <button @click="getVideoIdFromArtistSong()">Ladda in spellista</button> -->
    <input
      @change="changeVolume(inputRange)"
      type="range"
      min="0"
      max="100"
      v-model="inputRange"
    />
    <button @click="playSong()">Play</button>
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
  

  data() {
    return {
      inputRange: 2,
      isPlaying: false,
      arrayOfSongsVideoId: [],
      pressedPlay: false,
    };
  },


    watch:{
      getArtistSongs(){
        if(this.getArtistSongs.length > 0){
          this.getVideoIdFromArtistSong()
        }
      }
    },

    computed: {
     getSongInfo() {
       return this.$store.state.song;
    },
    getArtistInfo(){
            return this.$store.state.artists
      },
     getArtistSongs() {
       return this.$store.state.artistSongs;
    },
    getArtistPlaylist() {
      return this.$store.state.artistSongPlaylist;
    },
  },

  methods: {
    // async getVideoIdFromArtistSong() {
    //   let everyVidId = [];
    //   this.getArtistSongs.map((songId) => {
    //     everyVidId = [...everyVidId, songId.videoId];
    //   });
    //   console.log("varje videoID", everyVidId);
    //   await this.$store.commit("setArtistSongPlaylist", everyVidId);
    //   window.player.loadPlaylist(everyVidId);
    // },

    async getVideoIdFromArtistSong() {

        for(let i = 0; i < this.getArtistSongs.length; ++i){
         await this.arrayOfSongsVideoId.push(this.getArtistSongs[i].videoId)
        
      }
      console.log('alla videoId från artist', this.arrayOfSongsVideoId)
    },

    loadMyPlaylist() {
      window.player.loadPlaylist();
    },
    playSong() {
      this.pressedPlay = true;
      if(!this.isPlaying){
        window.player.loadPlaylist(this.arrayOfSongsVideoId)
        this.isPlaying = true;

      }
      window.player.playVideo();
    },
    loadMyPlaylist() {
      window.player.loadPlaylist(getArtistPlaylist());
    },

    pauseSong() {
      this.pressedPlay = false;
      window.player.pauseVideo();
    },

    changeVolume(inputRange) {
      window.player.setVolume(inputRange);
    },
    playNextSong() {
      console.log("Nästa låt", this.arrayOfSongsVideoId);
      window.player.nextVideo();
    },
    playPreviousSong() {
      console.log("Föregående låt");
      window.player.previousVideo();
    },
  },
}
</script>