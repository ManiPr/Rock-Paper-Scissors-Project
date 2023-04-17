const optionImagesElem=document.querySelectorAll('.option_image')
const resultElem=document.querySelector('.result')
const cpuResultElem=document.querySelector('.cpu_result')
const userResultElem=document.querySelector('.user_result')
const containerElem=document.querySelector('.container')
const cpuResultImage=document.querySelector('.cpu-result__image')
const userResultImage=document.querySelector('.user-result__image')
let cpuArray=['R','P','S']
let outcomes = {
    RR: "Draw",
    RP: "Cpu",
    RS: "User",
    PP: "Draw",
    PR: "User",
    PS: "Cpu",
    SS: "Draw",
    SR: "Cpu",
    SP: "User",
  };


const winList=(user)=>{
    let userValue=user.dataset.type
    let randomArray=Math.floor(Math.random() * cpuArray.length) 
    cputHand=cpuArray[randomArray]
    let winner=outcomes[userValue+cputHand]
    setTimeout(() => {
        resultElem.innerHTML=`${winner}`

        let cpuImage=getImage(cputHand)
        cpuResultImage.setAttribute("src", `${cpuImage}`);
        cpuResultElem.style.animation='Null'

        let userImage=getImage(userValue)
        userResultImage.setAttribute("src", `${userImage}`);
        userResultElem.style.animation='Null'

        containerElem.classList.remove('start')
        user.classList.remove('active')
    }, 3000);
} 
const getImage=(userimage)=>{
    if(userimage==='R'){
        return 'images/rock.png'
    }
    else if(userimage==='P'){
        return 'images/paper.png'
    }
    else if(userimage==='S'){
        return 'images/scissors.png'
    }
}
optionImagesElem.forEach(optionImage=>{
    optionImage.addEventListener('click',(event)=>{
        cpuResultElem.style.animation='cpuShake 0.7s ease infinite'
        userResultElem.style.animation='userShake 0.7s ease infinite'
        resultElem.innerHTML='Wait'
        event.target.classList.add('active')
        containerElem.classList.add('start')
        winList(event.target)
    })
})
