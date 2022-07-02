import { data } from './data.js';

const callOuts = `93,35,66,15,6,51,49,67,16,77,80,8,1,57,99,92,14,9,13,23,33,11,43,50,60,96,40,25,22,39,56,18,2,7,34,68,26,90,75,41,4,95,71,30,42,5,46,55,27,98,79,12,65,73,29,28,17,48,81,32,59,63,85,91,52,21,38,31,61,83,97,62,44,70,19,69,36,47,74,58,78,24,72,0,10,88,37,87,3,45,82,76,54,84,20,94,86,53,64,89`;
const callOutsArray = callOuts.split(',');

const boards = data.split(/\r?\n\r?\n/);

let objectBoards = [];

let boardsMap = boards.map((board) =>
  board.trim().replace(/\n/g, ' ').replace(/  +/g, ' ').split(' ')
);

boardsMap.forEach((board) => {
  objectBoards.push(
    board.map((num, index) => {
      return {
        number: num,
        row: Math.floor(index / 5),
        column: index % 5,
        checked: false,
      };
    })
  );
});

callOutsArray.forEach((callOut) => {
  objectBoards.forEach((board) => {
    board.forEach((square) => {
      if (square.number === callOut) square.checked;
    });
  });
});

console.log(boardsMap[0]);
