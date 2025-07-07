import React, { useState } from 'react'
export default function AnimatedButton() {
  const [hover, setHover] = useState(false)
  return (
    <button
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        marginTop: '40px',
        padding: '15px 30px',
        fontSize: '1em',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        background: hover ? 'linear-gradient(45deg,#ff6b6b,#f06595)' : 'linear-gradient(45deg,#48dbfb,#1dd1a1)',
        transition: 'background 0.5s, transform 0.3s',
        transform: hover ? 'scale(1.1) rotate(-2deg)' : 'scale(1)'
      }}
    >
      Подписаться
    </button>
  )
}