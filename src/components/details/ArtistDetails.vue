<template>
    <div>
        <h1>Artist view</h1>
        <div>
            
            <h4>{{getArtistInfo.name}}</h4>
            <p>
                {{bId}}
            </p>
            
            <!-- {{bId}} -->
            <div v-for="o in getArtistSongs" :key="o.videoId">
                <div>
                    <p>
                        {{o.name}} - Artist {{o.artist.name}} - videoId {{o.videoId}}
                    </p>
                </div>

            </div>

            <!-- v-if="o.artist.browseId === this.bId" -->
            
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
       
        
    },

    created(){
        this.$store.dispatch('fetchYouTubeArtistApi', this.bId)
    },

    methods:{
 

      async getAllArtistSongs(bandName){
            bandName = this.$store.state.artists.name
           
            console.log('Detta är bandets namn: ', bandName)
             await this.$store.dispatch('fetchAllArtistSongs', bandName)
      },
      
   },
    
}
</script>


<style>
@import '/src/assets/style.css';


</style>