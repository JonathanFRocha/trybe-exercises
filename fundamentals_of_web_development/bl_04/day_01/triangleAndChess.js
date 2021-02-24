//Triangle angles
const angle1 = 0;
const angle2 = 90;
const angle3 = 90;

// class to do checks on triangle
class myTriangle {
  isTriangle(a, b, c) {
    if (a === 0 || b === 0 || c === 0) {
      return false;
    }

    return a + b + c === 180;
  }
}

const triangle = new myTriangle();
console.log(`é um triangulo? ${triangle.isTriangle(angle1, angle2, angle3)}`);

const piece = "Queen";

class chessPiece {
  myPieceMoveIn(piece) {
    const lowerCasePiece = piece.toLowerCase();
    switch (lowerCasePiece) {
      case "bishop":
        return "diagonals.";
      case "king":
        return "one square in any direction.";
      case "queen":
        return "all directions, any number of squares.";
      case "rook":
        return "horizontally or vertically, any number of squares.";
      case "knight":
        return "L Shape, two squares horizontal or vertical then one vertical or horizontal.";
      case "pawn":
        return "vertically foward one square, may move two squares if has not moved yet.";
      default:
        return "thats not a piece of chess!";
    }
  }
}

const myPiece = new chessPiece();

console.log(`minha peça de xadres se move em: ${myPiece.myPieceMoveIn(piece)}`);
