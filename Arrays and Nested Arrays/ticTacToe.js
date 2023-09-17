function solve(moves) {

    let board = [[false, false, false],
    [false, false, false],
    [false, false, false]];

    for (let i = 0; i < moves.length; i++) {
        let currentCommand = moves[i];
        let [a, b] = currentCommand.split(' ');
        a = Number(a);
        b = Number(b);

        if (board[a][b] === false) {
            board[a].splice(a, 1, `X`)
        }else{
            console.log("This place is already taken. Please choose another!");
        }
    }

    console.table(board);
}
solve(["0 0",
    "0 0",
    "1 1",
    "0 1",
    "1 2",
    "0 2",
    "2 2",
    "1 2",
    "2 2",
    "2 1"])