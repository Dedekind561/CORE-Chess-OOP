# OOP-Chess #

* In this sprint you are going to be creating classes that will represent various aspects of a chess game.  Starting with the pieces and building it up from there you need to think carefully about all the different properties and methods each component in the game will need.  You should bare this in mind as you are building up your test-suite.

* NOTE : Any white pieces will always start in the top two rows : in rows 1 and 2.
* NOTE : Any black pieces will always start in the bottom two rows : in rows 7 and 8.


### Piece class ###


* Create a `Piece` class that returns an object representing a piece.
It should have the following properties :

```js 
const piece = new Piece('A1','white');
piece.currentPosition; // return the string 'A1';
piece.colour; // should return "white" in this case

```


### Pawn class ###


* Create a `Pawn` class that returns an object representing a single pawn object.
It should have all the properties of the `Piece` class - think about how you can achieve this using classes!


It should have the following properties :-

```js 

const pawn = new Pawn('A1');
pawn.currentPosition; // will return the current position 'A1' in this example
pawn.availablePositions() // will return an array of all available positions ['A2',...] etc
pawn.isFirstMove // will return false if it isn't the first move true otherwise

```

### Knight class ###


```js 

const knight = new Knight('B1');
knight.currentPosition;
knight.availableMoves();

```

* And so-on until you have a `King`, `Queen`, `Bishop` and a `Rook` class.


### Chess-board ###


* Create a `Chessboard` class that returns an object that creates a chessboard 

It should have the following properties:

```js 

const myBoard = new Chessboard();

myBoard.board  // will intially be an empty array
myBoard.constructRow() // will create an object representing one row  { A : null, B : null , ...};
myBoard.setupBoard() // will mutate the board property creating a chess-board
    
		// creates a board with 8 rows
		// should return  { 1 : { A : null, B : null, C : null , ...
		//							    2 : { A : null, B : null,  C : null, ... ,
		//                  	
		//								 }

```

### Player ###


* Create a `Player` class that returns an object with the following properties:

```js 

const mitch = new Player();
mitch.isCurrentTurn // returns true
mitch.getAvailablePieces(); // returns an array of all the pieces that can be moved



```
