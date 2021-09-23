import { createStore } from "vuex"

const store = createStore({
   state:{
        musicResults:
            [
             {
             
            }
         ],
         song:[{
             //name: "",
             artist:{
                 name:'',
             }
         }],
         artists:{
             name:'',

         },
         
         artistSongs:[{
             artist:{
                 name:'',
             },

         }],

         artistSongPlaylist:[{
             videoId: "",
            
         }]

   },
   mutations:{

    setArtistSongPlaylist(state, data){
        state.setArtistSongPlaylist = data;
        console.log('setArtistSongPlaylist mutation', data)
        console.log(state.setArtistSongPlaylist)
    },


    fetchYouTubeApi(state, data){
            state.musicResults = data.content;
            console.log(state.musicResults, 'musicResults state')
    },

    //används inte pga kravet inte är kvar
       fetchYouTubeAlbumApi(state,data){
           state.musicResults.content.album = data;
           console.log(state.musicResults.album)
       },
       setCurrentSong(state, song){
           state.song = song.content[0];
           console.log(song, 'setCurrentSongMutation')
       },
       setCurrentArtist(state, artists){
           state.artists = artists;
           console.log(state.artists, 'artist state nuvarande artist', state.artists.name)
       },
       setArtistSongs(state, artistSongs){
        state.artistSongs = artistSongs.content;
        console.log(artistSongs, 'här är artistens låtar')
       },


   },
   actions:{

        async fetchYouTubeApi({commit}, searchObj){
            let response = await fetch
            (`https://yt-music-api.herokuapp.com/api/yt/${searchObj.whatSearch}/${searchObj.searchString}`)
            let data = await response.json()

            commit('fetchYouTubeApi', data)

            console.log(data)
        },

        async fetchAllArtistSongs({commit}, bandName){
            let response = await fetch(
                `https://yt-music-api.herokuapp.com/api/yt/songs/${bandName}`
            )
            let data = await response.json()

            commit('setArtistSongs', data)
        },

        async fetchYouTubeArtistApi({commit}, bId){
            let response = await fetch
            (`https://yt-music-api.herokuapp.com/api/yt/artist/${bId}`)
            let data = await response.json()

            commit('setCurrentArtist', data)

            console.log(data, 'Artist fetchAction')
        },

        async fetchCurrentSong({commit}, vId){
            let response = await fetch
            (`https://yt-music-api.herokuapp.com/api/yt/songs/${vId}`)
            let data = await response.json()

            commit('setCurrentSong', data)

            console.log(data)
        },
   }
})

export default store