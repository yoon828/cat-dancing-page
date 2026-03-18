import catSvg from '../assets/images/cat.svg'
import '../styles/animations.css'

export default function DancingCat({ isPlaying, speed }) {
  const animStyle = {
    animationPlayState: isPlaying ? 'running' : 'paused',
    animationDuration: `${2 / speed}s`,
  }

  return (
    <div className="dancing-cat-wrapper">
      <div className="music-notes" aria-hidden="true">
        <span className="note note-1" style={animStyle}>♪</span>
        <span className="note note-2" style={animStyle}>♫</span>
        <span className="note note-3" style={animStyle}>♩</span>
        <span className="note note-4" style={animStyle}>♬</span>
      </div>

      <div
        className="cat-container"
        style={{
          animationPlayState: isPlaying ? 'running' : 'paused',
          animationDuration: `${2 / speed}s`,
        }}
      >
        <div
          className="cat-body"
          style={{
            animationPlayState: isPlaying ? 'running' : 'paused',
            animationDuration: `${0.5 / speed}s`,
          }}
        >
          <img src={catSvg} alt="춤추는 고양이" className="cat-image" />
        </div>
      </div>

      <div className="stage-light" aria-hidden="true" />
    </div>
  )
}
