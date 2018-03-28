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
			it('advances position of white piece on a empty board',() => {
				let newPiece  = new Piece('D1','white');
				let actual = newPiece.advancePosition([1,1]);
				expect(actual).to.equal('B3');
				newPiece  = new Piece('C1');
				actual = newPiece.advancePosition('C1',[5,0]);
				expect(actual).to.equal('H1');
			});
			it ('advances position of black piece on an empty board',() => {
				const newPiece  = new Piece('C7', 'black');
				const actual = newPiece.advancePosition([1,1]);
				expect(actual).to.equal('D6');
			});
			it ('advances white piece several spaces forwards on an empty board',() => {
				const newPiece  = new Piece('A2','white');
				const actual = newPiece.advancePosition([0, 3]);
				expect(actual).to.equal('A5');
			});
			it ('advances black piece several spaces forwards on an empty board',() => {
				const newPiece  = new Piece('A7','black');
				const actual = newPiece.advancePosition([0, 3]);
				expect(actual).to.equal('A4');
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