import { createStore } from "vuex"

const store = createStore({
   state:{
        musicResults:
            [
             {
             //name:"",
            // //videoId:"", //Osäkert, vissa objekt i arrayen har ej videoId
            // browseId:"",
            // type:"",
            // album:{
            //     name:"",
            //     browseId:"",
            // },
            // artist:{
            //     name:"",
            //     browseId:"",
            // },
            // type:{
            //     //name:"",
            // },
            }
         ],
         song:[{
             name: "",
         }],
         artists:{
             name:"",

         },
         
         artistSongs:[{
            name: "",
         }],

   },
   mutations:{
       fetchYouTubeApi(state, data){
            state.musicResults = data.content;
            console.log(state.musicResults, 'musicResults state')
       },
       fetchYouTubeArtistApi(state, data){
           state.musicResults.content.artist = data;
           console.log(state.musicResults.artist)
       },
       fetchYouTubeAlbumApi(state,data){
           state.musicResults.content.album = data;
           console.log(state.musicResults.album)
       },
    
       setCurrentSong(state, song){
           state.song = song.content[0];
       },
       setCurrentArtist(state, artists){
           state.artists = artists;
           console.log(state.artists, 'nuvarande artist', state.artists.name)
       },
       setArtistSongs(state, artistSongs){
        state.artistSongs = artistSongs;
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

            console.log(data, 'fetchAction')
        },

        async fetchCurrentSong({commit}, vId){
            let response = await fetch
            (`https://yt-music-api.herokuapp.com/api/yt/songs/${vId}`)
            let data = await response.json()

            commit('setCurrentSong', data)

            console.log(data)
        },







        // async fetchYouTubeAlbumApi({commit}, bId){
        //     let response = await fetch
        //     (`https://yt-music-api.herokuapp.com/api/yt/album/${bId}`)
        //     let data = await response.json()

        //     commit('fetchYouTubeAlbumApi', data)

        //     console.log(data)
        // },



   }
})

export default store