<!--html  vue 템플릿 -->
<!-- id = app 인 div 를 관리한다! -->
<!-- 템플릿 문법들을 배워보자! -->
<!-- 최상위 엔리먼트는 하나다-->
<!-- v-if 는 if 처음 사용이 가능하다-->

<template>
    <div>
       <button v-on:click = "toggleMenu">메뉴</button>
       <div class = "menu" v-if="isMenuShow">
           <div>홈</div>
           <div>게시판</div>
           <div>은지 칠칠이</div>
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
                isMenuShow: false,
            }
        },
        //함수 선언 방법 
        // this.isMenuShow = !this.isMenuShow
        //로 사용가능 
        methods :{
            toggleMenu(){
            if(this.isMenuShow){
                this.isMenuShow = false
            }else 
            {
                this.isMenuShow = true
            }

            },
        },
    }
   
     
</script>

<!-- CSS -->
<style>

</style>
