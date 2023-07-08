<<<<<<< HEAD
import MemoryGame from "."

function GameOne() {
  return (
    <div className="px-[10%] space-y-5">
      <h1 className="fortnite text-7xl text-primary">Memory Game</h1>
      <div>
        <MemoryGame />
      </div>
    </div>
=======
import { Component } from "react";

class JigsawPuzzle extends Component {
  puzzle: any;
  pieces: any;

  constructor(props :any) {
    super(props);
    this.state = {
      puzzle: [],
      pieces: [],
      solved: false,
    };
  }

  componentDidMount() {
    this.generatePuzzle();
  }

  generatePuzzle() {
    const puzzle = [];
    for (let i = 0; i < 9; i++) {
      puzzle.push(new Side());
    }
    this.setState({
      puzzle: puzzle,
    });
  }

  solvePuzzle() {
    for (let i = 0; i < 9; i++) {
      this.puzzle[i].twist(this.pieces[i].points[0], this.pieces[i].points[1], 0, 0);
    }
    this.setState({
      solved: true,
    });
  }

  render() {
    const state = this.state;
    const { puzzle, pieces, solved } = state as any;
    return (
      <div>
        <h1>Jigsaw Puzzle</h1>
        {!solved && (
          <div>
            <button onClick={this.solvePuzzle}>Solve Puzzle</button>
          </div>
        )}
        {puzzle.map((side :any, i :any) => (
          <div key={i}>
            {side.drawPath()}
          </div>
        ))}
        {pieces.map((piece :any, i :any) => (
          <div key={i}>
            {piece.drawPath()}
          </div>
        ))}
      </div>
    );
  }
}
function GameOne() {
  return (
    <div id="forPuzzle">GameOne</div>
>>>>>>> 8fa6055 (2 games added)
  )
}

export default GameOne