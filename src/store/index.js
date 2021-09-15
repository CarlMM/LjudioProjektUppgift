import { createStore } from "vuex" 

const store = createStore({
   state:{
        musicResults:{
            content:[{
            name:"",
            //videoId:"", //Osäkert, vissa objekt i arrayen har ej videoId
            browseId:"",
            type:"",
            album:{
                name:"",
                browseId:"",
            },
            artist:{
                name:"",
                browseId:"",
            },
            song:{
                name:"",
            },
         }]
        }
   },
   mutations:{
       fetchYouTubeApi(state,data){
            state.musicResults = data;
            console.log(state.musicResults, 'RandomInfo')
       }
   },
   actions:{
        
        async fetchYouTubeApi({commit}, searchObj){
            let response = await fetch
            (`https://yt-music-api.herokuapp.com/api/yt/${searchObj.whatSearch}/${searchObj.searchString}`)
            let data = await response.json()


            commit('fetchYouTubeApi', data)

            console.log(data)
        }



   }
})

export default store