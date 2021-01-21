import Vue  from 'vue'
import Vuex from  "vuex"
Vue.use(Vuex)
export default new Vuex.Store({
	state:{
		testArr:[
			{id:1,name:"纪念日"}
		],
		
		city:"四川省",
		isDel:''
	},
	// 同步更改值
	mutations:{
		changeValue(state,info){
		  	console.log(info)
			},
		isDel(state,info){
			this.state.isDel = info
			}	
	},
	//异步
	actions:{
		getCity(){
			console.log()
		}
	}
	
})