'use strict'


var gSize
var gBoard 
var gNums
var clickCounter = 1


function chooseLevel(elBtn) {
    if (elBtn.name === 'easy') {
        // gNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
        gSize = 4
    }
    if (elBtn.name === 'medium') {
        // gNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]
        gSize = 5
    }
    if (elBtn.name === 'hard') {
        // gNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36]
        gSize = 6
    }
    gNums = [];
    var len = gSize**2;
    for (var i = 1; i <= len; i++) {
        gNums.push(i);
    }
    
    init()
}

function init() {
    clickCounter = 1
    // gBoard = createBoard(gSize)
    // var playBoard = (boardGame(gBoard))
    var playBoard = createBoard();
    renderBoard(playBoard)

}

function renderBoard(board) {


    var htmlStr = ''
    for (var i = 0; i < board.length; i++) {
        htmlStr += '<tr>'
        var row = board[i]
        for (var j = 0; j < board[0].length; j++) {
            var cell = row[j]
            htmlStr += '<td onclick=cellClicked(this) id="' + cell + '">' + cell + '</td>'
        }
        htmlStr += '</tr>'
    }
    var elTabel = document.querySelector('.table')
    elTabel.innerHTML = htmlStr
}

function cellClicked(elClickedNum) {
    if (+elClickedNum.innerText === clickCounter) {
        elClickedNum.style.backgroundColor = 'white';
        clickCounter++;

        if (+elClickedNum.innerText === gNums.length) {
            alert('victory')
            clickCounter = 1
            init()
        }
    }
    // if (+elClickedNum.innerText === gNums.length && clickCounter>=(gNums.length) ) {
    //     alert('victory')
    //     clickCounter = 1
    //     init()
    // }
}

// function createBoard(size=4) {

//     var board = [];
//     for (var i = 0; i < size; i++) {
//         board[i] = [];
//         for (var j = 0; j < size; j++) {
//             board[i][j] = ' '
//         }
//     }

//     return board;
// }

// function boardGame(board) {
//     var copyNums = gNums.slice()
//     for (var i = 0; i < board.length; i++) {
//         for (var j = 0; j < board[0].length; j++) {
//             board[i][j] = +copyNums.splice(getRandomIntInclusive(0, copyNums.length - 1), 1)
//         }
//     }
//     return board

// }
function createBoard() {
    var board = [];
    var copyNums = gNums.slice()
    for (var i = 0; i < gSize; i++) {
        board[i] = [];
        for (var j = 0; j < gSize; j++) {
            board[i][j] = +copyNums.splice(getRandomIntInclusive(0, copyNums.length - 1), 1)
        }
    }
    return board

}



function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive 
}

