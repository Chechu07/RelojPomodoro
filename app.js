let body = document.querySelector('body')

let Work = document.getElementById('work')
let Break = document.getElementById('break')

let timeWork = 25
let timeBreak = 5

let isBreak = false

let seconds = '00'

let black='100'
let purple='100'

window.onload = () => {
    document.getElementById('minutes').innerHTML = timeWork
    document.getElementById('seconds').innerHTML = seconds
}

let timerInterval;

function start(){
    document.getElementById('start').style.width = 0

    seconds = 59

    let minutesWork = timeWork - 1 
    let minutesBreak = timeBreak - 1
    let progress = 0

    let time = () => {
        document.getElementById('minutes').innerHTML = minutesWork
        document.getElementById('seconds').innerHTML = seconds

        seconds -= 1 // 
        if(seconds === 0){
            seconds = 59
            minutesWork -= 1 
            if(minutesWork === -1){
                if(isBreak == false){
                    isBreak = true
                    minutesWork = minutesBreak

                    black=0
                    purple=0

                    Work.classList.add('then')
                         Work.classList.remove('now')
                         Break.classList.add('now')
                         Break.classList.remove('then')
                         progress = 0
                } else{
                    isBreak = false
                    minutesWork = timeWork - 1

                    black = 100
                    purple =100

                    Work.classList.remove('then')
                    Work.classList.add('now')
                    Break.classList.remove('now')
                    Break.classList.remove('then')
                    progress = 0

                }
            }
        }
        if(isBreak == false){
            black -= (100 / 737)
        }else{
            purple += (100 / 147)
        }

        progress += 1;
        let r = isBreak ? 3 + progress : 10 + progress;
        let g = isBreak ? 104 + progress : 2 + progress;
        let b = isBreak ? 151 : 48 + progress;
        body.style.background = `linear-gradient(45deg, rgb(${r}, ${g}, ${b}) 0%, rgb(${b}, ${r}, ${g}) 100%)`;
    }
    if(timerInterval) clearInterval(timerInterval)
     timerInterval = setInterval(time, 1000) 
}