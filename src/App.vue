<!--html  vue 템플릿 -->
<!-- id = app 인 div 를 관리한다! -->
<!-- 템플릿 문법들을 배워보자! -->
<!-- 최상위 엔리먼트는 하나다-->

<template>
    <div>
        {{greeting}}
        {{count}}
        <input type ="text" v-model = "greeting">
        <button v-on:click = "addCount">add</button>
    </div>
</template>

<!-- JS  vue 인스턴스. -->
<!-- 변수를 선언 함수를 선언.-->
<script>
    //변수 선언 방법//특이한 방법인거같다.

    export default{
        //변수 선언 방법
        data : function(){
            return {
                greeting: '안녕하세요',
                count: 0,
            }
        },
        //함수 선언 방법 
        methods :{
            addCount : function(){
                this.count += 1
            },
        },
        //가상으로 생성되었을때!
        created(){
            console.log('created!')
        },
        //가상으로 생성된 컴포넌트가 실제로 삽입 되었을때.
        mounted(){
            console.log('mounted!')
        },

        //vue 인스턴스 라이프사이클 





    } 
</script>

<!-- CSS -->
<style>

</style>
