const data=document.querySelector('.data')
const input=document.querySelector('.inter')
const add=document.querySelector('.add')
const clear=document.querySelector(".clear button")
// set date in the page
const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];



const date = new Date();
const dayNumber = date.getDay();
const dayName = dayNames[dayNumber];
const output=document.querySelector(".output")
const ysra= date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate();
data.innerHTML=`${dayName}<br>${ysra}`;

input.addEventListener("input", function() {
    // Check the value of the input
    if (this.value === "") {
      // Change the color of the element to red
      add.style.background = "#eee";
    } else {
      // Change the color of the element back to its original color
      add.style.background = "#3a86ff";
    }
  });

add.addEventListener('click',()=>{
  let localitems=JSON.parse(localStorage.getItem('localitem'))
  if(localitems === null){
    tasklist=[]
  }else{
    tasklist=localitems
  }
  tasklist.push(input.value)
  localStorage.setItem('localitem',JSON.stringify(tasklist))
  show()
  add.style.background = "#eee";
  input.value=''
})
function show(){
  let sss=''
  let localitems=JSON.parse(localStorage.getItem('localitem'))
  if(localitems === null){
    tasklist=[]
  }else{
    tasklist=localitems
  }
  tasklist.forEach((element) => {
    
    sss +=`<div class="list">
        <input class='check' type="checkbox" name="check" value="">
        <label for="check">${element}</label><button class="delete">X</button>
       </div>`
      
  });
  output.innerHTML=sss
}
show()

clear.addEventListener("click",()=>{
  output.innerHTML=''
  output.innerHTML=` <div class="free">
  <i class="fa-solid fa-wine-glass"></i>
 
  <h2>Time to chill! You have no todos.</h2>
</div>`

localStorage.clear()
})



 

  document.addEventListener('click', function (e) {

    // Delete Task
    if (e.target.className == 'delete') {
  
      // Remove Current Task
      e.target.parentNode.remove();
    localStorage.removeItem('localitem',e.target)
    }
 })

 document.addEventListener('click', function (e) {

 
  if (e.target.className == 'check') {

   e.target.parentNode.style.background='#e7c6ff'

 
  }
})

