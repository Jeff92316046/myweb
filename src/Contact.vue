<template class="root">
    <v-card
      class="mx-auto" id="bar">
      <v-card id="a">
        <v-card-item v-for="i in items" :key="i.title" :title="i.title" class="vCard">
          <div v-for="j in i.text"    class="vCardSubtitle">
            {{j.content1}}
            <a  v-if="j.hrefExist === 1" class="link" :href="j.href">{{j.content2 }}</a>
            <a  v-else-if="j.hrefExist === 0" class="link">{{ j.content2 }}</a>
          </div>
        </v-card-item>
      </v-card>
      <div id="tab"> </div>
    </v-card>
    
    
    
    
    
  </template>
  <style>
  v-img { 
    aspect-ratio: 100%; 
  }
  #bar{
    position: relative;
    background-color: black;
    height: 0%;
  }
  #a{
    position: relative;
    margin-top: 5%;
    margin-left: 3%;
    margin-right: 3%;
    
    background-color: black;
  }
  .vCardTextT2{
    padding: 0.5rem;
    padding-bottom: 0.25rem;
    padding-left: 0.65rem;
    font-size: 1rem;
    background-color: black;
  }
  .vCardTextT2::before{
    content: "-";
    left: -20px;
    margin: 0.5rem;
    color: rgb(30, 206, 255);
  }
  .vCardTextT1{
    padding: 0.5rem;
    padding-bottom: 0.25rem;
    padding-left: 0.65rem;
    font-size: 1rem;
    background-color: black;
  }
  .vCardTextT1::before{
    content: "-";
    left: -20px;
    margin: 0.5rem;
    color: rgb(30, 206, 255);
  }
  .vCardSubtitle{
    font-size: 1rem;
    padding: 0.5rem;
    background-color: black;
  }
  .vCardSubtitle::before{
    content: "-";
    left: -20px;
    margin: 0.5rem;
    color: rgb(30, 206, 255);
  } 
  .link{
    font-size: 1rem;
    color: white;
  }
  div{
  
    color: white;
  }
  #tab{
    height: 2rem;
    background-color: black;
}
  </style>
  
<script>
export default {
    data() {
        return {
            items : {
                card1 :{
                    title : "Contact",
                    text : {
                        t1:{
                            hrefExist : 0,
                            content1 : "Name : ",
                            content2 : "廖俊智",
                            href : ""
                        },
                        t2:{
                            hrefExist : 0,
                            content1 : "ID : ",
                            content2 : "jeffliao(ErEr)",
                            href : ""
                        },
                        t3:{
                            hrefExist : 0,
                            content1 : "E-mail : ",
                            content2 : "jeffliao92316046@gmail.com",
                            href : ""
                        },
                        t4:{
                            hrefExist : 1,
                            content1 : "Github : ",
                            content2 : "Jeff92316046",
                            href : "https://github.com/Jeff92316046"
                        },
                        t5:{
                            hrefExist : 1,
                            content1 : "Facebook : ",
                            content2 : "廖俊智(Er Er)",
                            href : "https://www.facebook.com/profile.php?id=100006762961441"
                        },
                        
                    }
                }
            }
        }
    }
}
</script>
  