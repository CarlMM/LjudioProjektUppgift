<template>
    <div>
        <h1>Artist view</h1>
        <div>
            {{getArtistInfo.name}}
            
            {{bId}}

            <div id="artistSongLoop" 
            v-for="songs in getArtistSongs" :key="songs.videoId">
            <div v-if="songs.artist.browseId === bId && songs.artist.name === getArtistInfo.name">
                <p>
                    {{songs.name}}
                </p>

            </div>

            </div>

        </div>
    </div>
</template>


<script>
//import PlayArtistSong from '/src/components/PlayArtistSong.vue'


export default {
    

    data(){
        return{
            bId: this.$route.params.browseId
        }
    },

    computed:{
        getArtistInfo(){
            return this.$store.state.artists
        },
        async getArtistSongs(){
            return await this.$store.state.song
        }
    },

    methods:{
        getCurrentArtist(bId){
        this.$store.dispatch('fetchYouTubeArtistApi', bId)
      },

      getCurrentSong(vidId){
        this.$store.dispatch('fetchCurrentSong', vidId)
      },
   },
    
}
</script>


