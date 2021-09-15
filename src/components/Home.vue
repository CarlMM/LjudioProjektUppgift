<template>
  <div class="mainDivHome">
        <h1>HomeView</h1>
        <div>
          <h4>Search for {{whatSearch}}</h4>
          <input type="text" placeholder="Search..." v-model='searchString'>
            <select name="searchOption" id="searchOption" v-model='whatSearch'>
              <option :value="'Song'">Song</option>
              <option :value="'Artist'">Artist</option>
              <option :value="'Album'">Album</option>
            </select>
        </div>
        <button @click="getMusic(searchString)">Sök</button>



        <div v-if="ifSearched">
          <search-result/>
        </div>

  </div>
</template>


<script>
import SearchResult from './SearchResult.vue'
import {ref} from 'vue'


export default {
    
  data(){

    return{
    ifSearched: false,
    whatSearch: 'Song',
    }
  },


  setup(){
  
    const searchString = ref('')
    

    return{
    searchString,
    
    }
  },


  components:{
    SearchResult,
    
  },

  methods:{

      async getMusic(searchString){
        this.ifSearched = true
        return await this.$store.dispatch('fetchYouTubeApi', searchString)
        
        
      },


  },

  computed:{
    getYTMusic(){
      return this.$store.state.musicResult.content
    }
  }




}
</script>

