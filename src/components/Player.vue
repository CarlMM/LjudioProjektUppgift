<template>
  <div>
    <!-- <button @click="play('DXxeOvvNNwc')">The Black Page #1 on piano</button>
    <button @click="play('CtkZxnkbjtI')">The Black Page #2 live band</button>
    <button @click="pause()">Pause</button> -->
  </div>
</template>

<script>
export default {
  methods:{
    play(id){
      // calling global variable
      player.loadVideoById(id)
      player.playVideo()
    },
    pause(){
      player.pauseVideo()
    },
    myVolume(){
        player.setVolume()
    }
  }
}
</script>