requirejs.config({
	paths:{
		jquery:'jquery-3.4.1.min'
	}
})
requirejs(['jquery','validate'],function($,validate){
	console.log(validate.isEqual(3,4))
})