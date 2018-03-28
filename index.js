

class Chessboard {


	constructor() {
		this.board = {};
	}

	constructRow () {

		const newRow = {};
		[...Array(8).keys()].forEach(val => {
			newRow[String.fromCharCode(val + 97).toUpperCase()] = null;
		});
		return newRow;
	}

	createBoard () {

		[...Array(8).keys()].forEach(val => {
			this.board[val + 1] = this.constructRow();
		});	
	}

	arrangePieces () {
		
		Object.keys(this.board).forEach(row => {
			if (row === 2) {
				Object.keys(this.board[row]).forEach(letter => {
					this.board[row][letter] = new Pawn(`${letter}${row}`,'white');
				});
			}
			if (row === 7) {
				Object.keys(this.board[row]).forEach(letter => {
					this.board[row][letter]
				});
			}
			this.board[row]
		});
	}
}


class Piece {

	constructor (initialPosition,colour) {
		this.currentPosition = initialPosition;
		this.moveCount = 0;
		this.colour = colour;
	}
	
	advancePosition(position,[letterShift,numberShift]) {
		const [currentLetter, currentNumber] = position.split('');
		let newPosition = +currentNumber + numberShift;
		let newLetter = String.fromCharCode(currentLetter.charCodeAt(0) + letterShift);
		if (/[^A-H]/.test(newLetter) || newPosition > 8 || newPosition < 1) return 'Invalid move!';
		return `${newLetter}${newPosition}`;
	}
}  

class Pawn extends Piece {

	constructor(initialPosition,colour) {
		super(initialPosition,colour);
	}

	checkValidPositions () {
		const currentPosition = this.currentPosition;
		const pawnConfig = [[-1,0],[1,0],[0,1]].map(shiftArr => this.advancePosition(currentPosition,shiftArr));

	}
}




class Queen extends Piece {



}

class King {



}



class Rook extends Piece {


	updateShift(arr) {
		return arr.map(val => {
			if (val === 0) return 0;
			if (val > 0) return ++val;
			if (val < 0) return --val;
		});	
	}	

	checkValidPositions (board, validPositions = [],shiftArr = [[-1,0],[1,0],[0,1],[0,-1]]) {

		const startingPosition = this.currentPosition;
		
		while (shiftArr.length) {
			const currentCheckingShift = shiftArr.shift();
			const shiftedPosition = this.advancePosition(startingPosition,currentCheckingShift);
			if (shiftedPosition === 'Invalid move!') continue; 
			else {
				const [shiftedPositionLetter, shiftedPositionNumber] = shiftedPosition.split('');
				if (board[shiftedPositionNumber][shiftedPositionLetter] === null) {
					validPositions.push(shiftedPosition);
					const newCheckingShift = this.updateShift(currentCheckingShift);
					shiftArr.push(newCheckingShift);
				}
				if (board[shiftedPositionNumber][shiftedPositionLetter] instanceof King) {
					validPositions.push(shiftedPosition);
				}
			}
		}
		return validPositions;
	}
}





class Player {



}


class Game {

	constructor(chessBoard) {

	}
	play () {

	}
	getFirstPlayer() {

	}
}



module.exports = {Piece,Pawn, Chessboard, Rook};