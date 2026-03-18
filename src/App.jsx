import { useEffect } from 'react'
import DancingCat from './components/DancingCat'
import AnimationControls from './components/AnimationControls'
import { useAnimation } from './hooks/useAnimation'
import './styles/app.css'

export default function App() {
  const { isPlaying, speed, toggle, changeSpeed } = useAnimation()

  useEffect(() => {
    const handleKey = (e) => {
      if (e.code === 'Space') {
        e.preventDefault()
        toggle()
      }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [toggle])

  return (
    <main className="app">
      <h1 className="title">🐱 Dancing Cat</h1>
      <p className="subtitle">{isPlaying ? '신나게 춤추는 중!' : '잠시 쉬는 중...'}</p>

      <DancingCat isPlaying={isPlaying} speed={speed} />

      <AnimationControls
        isPlaying={isPlaying}
        speed={speed}
        onToggle={toggle}
        onSpeedChange={changeSpeed}
      />
    </main>
  )
}
