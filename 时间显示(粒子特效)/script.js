let clocks = document.getElementsByClassName("clock")
let ctx = []
let timeStr = ""
let particleArray = []
let colors = ["#1e90ff", "#1e90ff", "#2ed573", "#2ed573", "#ffa502", "#ffa502"]
let fonts = []

function init() {
    for (let i = 0; i < clocks.length; i++) {
        clocks[i].width = 250
        clocks[i].height = 400
        ctx[i] = clocks[i].getContext("2d")
        ctx[i].fillStyle = colors[i]
        particleArray.push([])
    }
    for (let i = 0; i < 10; i++) {
        ctx[0].font = "40px Arial"
        let width = ctx[0].measureText(i).width | 0
        ctx[0].fillText(i, 0, 40)
        let data = ctx[0].getImageData(0, 0, width, 40).data
        let len = data.length
        let tData = []
        for (let j = 0; j < len / 4; j++) {
            if (data[j * 4 + 3] !== 0) {
                let x = j % width | 0
                let y = j / width | 0
                tData.push([x, y])
            }
        }
        fonts.push(tData)
        ctx[0].clearRect(0, 0, 40, 40)
    }
}

function timeString() {
    let d = new Date()
    return ("0" + d.getHours()).slice(-2) + ("0" + d.getMinutes()).slice(-2) + ("0" + d.getSeconds()).slice(-2)
}

init()
console.log(fonts)

class particle {
    constructor(x, y) {
        this.x = Math.random() * 25 - 2.5
        this.y = Math.random() * 40 + 5
        this.ex = x
        this.ey = y
    }

    update() {
        this.x -= (this.x - this.ex) / 10
        this.y -= (this.y - this.ey) / 10
    }

    draw(i) {
        ctx[i].fillStyle = colors[i]
        ctx[i].beginPath()
        ctx[i].arc(this.x * 10 + 25, this.y * 10 - 50, 2, 0, Math.PI * 180, 0)
        ctx[i].fill()
    }
}

function change(ind, pi) {
    let newCount = fonts[ind].length - particleArray[pi].length
    if (newCount >= 0) {
        for (let i = 0; i < newCount; i++) {
            particleArray[pi].push(new particle(10, 20))
        }
    }
    if (newCount < 0) {
        particleArray[pi].splice(0, -newCount)
    }
    for (let i = 0; i < fonts[ind].length; i++) {
        particleArray[pi][i].ex = fonts[ind][i][0]
        particleArray[pi][i].ey = fonts[ind][i][1]
    }
    particleArray[pi].sort(function (a, b) {
        return Math.random() - 0.5
    })
}

function draw() {
    let timer = timeString()
    for (let i = 0; i < timer.length; i++) {
        if (timer.charAt(i) !== timeStr.charAt(i)) {
            change(timer.charAt(i), i)

        }
    }
    timeStr = timer
    for (let i = 0; i < clocks.length; i++) {
        ctx[i].fillStyle = "rgba(0,0,0,0.1)"
        ctx[i].fillRect(0, 0, 250, 400)
        for (let j = 0; j < particleArray[i].length; j++) {
            p = particleArray[i][j]
            p.update()
            p.draw(i)
        }
    }
}

setInterval(draw, 20)