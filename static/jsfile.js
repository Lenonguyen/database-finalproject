var arrayCourser;

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

function postJob(){
 var jobName=document.getElementById("Job");
 var jobCompany=document.getElementById("Company");
 var jobAddress=document.getElementById("Address");
 var jid=document.getElementById("j-id");
 var jsonData = '{"name":' + JSON.stringify(jobName.value)+',"company":' + JSON.stringify(jobCompany.value)+',"address":'+JSON.stringify(jobAddress.value) + '}' ;
 var request = new XMLHttpRequest();
 console.log(jsonData);
 request.open("POST", "http://localhost:8000/jobs/", false);
 request.setRequestHeader("Authorization", "Basic " + btoa("admin:password123"));
 request.setRequestHeader("X-CSRFToken", readCookie("csrftoken"));
 request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
 request.send(jsonData); 
 var array = JSON.parse(request.responseText);
 console.log(array);
 jsonData="";
}

function deleleJob(){
 var jid=document.getElementById("j-id");
 var jsonData = '{"id":' + JSON.stringify(jid.value) + '}';
 var url = "http://localhost:8000/jobs/" + jid.value;
 var request = new XMLHttpRequest();
 request.open("DELETE", url , false);
 request.setRequestHeader("Authorization", "Basic " + btoa("admin:password123"));
 request.setRequestHeader("X-CSRFToken", readCookie("csrftoken"));
 request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
 request.send(jsonData); 
 jsonData="";
}
function putJob(){
 var jobName=document.getElementById("Job");
 var jobCompany=document.getElementById("Company");
 var jobAddress=document.getElementById("Address");
 var jid=document.getElementById("j-id");
 var jsonData = '{"name":' + JSON.stringify(jobName.value)+',"company":' + JSON.stringify(jobCompany.value)+',"address":'+JSON.stringify(jobAddress.value) + '}' ;
 var gid=document.getElementByID("j-id");
 var request = new XMLHttpRequest();
 var url="http://localhost:8000/jobs/" +jid.value+"/";
 request.open("PUT", url, false);
 request.setRequestHeader("Authorization", "Basic " + btoa("admin:password123"));
 request.setRequestHeader("X-CSRFToken", readCookie("csrftoken"));
 request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
 request.send(jsonData);
}
function getBook(){
var request = new XMLHttpRequest();
request.open("GET", "http://localhost:8000/books/", false);
request.setRequestHeader("Authorization", "Basic " + btoa("admin:password123"));
request.setRequestHeader("X-CSRFToken", readCookie("csrftoken"));
request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
request.send();
arrayBook = JSON.parse(request.responseText);
var display = "<table><tr><th>Title</th><th>Author</th><th>Id</th></tr>";
for(var i=0;i<arrayBook.length;i++){
    var url = arrayBook[i].url;
    var title = arrayBook[i].title;
    var author = arrayBook[i].author;
    display+="<tr><td>" + arrayBook[i].title + "</td><td>" + arrayBook[i].author + "</td><td>"+ arrayBook[i].url +"</td></tr>";
}
display+="</table>";
document.getElementById("tempBook").innerHTML=display;

}
function postBook(){
 var bookTitle=document.getElementById("Title");
 var bookAuthor=document.getElementById("Author");
 var gid=document.getElementById("b-id");
 var jsonData = '{"title":' + JSON.stringify(bookTitle.value)+',"author":' + JSON.stringify(bookAuthor.value)+ '}' ;
 var request = new XMLHttpRequest();
 console.log(jsonData);
 request.open("POST", "http://localhost:8000/books/", false);
 request.setRequestHeader("Authorization", "Basic " + btoa("admin:password123"));
 request.setRequestHeader("X-CSRFToken", readCookie("csrftoken"));
 request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
 request.send(jsonData); 
 var array = JSON.parse(request.responseText);
 console.log(array);
 jsonData="";
}

function deleleBook(){
 var bid=document.getElementById("b-id");
 var jsonData = '{"id":' + JSON.stringify(bid.value) + '}';
 var url = "http://localhost:8000/books/" + bid.value;
 var request = new XMLHttpRequest();
 request.open("DELETE", url , false);
 request.setRequestHeader("Authorization", "Basic " + btoa("admin:password123"));
 request.setRequestHeader("X-CSRFToken", readCookie("csrftoken"));
 request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
 request.send(jsonData); 
 jsonData="";
}
function putBook(){
 var bookTitle=document.getElementById("Title");
 var bookAuthor=document.getElementById("Author");
 var bid=document.getElementById("b-id");
 var jsonData = '{"title":' + JSON.stringify(bookTitle.value)+',"author":' + JSON.stringify(bookAuthor.value)+ '}' ;
 var request = new XMLHttpRequest();
 var url="http://localhost:8000/books/" +bid.value+"/";
 request.open("PUT", url, false);
 request.setRequestHeader("Authorization", "Basic " + btoa("admin:password123"));
 request.setRequestHeader("X-CSRFToken", readCookie("csrftoken"));
 request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
 request.send(jsonData);
}
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
