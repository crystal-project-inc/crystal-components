import React from 'react'

import { getBasicClasses, getDiscHex } from 'lib/svg'

export interface OwnProps {
  discType?: string
}

export default class CloseBubbleSVG extends React.Component<OwnProps> {
  render() {
    const { discType } = this.props
    const hex = getDiscHex(discType)

    return (
      <svg
        {...getBasicClasses('0 0 12 12', discType)}
        fill="none"
        stroke=""
        strokeWidth="1"
      >
        <circle cx="6" cy="6" r="6" fill={hex} fillOpacity="0.1" />
        <line
          x1="10.1924"
          y1="1.70711"
          x2="1.7071"
          y2="10.1924"
          stroke={hex}
          strokeLinecap="round"
        />
        <line
          x1="10.1933"
          y1="10.1924"
          x2="1.708"
          y2="1.7071"
          stroke={hex}
          strokeLinecap="round"
        />
      </svg>
    )
  }
}
