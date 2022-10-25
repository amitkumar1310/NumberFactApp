const form=document.querySelector('form');
const factDiv=document.querySelector('.numfact');
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const number = e.target.querySelector('input[type="number"]').value;
    const type=e.target.querySelector('input[type="text"]').value
 console.log(number,type);
const loadText='Wait a little bit';
factDiv.innerHTML=loadText;
// const baseurl='https://cors-anywhere.herokuapp.com/http://numbersapi.com/';
// fetch(baseurl+number,{
    // method:"GET",
    // headers:{
        // 'x-requested-with':'text/plain'
    // }
    
    const baseurl='https://cors-anywhere.herokuapp.com/http://numbersapi.com/';
    
     fetch(baseurl+number+"/"+type,{
     method:"GET",
     headers:{
        'x-requested-with':'text/plain'
     }}
     )
     .then(response =>response.text())
     .then(text =>factDiv.innerHTML=text);
})