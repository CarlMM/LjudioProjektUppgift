import { createStore } from "vuex" 

const store = createStore({
   state:{
        musicResults:[{

        }]
   },
   mutations:{
       fetchYouTubeApi(state,data){
            state.musicResults = data;
       }
   },
   actions:{
        
        async fetchYouTubeApi({commit}, searchString){
            let response = await fetch
            (`https://yt-music-api.herokuapp.com/api/yt/artists/${searchString}`)
            let data = await response.json()
            


            commit('fetchYouTubeApi', data)

            console.log(data)
        }



   }
})

export default store