function showPic(whichpic){
	var source = whichpic.getAttribute("href");
	var placeholder = document.getElementById("placeholder");
	placeholder.setAttribute("src", source);
	var text = whichpic.getAttribute("title");
	//alert(whichpic.title);
	var description = document.getElementById("description");
	description.childNodes[0].nodeValue = text;
	return true;
}

function countBodyChildren(){
	var body_element = document.getElementsByTagName("body")[0];
	//alert(body_element.childNodes.length);
	//alert(body_element.nodeType);
}

function prepareLinks(){
	var links = document.getElementsByTagName("a");
	for(var i=0; i<links.length; i++){
		links[i].onclick = function() {
			popUp(this);
			return false;
		}
	}
}

function prepareLinks2(){
	var links = document.getElementsByTagName("a");
	for(var i=0; i<links.length; i++){
		links[i].onclick = function() {
			return showPic(this) ? false : true
		}
	}
}


function popUp(winURL) {
	window.open(winURL, "popup", "width=320,height=480")
}

//window.onload = prepareLinks;
window.onload=prepareLinks2;

