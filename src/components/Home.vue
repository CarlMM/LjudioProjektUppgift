<template>
  <div class="mainDivHome">
        <h1>HomeView</h1>
        <h3>Ljudio</h3>
        <input type="text" placeholder="Search..." v-model='searchString'>
        <button @click="getMusic(searchString)">Sök</button>
        <div>
          <search-result/>
          
          </div>
  </div>
</template>


<script>
import SearchResult from './SearchResult.vue'
import {ref} from 'vue'




 //   computed:{
  //     getMusic(){
  //       return await this.$store.dispatch('fetchYouTubeApi')
  //    }
  //  },

export default {
    
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
        return await this.$store.dispatch('fetchYouTubeApi', searchString)
        
      }
  },


  computed:{
    getYTMusic(){
      return this.$store.state.musicResult
    }
  }




}
</script>

