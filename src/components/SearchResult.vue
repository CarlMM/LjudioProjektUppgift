<template>
    <div>
        <h3>SearchResult</h3>
        <div id="searchLoop" 
        v-for="result in getYTMusic" 
        :key="result.browseId">
            <p>{{result.name}}</p>
            
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