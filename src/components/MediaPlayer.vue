<template>
  <div>
    <div>
      <h5>Artist:</h5>

      <p v-if="getArtistPlaylist.artist">
        {{ getArtistPlaylist.artist.name }}
      </p>
    </div>
    <div>
      <h5>Låtnamn:</h5>
      {{ getArtistPlaylist.name }}
    </div>

    <p>
      
      {{getArtistPlaylist}}
    </p>
    <button @click="getVideoIdFromArtistSong()">Ladda in spellista</button>
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
    };
  },


    created(){
      this.getVideoIdFromArtistSong();
    },


    computed: {
    getSongInfo() {
      return this.$store.state.song;
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

    getVideoIdFromArtistSong() {

      for(let i = 0; i < this.getArtistSongs.length; ++i){
         this.arrayOfSongsVideoId.push(this.getArtistSongs[i].videoId)
      }
      console.log(this.arrayOfSongsVideoId)

    },

    loadMyPlaylist() {
      window.player.loadPlaylist();
    },

    playSong() {

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
      window.player.pauseVideo();
    },

    changeVolume(inputRange) {
      window.player.setVolume(inputRange);
    },
    playNextSong() {
      console.log("Nästa låt");
      window.player.nextVideo();
    },
    playPreviousSong() {
      console.log("Föregående låt");
      window.player.previousVideo();
    },
  },
}
</script>