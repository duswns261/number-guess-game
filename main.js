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
playButton.addEventListener("click", play)

function pickRandomNum() {
    computerNum = Math.floor(Math.random() * 100)
    console.log("정답" + computerNum)
}

function play() {
    let userValue = userInput.value
    if (userValue < computerNum) {
        resultArea.textContent = "UP!"
        console.log("UP!")
    } else if (userValue > computerNum) {
        resultArea.textContent = "Down!"
        console.log("Down!")
    } else {
        resultArea.textContent = "정답!"
        console.log("정답!")
    }
}

pickRandomNum();