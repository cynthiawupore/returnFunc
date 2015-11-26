var cyn = function(){
	console.log("one")
	return function(){
		console.log("two")
	}
}
var test = cyn() //不能直接执行
cyn()
test()