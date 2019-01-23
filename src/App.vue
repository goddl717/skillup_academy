<!--html  vue 템플릿 -->
<!-- id = app 인 div 를 관리한다! -->
<!-- 템플릿 문법들을 배워보자! -->
<!-- 최상위 엔리먼트는 하나다-->
<!-- v-if 는 if 처음 사용이 가능하다-->
<!-- v-for의 사용방법 -->
<!-- v-for와 key와 같이 다닌다-->
<!-- attribute 를 v 문법에서 쓰고 싶다면 v-bind를 쓴다 그냥 줄여서 쓰면 : 을 쓰면 된다 
 그냥은 {{}}을 써서 접근한다. // 페이스북에서의  -->
<!-- -->
            
<template>
    <div>
        <div class = "add" >
            <input type="text" class = "add-input" v-model = "addInput">
            <button class ="add-button" v-on:click = "addTodo">추가</button>
        </div>
        <div class= "items"   >

            <div class = "item" v-for = "(item,index) in items" :key = "item">
                <div class = "item-label">{{item}}</div>
                <button class = "item-delete" v-on:click = "deleteTodo(index)">삭제</button>
            </div>

        </div>
    </div>
</template>

<!-- JS  vue 인스턴스. -->
<!-- 변수를 선언 함수를 선언.-->
<script>
    //변수 선언 방법//특이한 방법인거같다.

    export default{
        //변수 선언 방법
        data(){
            return {
                addInput :'',
                items : [] ,
            }
        },
        //함수 선언 방법 
        // this.isMenuShow = !this.isMenuShow
        //로 사용가능 
        methods :{
            addTodo(){
                this.items.push(this.addInput)
                this.addInput=""
            },
            deleteTodo(index){
              this.items.splice(index,1)
            }
            }
        
    }
   
     
</script>

<!-- CSS -->
<style lang = "scss">

.add-button{
    display:inline-block;
}
.item{
    .item-label {
        display : inline-block;
    }
    .item-button {
        display : inline-block;
    }
}
</style>
