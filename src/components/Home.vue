<template>
  <div class="mainDivHome">
        <h1>HomeView</h1>
        <div>
          <h4>Search for {{searchObj.whatSearch}}</h4>
          <input id="searchInput" type="text" placeholder="Search..." v-model='searchObj.searchString'>
            <select name="searchOption" id="searchOption" v-model='searchObj.whatSearch'>
              <option :value="'songs'">Song</option>
              <option :value="'artists'">Artist</option>
              <option :value="'albums'">Album</option>
            </select>
        </div>   
        <button id="searchBtn" @click="getMusic(searchObj)">Search</button>
        <div v-if="ifSearched">
          <search-result/>
        </div>
  </div>
</template>


<script>
import SearchResult from './SearchResult.vue'

export default {
    
  data(){

    return{
    ifSearched: false,
      searchObj:{
        whatSearch: 'songs',
        searchString: '',
      },
    }
  },

  components:{
    SearchResult,
  },

  methods:{

      async getMusic(searchObj){

        if(searchObj.searchString === ''){
          alert('Search is empty!')
        }
        else{
        this.ifSearched = true
        return await this.$store.dispatch('fetchYouTubeApi', searchObj)
        }
      },
  },
}
</script>

