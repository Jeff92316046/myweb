<template>
  <AppBar></AppBar>
	<v-sheet class="pa-5">
		<v-container >
			<v-row v-for="i in items" :key="i.title">
				<v-col class="text-h5 v-col-12" >{{ i.title }}</v-col>
				<v-col v-if="i.layer === 2" v-for="j in i.text" class="v-col-12 mx-2 text-h6 ">
					<span class="text-h6">- </span>
					{{ j }}
				</v-col>
				<v-col v-if="i.layer === 3" v-for="j in i.text" class="v-col-12 v-col-sm-6 v-col-md-3">
					<div class="text-h6 mx-2">
						<span class="text-h6">- </span>
						{{ j.subtitle }}
					</div>
					<!-- <div v-for="k in j.content" class="mx-5 ">- {{ k }}</div> -->
					<v-container>
						<v-row>
							<v-col v-for="k in j.content" class="mx-4 my-0 py-0 v-col-12">
								<span class="text-h6">- </span>
								{{ k }}
							</v-col>
						</v-row>
					</v-container>
				</v-col>
			</v-row>
		</v-container>
  </v-sheet>
	<AppFooter></AppFooter>
</template>
<script setup>
const items = {
				card1 :{
					layer:2,
					title : "我是誰",
					text : {
						t1:"對資訊有興趣的人",
						t2:"北市大資科系",
						t3:"北市大學生會資訊部部員",
					}
				},
				card2 :{
					layer:3,
					title : "技能樹",
					text : {
						t1:{
							subtitle:"程式語言",
							content:{
								c1:"python",
								c2:"C/C++",
								c3:"javascript",
								c4:"java",
								c5:"go(正在學)",
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
					layer:2,
					title : "參與競賽",
					text : {
						t1:"2023臺北程式設計節-臺北城市儀表板黑客松(11/18~11/19)",
						t2:"臺北市立大學112學年度第1學期「動態網頁設計」課程競賽(2/20):特優"
					}
				},
				card4 :{
					layer:3,
					title : "實習經驗",
					text : {
						t1:{
							subtitle:"404",
							content:{
								c1:"尋找中~~~~"
							}
						}
					},
				},
				/* card5 :{
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
				} */
			}
</script>
