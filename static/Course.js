var arrayCourse;
function getCourse(){
var request = new XMLHttpRequest();
	request.open("GET", "http://localhost:8000/courses/", false);
	request.setRequestHeader("Authorization", "Basic " + btoa("admin:password123"));
	request.setRequestHeader("X-CSRFToken", readCookie("csrftoken"));
	request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
	request.send();
arrayCourse = JSON.parse(request.responseText);
var display = "<table><tr><th>Code</th><th>Course </th><th>Changes</th><th>Language </th></th><th>Credit </th></th><th>Amount </th></th><th>P1 </th></th><th>P2 </th></th><th>P3 </th></th><th>P4 </th></th><th>P5 </th></th><th>Total </th></th><th>Curriculum Id </th></tr>";
for(var i=0;i<arrayCourse.length;i++){
    display+="<tr><td>" + arrayCourse[i].code + "</td><td>" + arrayCourse[i].name + "</td><td>"+ arrayCourse[i].changes +"</td><td>" + arrayCourse[i].languages +"</td><td>"+ arrayCourse[i].credit +"</td><td>"+ arrayCourse[i].amount +"</td><td>"+ arrayCourse[i].p1 +"</td><td>"+ arrayCourse[i].p2 +"</td><td>"+ arrayCourse[i].p3 +"</td><td>"+ arrayCourse[i].p4 +"</td><td>"+ arrayCourse[i].p5 +"</td><td>"+ arrayCourse[i].total +"</td><td>"+ arrayCourse[i].curriculumid +/*"</td><td>"+ arrayJob[i].url +"*/"</td></tr>";
}
display+="</table>";
    document.getElementById("temp").innerHTML=display;

}

function postCourse(){
 var Code=document.getElementById("Code");
 var Name=document.getElementById("Name");
 var Changes=document.getElementById("Changes");
 var Language=document.getElementById("Languages");
 var Credit=document.getElementById("Credit");
 var Amount=document.getElementById("Amount");
 var Total=document.getElementById("Total");
 var Curriculumid=document.getElementById("Curriculumid");
 var p1=document.getElementById("p1");
 var p2=document.getElementById("p2");
 var p3=document.getElementById("p3");
 var p4=document.getElementById("p4");
 var p5=document.getElementById("p5");
 var jsonData = '{"code":' + JSON.stringify(Code.value)+',"name":' + JSON.stringify(Name.value)+',"changes":' + JSON.stringify(Changes.value)+',"languages":' + JSON.stringify(Language.value)+',"credit":' + JSON.stringify(Credit.value)+',"amount":' + JSON.stringify(Amount.value)+',"p1":' + JSON.stringify(p1.value)+',"p2":' + JSON.stringify(p2.value)+',"p3":' + JSON.stringify(p3.value)+',"p4":' + JSON.stringify(p4.value)+',"p5":' + JSON.stringify(p5.value)+',"total":' + JSON.stringify(Total.value)+',"curriculumid":'+JSON.stringify(Curriculumid.value) + '}' ;
 var request = new XMLHttpRequest();
 console.log(jsonData);
 request.open("POST", "http://localhost:8000/courses/", false);
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
