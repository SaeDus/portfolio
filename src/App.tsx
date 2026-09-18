import { TitleCard } from './components/TitleCard'
import { SocialCard } from './components/SocialCard'

import Software from './features/software/Software'

import './App.css'

function App() {
  return (
    <main className="flex flex-col min-h-screen bg-zinc-950 text-zinc-100">
      <TitleCard />
      <Software />
      <SocialCard />
    </main>
  )
}


export default App
