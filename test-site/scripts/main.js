/*let iceCream = 'chocolate';
if (iceCream === 'chocolate') {
  alert('我最喜欢巧克力冰激淋了。');    
} else {
  alert('但是巧克力才是我的最爱呀……');    
}*/

/*
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName(){
    let myName = prompt('请输入你的名字！')
    if(!myName||myName===null){
        setUserName();
    }
    else{
        localStorage.setItem('name',myName);
        myHeading.textContent = 'Mozilla酷毙了，'+myName;
    }
}
if(!localStorage.getItem('name')){
    setUserName();
}
else{
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla酷毙了，'+storedName;
}
 myButton.onclick = function(){
     setUserName();
 }
 */
 /*let myImage = document.querySelector('img');
myImage.onclick = function(){
   let mySrc = myImage.getAttribute('src');
   if(mySrc==='images/骚狐狸.jpg')
   {
       myImage.setAttribute('src','images/变变变.jpg')
   }
   else
   {
       myImage.setAttribute('src','images/骚狐狸.jpg')
   }
}*/

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName(){
    let myName = prompt('请输入你的名字');
    if(!myName||myName===null){
        setUserName();
    }
    localStorage.setItem('name',myName);
    myHeading.textContent = 'Mozilla酷毙了，'+myName;
}
if(!localStorage.getItem('name')){
    setUserName();
}
else{
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla酷毙了,'+storedName; 
}
myButton.onclick = function(){
    setUserName();
}
let myImage = document.querySelector('img');
myImage.onclick = function(){
    let mysrc = myImage.getAttribute('src');
    if(mysrc==='images/骚狐狸.jpg'){
        myImage.setAttribute('src','images/变变变.jpg')
    }
    else{
        myImage.setAttribute('src','images/骚狐狸.jpg')
    }
}

