<!-- attribute 를 v 문법에서 쓰고 싶다면 v-bind를 쓴다 그냥 줄여서 쓰면 : 을 쓰면 된다 
 그냥은 {{}}을 써서 접근한다. // 페이스북에서의  -->
<!-- -->
            
<template>
<div class = "sheet">
   
    <div class = "top">
        <div class = "top-title">"MOM"BOX</div>
        <div class = "top-menu">메뉴</div>  
    </div>

    <div class = "middle" >
            <div class = "right-window">
                <div>리스트</div>
                <div class = "food-line1">
                    음식1:가격
                    <input class = "food1-button" type = "button">
                    음식2:가격
                    <input class = "food2-button" type = "button">
                    음식3:가격
                    <input class = "food3-button" type = "button">
                    </div>
                    <div class = "food-line2">
                    음식4:가격
                    <input class = "food4-button" type = "button">
                    음식5:가격
                    <input class = "food5-button" type = "button">
                    음식6:가격
                    <input class = "food6-button" type = "button">
                    </div>
                 </div>

            
            <div class = "left-window">
               <div class = "platform">로그인
                    <div class = "id-box">
                        <div class = "id-box1">id</div> 
                        <input  class = "id-box2 " type="text"/>
                        
                    </div>

                     <div class = "password-box">
                        <div>password</div>
                        <input class = "login-password" type="password"/>
                    </div>

                    <div class = "check-box">
                        <button class = "login">login</button>
                        <button class = "sign-up">sign-up</button>  
                    </div>
                    </div>
                    
                <div class = "begged-item">담은 메뉴</div>
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
.sheet{
    background-color: rgb(255,247,225);

.top{

    border :1.5px solid rgb(190,192,194);
    .top-menu{
        border : 1px solid rgb(190,192,194);
    }
    .top-title{

        text-align : center;
        font-size: 50px;
    }
}

.middle{
    display : inline-block;
    border : 1px solid rgb(190,192,194);
    display: flex;

    .right-window{
        border :1px solid rgb(190,192,194);
        flex : 3;
        .food1-button{
            background: url("/images/sow.PNG")no-repeat;
            border: none;
            border-radius: 12px;
            width: 100px;
            height: 100px;
            
        }
        .food2-button{
            margin-right: 400px;
            margin-bottom: 200px
        }
        .food3-button{
            margin-bottom: 200px;
        }
        .food4-button{
            margin-right: 400px;
            margin-bottom: 200px
        }
        .food5-button{
            margin-right: 400px;
            margin-bottom: 200px
        }
        .food6-button{
            margin-bottom:200px;
        }     
    }
  
   .left-window{
         border : 1px solid rgb(190,192,194);
        .platform{
           .id-box{
               display:flex;
           }
            .password-box{
                display:flex;
            }
        }
   }

  
   }
}
</style>
