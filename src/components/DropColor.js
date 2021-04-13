
// function dropColor(){
    
// 	var color = document.getElementById("color");
// 	console.log(color, "hi");
// 	var dropbox = document.getElementById("dropbox");
	
// 	//드래그를 시작할 때 색상 값을 dataTransfer 객체의 데이터로 설정한다.
// 	color.ondragstart = function(e){
// 		e.dataTransfer.setData("text/plain",e.target.value);
// 	}
//     dropbox.ondragover = function(e){
// 		e.preventDefault();
// 	}
	
// 	//요소를 드롭하면 dataTransfer의 데이터로 보더 박스 배경색을 설정한다.
// 	dropbox.ondrop = function(e){
// 		e.preventDefault();//브라우저 기본 동작을 취소한다.(선택사항)
// 		e.target.style.backgroundColor = e.dataTransfer.getData("text/plain");
// 	}
// }