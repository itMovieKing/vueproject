import Vuex from 'vuex'
import Vue from 'vue'
import $http from 'axios'
Vue.use(Vuex)
// var arr=$http.get('/static/index.js').then(res=>{
// 	// console.log(res.data)
// 	return res
// })
// console.log(arr)
var arr
$http({
	method:'get',
	url:'/static/index.js'
}).then(res=>{
	arr=res.data
})
const store=new Vuex.Store({
	state:{
		name:'lily',
		age:50,
		obj:arr
	},
	mutations:{
		showName(state,name){
			state.name=name
		}
	}
})
export default store