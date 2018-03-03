var arrayTeacher;

function getTeacher(){
var request = new XMLHttpRequest();
    request.open("GET", "http://localhost:8000/teachers/", false);
    request.setRequestHeader("Authorization", "Basic " + btoa("admin:password123"));
    request.setRequestHeader("X-CSRFToken", readCookie("csrftoken"));
    request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    request.send();
arrayTeacher = JSON.parse(request.responseText);
var display = "<table><tr><th>Code</th><th>Name </th></tr>";
for(var i=0;i<arrayTeacher.length;i++){
    display+="<tr><td>" + arrayTeacher[i].code + "</td><td>" + arrayTeacher[i].name + "</td></tr>";
}
display+="</table>";
    document.getElementById("temp").innerHTML=display;

}

function postTeacher(){
 var Code=document.getElementById("Code");
 var Name=document.getElementById("Name");
 var jsonData = '{"code":' + JSON.stringify(Code.value)+',"name":' + JSON.stringify(Name.value)+'}' ;
 var request = new XMLHttpRequest();
 console.log(jsonData);
 request.open("POST", "http://localhost:8000/teachers/", false);
 request.setRequestHeader("Authorization", "Basic " + btoa("admin:password123"));
 request.setRequestHeader("X-CSRFToken", readCookie("csrftoken"));
 request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
 request.send(jsonData); 
 var array = JSON.parse(request.responseText);
 console.log(array);
 jsonData="";
}

//Read cookie for csrftoken
function readCookie(name) {
	var nameEQ = encodeURIComponent(name) + "=";
	var ca = document.cookie.split(';');
	for (var i = 0; i < ca.length; i++) {
	var c = ca[i];
	while (c.charAt(0) === ' ') c = c.substring(1, c.length);
		if (c.indexOf(nameEQ) === 0) return decodeURIComponent(c.substring(nameEQ.length, c.length));
	}
	return null;
}
