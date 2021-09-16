import { createStore } from "vuex" 

const store = createStore({
   state:{
        musicResults:{
            content:[{
            // name:"",
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
         }]
        }
   },
   mutations:{
       fetchYouTubeApi(state,data){
            state.musicResults = data;
            console.log(state.musicResults, 'RandomInfo')
       },
       fetchYouTubeArtistApi(state, data){
           state.musicResults.content.artist = data;
           console.log(state.musicResults.artist)
       },
       fetchYouTubeAlbumApi(state,data){
           state.musicResults.content.album = data;
           console.log(state.musicResults.album)
       },
    //    fetchCurrentSong(state, data){
    //        state.musicResults.content.
    //    }

   },
   actions:{
        
        async fetchYouTubeApi({commit}, searchObj){
            let response = await fetch
            (`https://yt-music-api.herokuapp.com/api/yt/${searchObj.whatSearch}/${searchObj.searchString}`)
            let data = await response.json()


            commit('fetchYouTubeApi', data)

            console.log(data)
        },

        async fetchYouTubeArtistApi({commit}, bId){
            let response = await fetch
            (`https://yt-music-api.herokuapp.com/api/yt/artist/${bId}`)
            let data = await response.json()

            commit('fetchYouTubeArtistApi', data)

            console.log(data)
        },

        async fetchYouTubeAlbumApi({commit}, bId){
            let response = await fetch
            (`https://yt-music-api.herokuapp.com/api/yt/album/${bId}`)
            let data = await response.json()

            commit('fetchYouTubeArtistApi', data)

            console.log(data)
        },


        async fetchCurrentSong({commit}, vId){
            let response = await fetch(`https://yt-music-api.herokuapp.com/api/yt/songs/${vId}`)
            let data = await response.json()


            commit('fetchCurrentSong', data)

            console.log(data)
        }



   }
})

export default store