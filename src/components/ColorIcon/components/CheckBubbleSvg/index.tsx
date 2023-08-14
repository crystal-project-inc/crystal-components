import React from 'react'

import { getDiscHex } from 'lib/svg'

export interface OwnProps {
  discType?: string
}

export default class CheckBubbleSVG extends React.Component<OwnProps> {
  render() {
    const { discType } = this.props
    const a = 'a-renderCheckBubble'
    const b = 'b-renderCheckBubble'

    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="0 0 34.836 35.136"
        stroke={getDiscHex(discType)}
        fill={getDiscHex(discType)}
      >
        <defs>
          <style>
            {`.${a}{opacity:0.1;}.${b}{fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-width:2.5px;}`}
          </style>
        </defs>
        <g transform="translate(-772.351 -9034.272)">
          <ellipse
            className={a}
            cx="17"
            cy="16.5"
            rx="17"
            ry="16.5"
            transform="translate(772.351 9036.408)"
          />
          <path
            className={b}
            d="M44.577,29.524,29.038,53.667l-8.57-8.57"
            transform="translate(760.882 9006.477)"
          />
        </g>
      </svg>
    )
  }
}
