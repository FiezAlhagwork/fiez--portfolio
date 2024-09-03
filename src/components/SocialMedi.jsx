import React from 'react'

const SocialMedi = ({className,link,icon}) => {
  return (
              <a
                
                className={className}
                href={link}
              >
                <li>{icon}</li>
              </a>
  )
}

export default SocialMedi