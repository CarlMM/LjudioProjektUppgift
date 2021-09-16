<template>
    <div>
        <h1>Song Details</h1>
        <div id="ytPlayer">
            <p>Videon/låten tänkt spelat här</p>
            <div >
                <p>
                    {{vidId}}
                </p>
            </div>



        </div>
    </div>
</template>



<script>


export default {
    


    data(){
        return{
            vidId: this.$route.params.videoId
        }
    },

mounted(){
    
},


computed:{
    getCurrentYTSong(){
        if(this.$store.state.musicResults.content.videoId === this.vidId){
            console.log()
            return this.$store.state.musicResults.content
            
            
        }
    }
},

methods:{
    // getCurrentSong(){
    //     return this.$store.state.musicResults.content
    // }


}



}
</script>