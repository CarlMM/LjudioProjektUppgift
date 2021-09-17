<template>
    <div>
        <h1>Song Details</h1>
            <p>Videon/låten tänkt spelat här</p>
            <div>
                
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
    
    getSongInfo(){
        return this.$store.state.song
        }
    },
    


    data(){
        return{
            vidId: this.$route.params.videoId
        }
    },


methods:{
      getCurrentSong(vidId){
        this.$store.dispatch('fetchCurrentSong', vidId)
      }
   },
   
 }

</script>