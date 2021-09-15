<template>
    <div>
        <h3>SearchResult</h3>
        <div id="searchLoop" 
        v-for="(result, videoId) in getYTMusic" 
        :key="videoId">
        <router-link type="button" :to="`/musicdetails/${result.browseId}`"> 
            <p>{{result.name}}</p>
            
        </router-link>
        
            
        </div>
    </div>
</template>



<script>


export default {
    
    //Osäker routing i routerlink, vissa objekt i arrayen har ej videoId    

    computed:{
        getYTMusic(){

           return this.$store.state.musicResults.content
     }
    }


}
</script>