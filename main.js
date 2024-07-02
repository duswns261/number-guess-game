//랜덤 번호 지정
//유저가 번호를 입력하고 go라는 버튼을 누름
//랜덤 번호를 맞추면 맞췄습니다.(Stop)
//랜덤 번호 < 유저 번호 Down 출력
//랜덤 번호 > 유저 번호 Up 출력
//Reset버튼을 누르면 게임이 리셋(랜덤 번호 지정을 다시 하며 유저 숫자 선택 기회 초기화)
//5번의 기회를 다쓰면 게임이 끝남(go 버튼 disable)
//유저가 1~100 범위 밖에 숫자를 입력하면 알려준다. 기회를 깍지 않는다.
//유저가 이미 입력한 숫자를 또 입력하면 알려준다. 기회를 깍지 않는다.

let computerNum = 0
let playButton = document.getElementById("play-button")
let userInput = document.getElementById("user-input")
let resultArea = document.getElementById("result-area")
let resetButton = document.getElementById("reset-button")
let chanceArea = document.getElementById("chance-area")
let historyNum = document.getElementById("history-number")

let chances = 3
let gameOver = false
let history = []

playButton.addEventListener("click", play)
resetButton.addEventListener("click", reset)
userInput.addEventListener("focus", function() {
    userInput.value = "";
})

// 랜덤 숫자를 할당받기 전 로직 및 UI에 사용되는 값들에 대한 초기화
function initialize() {
    chances = 3
    if (playButton.disabled == true){
        playButton.disabled = false
    }

    userInput.value = ""
    resultArea.textContent = "결과값이 여기 나옵니다."

    history = []
    historyNum.textContent = `입력 : [${history}]`
}

function pickRandomNum() {
    initialize()

    computerNum = Math.floor(Math.random() * 100)
    console.log("정답" + computerNum)
    document.getElementById("game-title").textContent = `숫자 맞추기 게임(${computerNum})`
}

function play() {
    let userValue = userInput.value
    
    if (userValue < 1 || userValue > 100) {
        resultArea.textContent = "1과 100 사이 숫자를 입력해 주세요"
        return
    }

    if (history.includes(userValue)) {
        resultArea.textContent = "이미 입력한 숫자입니다. 다른 숫자를 입력해 주세요."
        return
    }

    history.push(userValue)
    historyNum.textContent = `입력 : [${history}]`

    chances--
    chanceArea.textContent = `남은 기회 : ${chances}번`
    console.log("chance", chances)

    if (userValue < computerNum) {
        resultArea.textContent = "UP!"
        console.log("UP!")
    } else if (userValue > computerNum) {
        resultArea.textContent = "Down!"
        console.log("Down!")
    } else {
        resultArea.textContent = "정답!"
        console.log("정답!")
        gameOver = true
    }

    if (chances < 1) {
        gameOver = true
    }

    if (gameOver == true) {
        playButton.disabled = true
    }
}

function reset() {
    pickRandomNum()
}

pickRandomNum();