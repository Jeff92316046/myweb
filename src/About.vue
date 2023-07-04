<template class="root">
    <v-card
      class="mx-auto" id="bar">
      <v-card id="a">
        <v-card-item v-for="i in items" :key="i.title" :title="i.title" class="vCard">
          <div v-if="i.layer === 2" v-for="j in i.text" class="vCardSubtitle">{{ j }}</div>
          <div v-if="i.layer === 3" v-for="j in i.text" >
            <div class="vCardSubtitle"> {{ j.subtitle }}
              <div v-for="k in j.content" class="vCardTextT2">{{ k}}</div>
            </div>
            
          </div>
          <v-divider></v-divider>
        </v-card-item>
      </v-card>
    </v-card>
    
    
    
    
    
  </template>
  <style>
  v-img { 
    aspect-ratio: 100%; 
  }
  #bar{
    position: relative;
    background-color: black;
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
  div{
  
    color: white;
  }
  
  </style>
  
  <script>
    export default {
      
      data() {
        return {
          items : {
            card1 :{
              layer:2,
              title : "我是誰",
              text : {
                t1:"對資訊有興趣的人",
                t2:"北市大資科系",
                t3:"無職"
              }
            },
            card2 :{
              layer:3,
              title : "技能樹",
              text : {
                t1:{
                  subtitle:"程式語言",
                  content:{
                    c1:"python"
                  }
                },
                t2:{
                  subtitle:"工具",
                  content:{
                    c1:"Window/Linux",
                    c2:"Git"
                  }
                }
              }
            },
            card3 :{
              layer:3,
              title : "競賽成績",
              text : {
                t1:{
                  subtitle:"專案競賽",
                  content:{
                    c1:"暫無"
                  }
                },
                t2:{
                  subtitle:"算法競賽",
                  content:{
                    c1:"暫無"
                  }
                },
                t3:{
                  subtitle:"搶旗攻防賽",
                  content:{
                    c1:"暫無"
                  }
                },
                t4:{
                  subtitle:"數學競賽",
                  content:{
                    c1:"暫無"
                  }
                }
              }
            },
            card4 :{
              layer:3,
              title : "實習經驗",
              text : {
                t1:{
                  subtitle:"none",
                  content:{
                    c1:"暫無"
                  }
                }
              },
            },
            card5 :{
              layer:3,
              title : "其他活動與課程參與",
              text : {
                t1:{
                  subtitle:"none",
                  content:{
                    c1:"暫無"
                  }
                }
              }
            }
          }
        } 
      }
  }
  </script>
  