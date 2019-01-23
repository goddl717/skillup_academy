<!--html  vue 템플릿 -->
<template>
    <div>{{greeting}}{{count}}</div>
   
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
            consol.log('mounted!')
        },

        //vue 인스턴스 라이프사이클 





    } 
</script>

<!-- CSS -->
<style>

</style>
