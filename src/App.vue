<!-- attribute 를 v 문법에서 쓰고 싶다면 v-bind를 쓴다 그냥 줄여서 쓰면 : 을 쓰면 된다 
 그냥은 {{}}을 써서 접근한다. // 페이스북에서의  -->
<!-- -->
            
<template>
<div class = "sheet">
   
    <div class = "top">
        <div class = "top-title">"MOM"BOX</div>
        <div class = "top-main">
            <div class = "top-menu">메뉴</div>  
            <div class = "top-info">구독</div>
            <div class = "top-infoco" >회사</div>
        </div>
    </div>

    <div class = "middle" >
            <div class = "right-window">
                <div>리스트</div>
            
            <div class = "list-view" v-for = "(item,index) in items" :key = "index" @click = "addMoney(index)">
                <div>{{item[index,0]}}</div>
                <button>{{item[index,0]}}</button>
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
                        <input class = "login-password" type="text"/>
                    </div>

                    <div class = "check-box">
                        <button class = "login">login</button>
                        <button class = "sign-up">sign-up</button>  
                    </div>
                    </div>
                    
                <div class = "begged-item">담은 메뉴 {{fooditem}}</div>
                <div class = "view-total">금액 : {{don}}</div>

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
                items : [["불고기",2000],["제육볶음",200],["밥",500],["새우튀김",1000],["김치",300],["단무지",100],["된장국",500]],
                don : 0,
                fooditem : [],
                temp : "",
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
            },
            addMoney(index){
                {
                    console.log(this.items[index][1])
                    this.don += this.items[index][1]
                    this.temp = this.items[index][0]
                    console.log(this.temp)
                    this.fooditem.push(this.temp)
                    
                    console.log(this.fooditem)
                }

            },
            
        },
        
    }
   
     
</script>

<!-- CSS -->
<style lang = "scss">
.sheet{
    background-color: rgb(255,247,225);
.top{
    border :1.5px solid rgb(190,192,194);
   

    .top-title{
        text-align: center ;
        font-size: 50px;
    }

    .top-main{
        border : 1px solid rgb(190,192,194);
        display: flex;
        text-align: left;
        .top-menu{  
            flex :1;
        }
        .top-info{
         
            flex :1;
        }
        .top-info{
         
            flex :1;
        }
    }


}

.middle{
    border : 1px solid rgb(190,192,194);
    display: flex;
    
    .list-view{
    display: inline-block;
      border : 1px solid rgb(190,192,194);

    }
    
    .right-window{
        border :1px solid rgb(190,192,194);
        text-align : center;
        flex : 3;    
      
        
    }
  
   .left-window{
       flex :1;
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
