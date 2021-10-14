//object ke json
// let mahasiswa ={
//     nama : "udin",
//     nrp : "24123",
//     email : "udin.ac.id" 
// }
// console.log(JSON.stringify(mahasiswa));

//json ke object/vanila js
// let xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function(){
//     if (xhr.readyState == 4 && xhr.status == 200){
//         let mahasiswa = JSON.parse(this.responseText);
//         console.log(mahasiswa);
//     }
// }
// xhr.open('GET', 'coba.json', true);
// xhr.send();

//dengan jquery
$.getJSON('coba.json', function(data){
    console.log(data);
});
