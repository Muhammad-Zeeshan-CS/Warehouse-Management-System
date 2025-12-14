let uparr=document.querySelector("#uparr");
let downarr=document.querySelector("#downarr");
let bottomsec=document.querySelector("#bottomsection")
let buton=document.querySelector("#addbtn");

uparr.addEventListener("click",function(){
    uparr.style.display="none";
    downarr.style.display="unset";
    bottomsec.style.bottom="10px";
})

downarr.addEventListener("click",function(){
    downarr.style.display="none"
    uparr.style.display="unset";
    bottomsec.style.bottom="-65px";
})

//adding card
let button=document.querySelector("#addbtn");
let cardsection=document.querySelector("#cardsection");


button.addEventListener("click",function(){
    ///
    let div=document.createElement("div");
    div.classList.add("cards");
    cardsection.appendChild(div);
    ///
    let img=document.createElement("img");
    img.classList.add("itempic");
    div.appendChild(img);
    ///
    div2=document.createElement("div");
    div2.classList.add("cardinfo");
    div.appendChild(div2);
    ///
    let form=document.createElement("form");
    form.classList.add("cardsell");
    div.appendChild(form);
    ///
    let p1=document.createElement("p");
    p1.classList.add("itemname");
    p1.classList.add("aligncenter");
    div2.appendChild(p1);
    ///
    let p2=document.createElement("p");
    p2.classList.add("itemprice");
    p2.classList.add("aligncenter");
    div2.appendChild(p2);
    ///
    let p4=document.createElement("p");
    p4.classList.add("itemdiscount");
    p4.classList.add("aligncenter");
    div2.appendChild(p4);
    /// 
    let p3=document.createElement("p");
    p3.classList.add("remainingitems");
    p3.classList.add("aligncenter");
    div2.appendChild(p3);
    ///

    let button=document.createElement("button");
    button.classList.add("btnstyle");
    button.classList.add("cardsellb");
    button.innerHTML="Sell";
    form.appendChild(button);

})