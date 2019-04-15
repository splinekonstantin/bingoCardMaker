var arr = [];

var nl = document.getElementsByTagName("td");
for (let i = 0; i < nl.length; i++) {
   
    arr.push(nl[i].textContent);
    
}
 
const shuffled = arr.sort(() => 0.5 - Math.random());

for (let i = 0; i < nl.length; i++) {
     nl[i].textContent = shuffled[i];
    
}