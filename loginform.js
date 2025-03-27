//username="yabeshlivin";
//password="1234";
document.getElementById('butt').addEventListener('click',function(event){
//function yabu(event){
    event.preventDefault();
    //console.log(yabu());
    
    
var uname=document.getElementsByClassName('typeuname')[0].value
var pswd=document.getElementsByClassName('typeunamepswd')[0].value
const username='yabeshlivin'
const password='1234'
var red1=document.getElementsByClassName('ifwronguname')[0]
var red2=document.getElementsByClassName('ifwrongpswd')[0]


if(uname!==username){
    red1.innerHTML='incorrect username'
    console.log('incorrect username');
    
}
if(pswd!==password){
red2.innerHTML='incorrect password';
} 
if(pswd==password && uname==username){
    alert("login successfully")
}

}
);
document.getElementsByClassName("typeuname")[0].addEventListener('click',function(event){
    this.value=""
    document.getElementsByClassName('ifwronguname')[0].innerHTML=""
    
});
document.getElementsByClassName("typeunamepswd")[0].addEventListener('click',function(event){
    this.value=""
    document.getElementsByClassName('ifwrongpswd')[0].innerHTML=""
});
