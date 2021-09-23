<template>
  <div>
      <h1>About page</h1>
      <div id="aboutDiv">
        <div>
            <p>
              1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
              necessitatibus earum. Impedit soluta possimus dicta quia nobis ratione
              illum est adipisci minima earum! Magni dignissimos accusamus fugiat ea
              quis recusandae!
            </p>
        </div>
        <div>
            <p>
              2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
              necessitatibus earum. Impedit soluta possimus dicta quia nobis ratione
              illum est adipisci minima earum! Magni dignissimos accusamus fugiat ea
              quis recusandae!
            </p>
        </div>
        <div>
            <p>
              3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
              necessitatibus earum. Impedit soluta possimus dicta quia nobis ratione
              illum est adipisci minima earum! Magni dignissimos accusamus fugiat ea
              quis recusandae!
            </p>
        </div>
        <div>
            <p>
              4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
              necessitatibus earum. Impedit soluta possimus dicta quia nobis ratione
              illum est adipisci minima earum! Magni dignissimos accusamus fugiat ea
              quis recusandae!
            </p>
        </div>
      </div>
  </div>
</template>


<style scoped>
h1{
    text-align: center;
}
#aboutDiv  {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
}

#aboutDiv > div{
    padding: 15px
}

#aboutDiv > p {
  text-align: center;
  
}

@media screen and (max-width: 400px){
    #aboutDiv > div > p{
        font-size: 16px;
    }
}
</style>



