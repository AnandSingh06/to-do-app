let inp=document.querySelector("input");
let btn=document.querySelector("button");
let ul=document.querySelector("ul");
 btn.addEventListener("click",function(){
    let item=document.createElement("li");
    let delbtn=document.createElement("button");
    delbtn.innerText="delete";
    item.innerText=inp.value;
    item.appendChild(delbtn);
    ul.appendChild(item);
    inp.value="";
 });
 ul.addEventListener("click" ,function(event){
     if(event.target.nodeName=="BUTTON"){
      let par=event.target.parentElement;
      par.remove();
     }
 })
//  let delbtns=document.querySelectorAll(".delete");
//  for(delBtn of delb-tns) {
//    delBtn.addEventListener("click",function(){
//        let par = this.parentElement;//delBtn.parentElement;
       
       
//        par.remove();
//    })
//  }