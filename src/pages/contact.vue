<template>
	<AppBar></AppBar>
	<v-sheet class="pa-5">
		<v-container >
			<v-row>
				<v-col class="text-h5">contact</v-col>
			</v-row>
			<v-row v-for="i in items" :key="i.title">
				<v-col  class="mx-4">
					<span class="text-h6">- </span>
					{{ i.content1 }}
					<a v-if="i.hrefExist == 1" :href="i.href">{{ i.content2 }}</a>
					<a v-else >{{ i.content2 }}</a>
				</v-col>
			</v-row>
		</v-container>
	</v-sheet>
	<AppFooter></AppFooter>
</template>
<script setup>
const items = {
				t1 : {
					hrefExist : 0,
					content1 : "Name : ",
					content2 : "廖俊智",
					href : ""
				},
				t2 : {
					hrefExist : 0,
					content1 : "ID : ",
					content2 : "jeffliao(ErEr)",
					href : ""
				},
				t3 : {
					hrefExist : 0,
					content1 : "E-mail : ",
					content2 : "jeffliao92316046@gmail.com",
					href : ""
				},
				t4 : {
					hrefExist : 1,
					content1 : "Github : ",
					content2 : "Jeff92316046",
					href : "https://github.com/Jeff92316046"
				},
				t5 : {
					hrefExist : 1,
					content1 : "Facebook : ",
					content2 : "廖俊智(Er Er)",
					href : "https://www.facebook.com/profile.php?id=100006762961441"
				},             
			}
</script>