
function hide(){
    let btn=document.querySelector('.inserttext')
    let inpVal=document.getElementById('email')
    console.log(inpVal.value);

    if(inpVal.value ===''){
        btn.style.visibility='visible'
    }
}
 
function barHide(){
    let nav=document.querySelector('.nav-mini').classList.toggle('hide')
    document.body.style.background='#dedede'
    document.querySelector('.close').style.visibility='visible'
    document.querySelector('.bar').style.visibility='hidden'
}
function barVisible(){
    let nav=document.querySelector('.nav-mini').classList.toggle('hide')
    document.body.style.background='white'
    document.querySelector('.close').style.visibility='hidden'
    document.querySelector('.bar').style.visibility='visible'
}