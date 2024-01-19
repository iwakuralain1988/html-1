let offset = 10;
let width = 128;
let height = 128;
let tiles = [];
let trust = false;
let freeCell = {
    i: 3,
    j: 3
}


function createBoard() {
    for (let i=0; i<4; i++) {
        for (let j=0; j<4; j++) {
            let cell = createCell();
            cell.i = i;
            cell.j = j;
            setCellOffset(cell);
            appendCell(cell);
        }
    }
}

function createTiles() {
    for (let i=0; i<4; i++) {
        for (let j=0; j<4; j++) {
            if (i == 3 && j == 3) {
                return;
            }
            let cell = createCell();
            cell.addClass('board_tile');
            cell.i = i;
            cell.j = j;
            setCellOffset(cell);
            cell.html(j + i * 4 + 1);
            tiles.push(cell);
            appendCell(cell);
        }
    }
}

function clickProcessing() {
    for (let i=0; i<tiles.length; i++) {
        tiles[i].on("click", tileClick);
    }
}

function tileClick(event) { // функция просто скажет можно ли идти
    let target = event.target;
    if ($(target).attr("i") == freeCell.i) {
        for (let i = 0; i < tiles.length; i++) {
            if (tiles[i].i == $(target).attr("i") &&
                tiles[i].j == $(target).attr("j")) {
                    if (testStep(tiles[i].j, freeCell.j)) { // примерно тут говорим куда мув
                        if ($(target).attr("j") > freeCell.j) {
                            tiles[i].j--;
                        } else {
                            tiles[i].j++;
                        }
                        freeCell.i = $(target).attr("i");
                        freeCell.j = $(target).attr("j");
                        setCellOffset(tiles[i]); // и вот тут мы их полностью перестраиваем для ...
                    }
            }
        }
    }
    if ($(target).attr("j") == freeCell.j) {
        for (let i = 0; i < tiles.length; i++) {
            if (tiles[i].i == $(target).attr("i") &&
                tiles[i].j == $(target).attr("j")) {
                    if (testStep(tiles[i].i, freeCell.i)) { // примерно тут говорим куда мув
                        if ($(target).attr("i") > freeCell.i) {
                            tiles[i].i--;
                        } else {
                            tiles[i].i++;
                        }
                        freeCell.i = $(target).attr("i");
                        freeCell.j = $(target).attr("j");
                        setCellOffset(tiles[i]); // и вот тут мы их полностью перестраиваем для ...
                    }
            }
        }
    }
    if (trust) {
        checkVictory();
    }
}


function testStep(a, b) {
    if (a + 1 == b || a - 1 == b) {
        return true;
    } else {
        return false;
    }
}

function createCell() {
    let cell = $("<div></div>");
    cell.addClass('board_cell');
    return cell;
}

function setCellOffset(cell) {
    let left = offset + (width + offset) * cell.j;
    let top = offset + (height + offset) * cell.i;
    cell.css({
        left: left,
        top: top
    });
    cell.attr("i", cell.i);
    cell.attr("j", cell.j);
}

function appendCell(cell) {
    $("#board").append(cell);
}

function shuffleTiles() {
    for (let i = 0; i < 10; i++) {
        tiles[Math.floor(Math.random()*15)].click();
    }
}

function checkVictory() {
    let tiles = $(".board_tile");
    for (let i=0; i<tiles.length; i++) {
        if ($(tiles[i]).html() != Number($(tiles[i]).attr("j")) + Number($(tiles[i]).attr("i")) * 4 + 1) {
            return false;
        }
    }

    $("#modal").css({display: "flex"});
    console.log("Вау, тебе и вправду нечем заняться! Х)")
}

window.onload = function() {
    createBoard();
    createTiles();
    clickProcessing();
    shuffleTiles();
    trust = true;
}