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
    <input @change="changeVolume(inputRange)" type="range" min="0" max="100" v-model='inputRange'>
    <button @click="playSong(getSongInfo.videoId)">Play</button>
    <button @click="pauseSong()">Pause</button>
    <button>Nästa</button>
    <button>Föregående</button>
  </div>
</template>


<script>
//Måste hämta artistSongs
//Loopa igenom artistSongs
//Hitta vilket Id man är på(?)
//Nästa knappen får i++ (eventuellt i+1)
//Föregående knappen får i-- (eventuellt i-1)

export default {

    

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
    },

  methods: {
    playSong(vidId) {
      window.player.loadVideoById(vidId);
      window.player.playVideo();
    },

    pauseSong() {
      window.player.pauseVideo(this.vidId);
    },

    changeVolume(inputRange) {
      window.player.setVolume(inputRange);
    },
  },
};
</script>