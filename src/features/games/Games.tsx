import { GameCard } from './components/GameCard'
import { gameProjects } from './data/gameProjects'

function Games() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <h2 className="text-5xl font-bold tracking-tight">
        Games
      </h2>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {gameProjects.map((game) => (
          <GameCard
            key={game.title}
            game={game}
          />
        ))}
      </div>
    </div>
  );
}

export default Games;
