var arrayJob,arrayBook;
function getJob(){
var request = new XMLHttpRequest();
	request.open("GET", "http://localhost:8000/jobs/", false);
	request.setRequestHeader("Authorization", "Basic " + btoa("admin:password123"));
	request.setRequestHeader("X-CSRFToken", readCookie("csrftoken"));
	request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
	request.send();
arrayJob = JSON.parse(request.responseText);
var display = "<table><tr><th>Job</th><th>Company  </th><th>Address</th><th>Id</th></tr>";
for(var i=0;i<arrayJob.length;i++){
    var url = arrayJob[i].url;
    var job = arrayJob[i].name;
    var company = arrayJob[i].company;
    var address = arrayJob[i].address;
    display+="<tr><td>" + arrayJob[i].name + "</td><td>" + arrayJob[i].company + "</td><td>"+ arrayJob[i].address +"</td><td>"+ arrayJob[i].url +"</td></tr>";
}
display+="</table>";
    document.getElementById("tempJob").innerHTML=display;

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
