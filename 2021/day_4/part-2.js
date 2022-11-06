const fs = require('fs');
const util = require('util');

const fileRead = fs.readFileSync(__dirname + '/input.txt').toString();
const fileSplit = fileRead.split(/\n\n/).map((item) => item.trim());

const callOuts = fileSplit
  .shift()
  .split(',')
  .map((callOut) => Number(callOut));

const boards = fileSplit
  .map((board) =>
    board.split(/\n/).map((line) =>
      line
        .replace(/  /g, ' ')
        .trim()
        .split(' ')
        .map((space) => {
          return {
            number: Number(space),
            checked: false,
          };
        })
    )
  )
  .map((board) => {
    return {
      grid: board,
      winner: false,
    };
  });

let result = [];

calls: for (let callOut of callOuts) {
  boards: for (let board of boards) {
    if (board.winner) {
      continue;
    }
    for (let line of board.grid) {
      for (let space of line) {
        if (space.number === callOut) {
          space.checked = true;
          for (let line of board.grid) {
            if (line.every((space) => space.checked)) {
              let unchecked = 0;
              for (let line of board.grid) {
                for (let space of line) {
                  if (!space.checked) {
                    unchecked += space.number;
                  }
                }
              }
              board.winner = true;
              result.push(callOut * unchecked);
              continue boards;
            }
          }
          for (let i = 0; i < 5; i++) {
            if (
              [
                board.grid[0],
                board.grid[1],
                board.grid[2],
                board.grid[3],
                board.grid[4],
              ].every((line) => line[i].checked)
            ) {
              let unchecked = 0;
              for (let line of board.grid) {
                for (let space of line) {
                  if (!space.checked) {
                    unchecked += space.number;
                  }
                }
              }
              board.winner = true;
              result.push(callOut * unchecked);
              continue boards;
            }
          }
          continue boards;
        }
      }
    }
  }
}

console.log(result.at(-1));
// console.log(util.inspect(boards[0], false, null, true));
// console.log(callOuts);
