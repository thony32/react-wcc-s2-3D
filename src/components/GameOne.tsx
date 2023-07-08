import MemoryGame from "./MemoryGame"

function GameOne() {
  return (
    <div className="px-[10%] space-y-5">
      <h1 className="fortnite text-7xl text-primary">Memory Game</h1>
      <div className="grid grid-cols-3">
        <div className="flex items-center">
          <p className="first-letter:text-4xl text-2xl">Ce jeux consiste a faire trouver deux images identiques pour gagner</p>
        </div>
        <div className="col-span-2">
          <MemoryGame />
        </div>
      </div>
    </div>
  )
}

export default GameOne