<!-- attribute 를 v 문법에서 쓰고 싶다면 v-bind를 쓴다 그냥 줄여서 쓰면 : 을 쓰면 된다 
 그냥은 {{}}을 써서 접근한다. // 페이스북에서의  -->
<!-- -->
            
<template>
<div class = "sheet">


    <div class = "top">
        
        <div class = "top-title">"MOM"BOX</div>
        <div class = "top-main">
            <div class = "top-menu">메뉴</div>  
            <div class = "top-info">구독 정보</div>
            <div class = "top-infoco" >회사 정보</div>
        </div>
    </div>

    <div class = "middle" >
      
            <div class = "right-window">
                <div>메뉴 리스트</div>
            
            <div class = "list-view" v-for = "(item,index) in items" :key = "index" @click = "addMoney(index)">
                <div>{{item[index,0]}}</div>
                <button>{{item[index,0]}}</button>
                <div>{{item[index,1]}}원</div>
            </div>

            </div>

            
            <div class = "left-window">
               <div class = "platform">로그인
                    <div class = "id-box">
                        <div class = "id-box1" length = 10 >id:</div> 
                        <input  class = "id-box2 " type="text" v-model = "user_id"/>
                        
                    </div>

                     <div class = "password-box">
                        <div>password:</div>
                        <input class = "login-password" type="text" v-model = "user_password"/>
                    </div>

                    <div class = "check-box">
                        <button class = "login" @click = "checkLogin">login</button>
                        <button class = "sign-up " @click = "checkSignup">sign-up</button>  
                    </div>
                    </div>
                    
                <div class = "begged-item">담은 메뉴 </div>
                <div class = "view-item">{{fooditem}}</div>
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
                user_id : "",
                user_password : "",
                useritems : [["username","password"]],
                flag : 0

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
                
                    console.log(this.items[index][1]);
                    this.don += this.items[index][1];
                    this.temp = this.items[index][0];
                    console.log(this.temp);
                    this.fooditem.push(this.temp);
                    console.log(this.fooditem);
                },

            checkLogin(){
               for(var i = 0 ; i <this.useritems.length ; i ++)
               {
                   if (this.useritems[i][0] == this.user_id && this.useritems[i][1] == this.user_password)
                    {
                        this.flag =1;
                        break;
                    }
               }
               if (this.flag == 1){
                   alert("로그인 성공");
                   this.user_id =""
                   this.user_password =""
               }
               else {
                   alert ("로그인 실패")
                    
                    this.user_password =""

               }
            },
            checkSignup(){
                alert("회원가입 성공");
                this.flag = 0;
                this.useritems.push([this.user_id,this.user_password])
                console.log(this.items)
                this.user_id =""
                this.user_password =""
            }
    
            },
            
        }
        
    
    
   
     
</script>

<!-- CSS -->
<style lang = "scss">

.sheet{
    width : 400px;
    height : 400px;
    
    background-color: rgb(255,247,225);
    display : flex;
    flex-direction: column;
.top{
   border :1.5px solid rgb(190,192,194);
  

    .top-title{
        text-align: center ;
        font-size: 50px;
    }

    .top-main{
        border : 1px solid rgb(190,192,194);
        display: flex;
        text-align: center;
        .top-menu{  
             border : 1px solid rgb(190,192,194);
            flex :1;
        }
        .top-info{
          border : 1px solid rgb(190,192,194);
            flex :1;
        }
        .top-infoco{
          border : 1px solid rgb(190,192,194);
          flex :1;
        }
    }


}

.middle{
    flex : 1;
    border : 1px solid rgb(190,192,194);
    display: flex;
    

    .list-view{
        
     display: inline-block;
      border : 1px solid rgb(190,192,194);
    

    }
    
    .right-window{
        overflow-y: scroll;
        border :1px solid rgb(190,192,194);
        text-align : center;
        flex : 3;    
    }
  
   .left-window{
       display : inline-block;
       flex :1;
       border : 1px solid rgb(190,192,194);
       display : flex;
       flex-direction: column;
       
        .platform{
             border : 1px solid rgb(190,192,194);
              text-align: center;
           .id-box{
               text-align: center;
               display:flex;
               .id-box2{
                   input-align :center;
               }
               
           }
            .password-box{
                text-align: center;
                display:flex;
            }
        }

        .begged-item{
            
            border : 1px solid rgb(190,192,194);
           
        }
        .view-item{
            flex :1;
            border : 1px solid rgb(190,192,194);
             overflow-y: scroll;
        }
        .view-total{
            display : table-cell; 
            align-items: flex-end;
           
            
            border : 1px solid rgb(190,192,194);
           
        }
   }

  
   }
}


 


</style>
