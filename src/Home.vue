<template>
    <div class="background">
        <v-img class="img" src="@\assets\fullcat.png" @click="plus"/>
        <footer id="footer">
            <span>
                © 2023 
                <a href="https://github.com/Jeff92316046">ErEr</a>
                Powered by 
                <a href="https://vuetifyjs.com/en/">vuetify</a>
            </span>
            <span>
                and 
                <a href="https://vuejs.org/">vue.js</a>
            </span>
        </footer>
        <div id="tab"> </div>
    </div>
</template>


<script>
    

    export default{
        data(){
            return{
                x : 0,
                str : ["60%","50%","40%","30%","20%","10%"],
                y : 0

            }
        },
        methods :{
            plus(){
                this.x = this.x + 1
                this.y = this.x%6
            }
        }
    }
</script>
<style >
.background{
    background-color: black;

}
.img{
    position: relative;
    margin-left: v-bind(str[y]);
    width: 40%;

}
#btn{
    position: relative;
    margin-left: 45%;
    width: 10%;
    height: 30%;
}
a{
    color: gray;
}
#footer{
    position: relative;
    padding: 0px;
    margin-left: 5%;
    color: gray;
    background-color: black;
}
#tab{
    height: 2rem;
    background-color: black;
}
</style>