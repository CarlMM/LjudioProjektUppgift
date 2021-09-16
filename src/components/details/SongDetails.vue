<template>
    <div>
        <h1>Song Details</h1>
            <p>Videon/låten tänkt spelat här</p>
            <div>
                <!-- <div id="songInfo" v-for="songs in getCurrentYTSong" 
                :key="songs.videoId">
                <p> {{ songs.name }} </p>
                </div> -->
                 <p>
                     {{getSongInfo.artist.name}} + 
                     {{getSongInfo.name}} + 
                     <!-- {{vidId}} -->
                 </p>

            </div>
        
    </div>
</template>

<script>


export default {

    computed:{
    getCurrentYTSong: function(){
        if(this.$store.state.musicResults.videoId === this.vidId){
            return this.$store.state.musicResults;
        }
    },

    getSongInfo(){
        return this.$store.state.song
        }
    },
    


    data(){
        return{
            vidId: this.$route.params.videoId
        }
    },

    mounted(){
    this.getCurrentSong(this.vidId)
    },


methods:{
      getCurrentSong(vidId){
        this.$store.dispatch('fetchCurrentSong', vidId)
      }
   },
   
 }

</script>