const dummy = require("@iamtherealgd/dummydata");

console.log(dummy.getString());

var list = dummy.getListString(5);
for(var i=0; i<list.length; i++){
	console.log(list[i]);
}
