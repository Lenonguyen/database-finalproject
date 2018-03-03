var arrayGroup;

function getGroup(){
var request = new XMLHttpRequest();
    request.open("GET", "http://localhost:8000/subgroups/", false);
    request.setRequestHeader("Authorization", "Basic " + btoa("admin:password123"));
    request.setRequestHeader("X-CSRFToken", readCookie("csrftoken"));
    request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    request.send();
arrayGroup = JSON.parse(request.responseText);
var display = "<table><tr><th>Code</th><th>Department </th><th>Group id </th><th>Degree Program id </th></tr>";
for(var i=0;i<arrayGroup.length;i++){
    display+="<tr><td>" + arrayGroup[i].code + "</td><td>" + arrayGroup[i].department + "</td><td>"+ arrayGroup[i].groupid +"</td><td>"+ arrayGroup[i].degreeprogramid +"</td></tr>";
}
display+="</table>";
    document.getElementById("temp").innerHTML=display;

}

function postGroup(){
 var Code=document.getElementById("Code");
 var Department=document.getElementById("Department");
 var Gid=document.getElementById("G-id");
 var DPid=document.getElementById("DP-id");
 var jsonData = '{"code":' + JSON.stringify(Code.value)+',"department":' + JSON.stringify(Department.value)+',"groupid":' + JSON.stringify(Gid.value)+',"degreeprogramid":' + JSON.stringify(DPid.value)+ '}' ;
 var request = new XMLHttpRequest();
 console.log(jsonData);
 request.open("POST", "http://localhost:8000/subgroups/", false);
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
