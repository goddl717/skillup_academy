import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    //데이터처럼 쓰이는 거고
    state(){
        return{
            items:[],
        }
    },
    //데이터를 변경 전역변수는 mutation을 통하여만 접글할수 있따.
    mutations :{
        //첫 인자로 state를 받는다.
        addItem(state,itemName){
           state.items.push(itemName) 
        },

        deleteItem(state, itemIndex){
            state.items.splice(itemIndex,1)    
        }
    },
    //action이 mutation을 불러온다.

    actions:{},

})

