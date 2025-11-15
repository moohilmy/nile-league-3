import React from 'react'

const Menu = ({size = '24',color , onClick}: {color?: string; size?: string , onClick: () => void
}) => {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor" 
    viewBox="0 0 24 24"
    width={size}
    height={size}
    onClick={onClick}
    style={{ color: color, cursor: 'pointer' }} 
    >
          <g width="100%" height="100%" transform="matrix(1,0,0,1,0,0)">
        <g id="_01_align_center" data-name="01 align center">
            <rect y="4" width="24" height="2" fill="#ffffff" 
                data-original-color="#000000ff" stroke="none"  />
            <rect x="8" y="9" width="16" height="2" fill="#ffffff" 
                data-original-color="#000000ff" stroke="none"  />
            <rect x="8" y="19" width="16" height="2" fill="#ffffff" 
                data-original-color="#000000ff" stroke="none"  />
            <rect y="14" width="24" height="2" fill="#ffffff" 
                data-original-color="#000000ff" stroke="none"  />
        </g>
    </g>
    </svg>
  )
}

export default Menu
