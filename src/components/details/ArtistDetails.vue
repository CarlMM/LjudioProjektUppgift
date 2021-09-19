<template>
    <div>
        <h1>Artist view</h1>
        <div>
            
            <h4>{{getArtistInfo.name}}</h4>
            
            <!-- {{bId}} -->
            <div v-for="o in getArtistSongs" :key="o.videoId">
                <p>
                    {{o.name}}
                </p>

            </div>

            
            
        </div>
    </div>
</template>
<script>



export default {
    
    data(){
        return{
            bId: this.$route.params.browseId,
        }
    },
    computed:{
        getArtistInfo(){
            this.getAllArtistSongs()
            return this.$store.state.artists
        },
        getArtistSongs(){
            return this.$store.state.artistSongs
        }
        // async getArtistSongs(){
        //     console.log(this.$store.state.song)
        //     return await this.$store.state.song
        // },
        
    },

    created(){
        //this.getAllArtistSongs()
    },

    methods:{
    //     getCurrentArtist(bId){
    //     console.log('Hämtar current artist')
    //     this.$store.dispatch('fetchYouTubeArtistApi', bId)
    //   },

    //   getCurrentSong(vidId){
    //       //this one doesnt work yet
    //     this.$store.dispatch('fetchCurrentSong', vidId)
    //   },

      async getAllArtistSongs(bandName){
            bandName = this.$store.state.artists.name
           
            console.log('Detta är bandets namn: ', bandName)
             await this.$store.dispatch('fetchAllArtistSongs', bandName)
      },
      
   },
    
}
</script>


