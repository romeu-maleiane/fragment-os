import React from 'react'

function FeatureCard2({ icon, title, description }) {
  return (
    <div className='feature-card-2'>
      {icon}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

export default FeatureCard2
