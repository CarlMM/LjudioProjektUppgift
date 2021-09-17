<template>
    <div>
        <h3>SearchResult</h3>
        
            <div id="songLoop"
                    v-for="songs in getYTSongs"
                    :key="songs.videoId">
                    <div v-if="songs.type === 'song'">
                        <router-link @click="setSongInfo(songs.videoId)" type="button" :to="`/songdetails/${songs.videoId}`">
                        <p>{{songs.name}} + {{songs.type}}</p>
                        </router-link>
                    </div>
                    <div v-if="songs.type === 'artist'">
                        <router-link @click="setArtistInfo(songs.browseId)" type="button" :to="`/artistdetails/${songs.browseId}`">
                        <p>{{songs.name}} + {{songs.type}}</p>
                        </router-link>
                    </div>
                    <div v-if="songs.type === 'album'">
                        <router-link type="button" :to="`/albumdetails/${songs.browseId}`">
                        <p>{{songs.name}} + {{songs.type}}</p>
                        </router-link>
                    </div>
            </div>
        
        
    </div>
</template>

<script>


export default {

    computed:{

        getYTSongs: function(){
            return this.$store.state.musicResults;
        },
        // getYtArtists: function(){
        //     return this.$store.state.musicResults.content.artist;
        // },
        // getYtAlbums: function(){
        //     return this.$store.state.musicResults.content.album;
        // }
    },

    methods:{
        setSongInfo(vidId){
            this.$store.dispatch('fetchCurrentSong', vidId)
        },

        setArtistInfo(bId){
            this.$store.dispatch('fetchYouTubeArtistApi', bId)
        },
    }


}
</script>