module.exports = {
	"getString": getString,
	"getListString":getListString
};

var strings = [
            "Lorem Ipsum is simply dummy text",
            "Phasellus nisi elit, hendrerit feugiat nisi",
            "Suspendisse libero leo, faucibus et",
            "Proin eget mi eu magna imperdiet ultrices.",
            "Nulla facilisi. Morbi ultrices nulla",
            "In ex erat, tincidunt at lacus vitae",
            "Curabitur tincidunt, sem vel lacinia",
            "Vestibulum ante ipsum primis in"
];

function getString(){
	var min = 0;
	var max = 7;
	var random = Math.floor(Math.random() * (max - min + 1) ) + min;
	return strings[random];
};

function getListString(listSize){
	var list = [];
	for(var i=0; i<listSize; i++){
		list.push(getString());
	}
	return list;
}
