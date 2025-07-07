import React from 'react'
export default function CardGrid() {
  const items = Array.from({ length: 6 }, (_, i) => i + 1)
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '20px' }}>
      {items.map(i => (
        <div key={i} style={{ padding: '20px', background: 'rgba(255,255,255,0.1)', borderRadius: '12px', animation: `popIn ${0.5 + i*0.2}s forwards` }}>
          <h3>Шаблон {i}</h3>
          <p>Описание шаблона {i}</p>
        </div>
      ))}
    </div>
  )
}