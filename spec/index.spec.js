const {expect} = require('chai');
const {Piece, Chessboard} = require('../index.js');
const blankBoard = require('../chessData');


describe('#CHESS',() => {
	describe('Piece', () => {
		it ('Piece returns an instance with a currentPosition property', () => {
			const myPiece = new Piece();
			expect(myPiece).to.be.an.instanceOf(Piece);
			expect(myPiece).has.ownProperty('currentPosition');
		});
		it ('currentPosition property returns the current position',() => {
			const myPiece = new Piece('A1');
			expect(myPiece.currentPosition).to.equal('A1');
		});
		describe('advancePosition',() => {
			it ('advances white piece several forwards only on an empty board',() => {
				let newPiece = new Piece('A2','white');
				let actual = newPiece.advancePosition([0, 3]);
				expect(actual).to.equal('A5');
				newPiece = new Piece('C1','white');
				actual = newPiece.advancePosition('C1',[0,5]);
				expect(actual).to.equal('C6');
				newPiece = new Piece('D1','white');
			});
			it('advances position of white piece on a empty board using across and up and down',() => {
				let newPiece = new Piece('C2', 'white');
				let actual = newPiece.advancePosition([1,1]);
				expect(actual).to.equal('B3');
				newPiece = new Piece('C2', 'white');
				actual = newPiece.advancePosition([-1,1]);
				expect(actual).to.equal('D3');
			});
			it ('advances black piece forwards only on an empty board',() => {
				let newPiece = new Piece('C7', 'black');
				let actual = newPiece.advancePosition([0, 3]);
				expect(actual).to.equal('C4');
				newPiece = new Piece('C7', 'black');
				actual = newPiece.advancePosition([0, 5]);
				expect(actual).to.equal('C2');
			});
			it ('advances black piece several spaces forwards on an empty board using up and down',() => {
				let newPiece  = new Piece('C7', 'black');
				let actual = newPiece.advancePosition([1,1]);
				expect(actual).to.equal('D6');
				newPiece = new Piece('C7', 'black');
				actual = newPiece.advancePosition([-1,1]);
				expect(actual).to.equal('B6');
			});
		});
		describe('Chessboard', () => {
			it ('returns an instance of the Chessboard' , () => {
				const newBoard = new Chessboard();
				expect(newBoard).to.be.an.instanceOf(Chessboard);
			});
			it ('assembles a board with no pieces', () => {
				const newBoard = new Chessboard();
				newBoard.createBoard();
				expect(newBoard.board).to.eql(blankBoard);
			});
		});
	});
});