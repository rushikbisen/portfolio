console.log("run js")
document.querySelector('.cross').style.display='none';
document.querySelector('.hamburger').addEventListener("click",()=>{
    document.querySelector('.constant').classList.toggle('constantgo');
    if(document.querySelector('.constant').classList.contains('constantgo')){
        setTimeout(()=>{
            document.querySelector('.ham').style.display='inline'
        },300)

        document.querySelector('.cross').style.display='none'
    }
    else{
        document.querySelector('.ham').style.display ='none'
        setTimeout(()=>{
            document.querySelector('.cross').style.display='inline'
        },300);
    }

})