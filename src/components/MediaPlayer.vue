<template>
  <div id="mediaPlayerDiv">
    <div v-if="this.pressedPlay === true"  id="trackAndArtist">
      <div>
        <h3>Artist:</h3>
          <p>
            {{getArtistInfo.name}}
          </p>
      </div>
      <div>
        <h3>Låtnamn:</h3>
            <p>
              {{this.getSongNameIndex}}
            </p>
      </div>
    </div>
    <div v-if="this.pressedPlay === true" >
      <p id="volumeP">
        Volume: {{this.inputRange}}
      </p>
      <input
        @change="changeVolume(inputRange)"
        type="range"
        min="0"
        max="100"
        v-model="inputRange"
      />
    </div>
    <div id="artistBtnDiv">
      <button @click="playPreviousSong()">Previous <i class="fa fa-step-backward" aria-hidden="true"></i></button>
      <button @click="playSong()">Play <i class="fa fa-play" aria-hidden="true"></i></button>
      <button @click="pauseSong()">Pause <i class="fa fa-pause" aria-hidden="true"></i></button>
      <button @click="playNextSong()">Next <i class="fa fa-step-forward" aria-hidden="true"></i></button>
      
    </div>
  </div>
</template>

<script>

export default {
  

  data() {
    return {
      inputRange: 2,
      isPlaying: false,
      arrayOfSongsVideoId: [],
      arrayOfSongsNameAndId: [],
      atIndex: 0,
      pressedPlay: false,
    };
  },


    watch:{
      getArtistSongs(){
        if(this.getArtistSongs.length > 0){
          this.getVideoIdFromArtistSong()
          //this.getSongNameIndex()
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
    getSongNameIndex(){
      if(this.arrayOfSongsNameAndId.length > 0)
      return this.arrayOfSongsNameAndId[this.atIndex].name
    }
  },

  methods: {
    async getVideoIdFromArtistSong() {

      for(let i = 0; i < this.getArtistSongs.length; ++i){
         await this.arrayOfSongsVideoId.push(this.getArtistSongs[i].videoId)
        
      }
       for(let i = 0; i < this.getArtistSongs.length; ++i){
        await this.arrayOfSongsNameAndId.push({name: this.getArtistSongs[i].name})
       }
      console.log(this.arrayOfSongsNameAndId)
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
      console.log(window.player.getPlaylistIndex())
      this.atIndex += 1;
      window.player.nextVideo();
      
    },
    playPreviousSong() {
      console.log("Föregående låt");
      this.atIndex -= 1;
      window.player.previousVideo();
      
    },
  },
}
</script>