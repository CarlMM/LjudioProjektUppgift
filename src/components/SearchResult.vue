<template>
    <div>
        <h3>SearchResult</h3>
        <div id="searchLoop" 
        v-for="result in getYTMusic" 
        :key="result.browseId">
        <router-link type="button" :to="`/musicdetails/${result.browseId}`">
            <p>{{result.name}}</p>
        </router-link>
        
            
        </div>
    </div>
</template>



<script>
export default {
    


computed:{
    getYTMusic(){
      return this.$store.state.musicResults.content
    }
}




}
</script>