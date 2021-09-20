<template>
    <div>

        {{artistName}}
        {{artistSong}}
        <button @click="playSong(o.videoId)">Play</button>
                <button @click="pauseSong()">Pause</button>
                <button>Nästa</button>
            <button>Föregående</button>
    </div>
</template>


<script>

//Måste hämta artistSongs
//Loopa igenom artistSongs
//Hitta vilket Id man är på(?)
//Nästa knappen får i++ (eventuellt i+1)
//Föregående knappen får i-- (eventuellt i-1)

export default {
    



    
}
</script>