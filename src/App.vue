<!-- attribute 를 v 문법에서 쓰고 싶다면 v-bind를 쓴다 그냥 줄여서 쓰면 : 을 쓰면 된다 
 그냥은 {{}}을 써서 접근한다. // 페이스북에서의  -->
<!-- -->
            
<template>
<div>
    <div class = "top">
        <div class = "top-title">반 도시락 서비스</div>
        <div class = "top-menu">메뉴</div>  
    </div>

    <div class = "middle" >
            <div class = "right-window">리스트</div>

            <div class = "left-window">
               <div class = "login">로그인</div>
                <div class = "view-total">금액리스트</div>
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

.top{
    border : 2px dotted gray;

}
.middle{
    .right-window{
        display: inline-block;
        border : 2px dotted gray;
    }
    
   .left-window{
        display:inline-block;
   }

   border : 2px dotted gray;
   
}
 
</style>
