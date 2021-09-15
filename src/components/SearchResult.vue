<template>
    <div>
        <h3>SearchResult</h3>
        
            <div id="songLoop"
                    v-for="songs in getYTSongs"
                    :key="songs.videoId">
                    <div v-if="songs.type === 'song'">
                        <router-link type="button" :to="`/songdetails/${songs.videoId}`">
                        <p>{{songs.name}} + {{songs.type}}</p>
                        </router-link>
                    </div>
                    <div v-if="songs.type === 'artist'">
                        <router-link type="button" :to="`/artistdetails/${songs.browseId}`">
                        <p>{{songs.name}} + {{songs.type}}</p>
                        </router-link>
                    </div>
                    <div v-if="songs.type === 'album'">
                        <router-link type="button" :to="`/albumdetails/${songs.browseId}`">
                        <p>{{songs.name}} + {{songs.type}}</p>
                        </router-link>
                    </div>
            </div>
        
            <!-- <div id="artistLoop"
            v-for="(artists, browseId) in getYtArtists" :key="browseId">
                <router-link type="button" :to="`/artistdetails/${artists.browseId}`">
                <p>
                    {{artists.name}}
                    {{artists.browseId}}
                </p>
                </router-link>
            </div>

        <div id="albumLoop" v-for="(albums, browseId) in getYtAlbums" :key="browseId">
            <p>
                {{albums.name}}
            </p>
        </div> -->
            
        
    </div>
</template>

<script>


export default {
    
    //Osäker routing i routerlink, vissa objekt i arrayen har ej videoId    

    computed:{

        getYTSongs: function(){
            return this.$store.state.musicResults.content;
        },
        // getYtArtists: function(){
        //     return this.$store.state.musicResults.content.artist;
        // },
        // getYtAlbums: function(){
        //     return this.$store.state.musicResults.content.album;
        // }
    },

    // methods:{
    //     //osäker om denna behövs
    //     sendToRoute(type, id){
    //         this.$router.push(`/${type}/${id}`)
    //     }
    // }


}
</script>