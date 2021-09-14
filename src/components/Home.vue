<template>
  <div class="mainDivHome">
        <h1>HomeView</h1>
        <h3>Ljudio</h3>
        <input type="text" placeholder="Search...">
        <button>Sök</button>
        <div>
          <search-result/>
          
          </div>
  </div>
</template>


<script>
import SearchResult from './SearchResult.vue'


export default {
  components: { SearchResult },
  


}
</script>