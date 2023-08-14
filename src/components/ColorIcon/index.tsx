import { FC } from 'react'
import classNamesBind from 'classnames/bind'
import CheckBubbleSVG from './components/CheckBubbleSvg'
import CloseBubbleSVG from './components/CloseBubbleSVG'
import css from './styles.module.scss'
import { getDiscHex, getSVGClasses } from 'lib/svg'
const classNames = classNamesBind.bind(css)

const COLOR_ICON_NAMES = [
  'speech_bubble',
  'close-bubble',
  'checkBubble',
  'disc_wheel',
  'people',
  'award',
  'working',
] as const

export type ColorIconName = (typeof COLOR_ICON_NAMES)[number]

export interface OwnProps {
  icon?: ColorIconName
  discType?: string
  width?: number
}

const ColorIcon: FC<OwnProps> = ({ icon, discType, width }: OwnProps) => {
  const style = width
    ? { width: `${width}px`, height: `${width}px` }
    : { width: '100%', height: '100%' }

  const getFillColor = () => {
    return getDiscHex(discType)
  }

  const getBasicClasses = (viewBox?: string) => {
    type capTypes = 'round' | 'inherit' | 'butt' | 'undefined'

    const strokeLinecap: capTypes = 'round'
    const strokeLinejoin: capTypes = 'round'

    return {
      xmlns: 'http://www.w3.org/2000/svg',
      width: '100%',
      height: '100%',
      fill: 'none',
      viewBox: viewBox ? viewBox : '0 0 24 24',
      strokeWidth: '2',
      strokeLinecap,
      strokeLinejoin,
      stroke: getFillColor(),
    }
  }

  const renderIcon = (icon?: ColorIconName) => {
    if (!icon) return null

    switch (icon) {
      case 'speech_bubble':
        return (
          <svg {...getBasicClasses('0 0 30 30')}>
            <path d="M28.72,19.47a3,3,0,0,1-3,3h-18l-6,6v-24a3,3,0,0,1,3-3h21a3,3,0,0,1,3,3Z" />
          </svg>
        )
      case 'checkBubble':
        return <CheckBubbleSVG discType={discType} />
      case 'disc_wheel':
        const { a, b } = getSVGClasses('renderDiscWheel', discType)
        return (
          <svg width={'100%'} height={'100%'} viewBox="0 0 30 30">
            <defs>
              <style>{`.${a},.${b}{fill:none;}.${b}{stroke:${getFillColor()};stroke-width:2px;}`}</style>
            </defs>
            <g id="Group_3962" data-name="Group 3962">
              <g id="Ellipse_324" data-name="Ellipse 324">
                <circle className={a} cx="14.72" cy="14.97" r="14" />
                <circle className={b} cx="14.72" cy="14.97" r="12.88" />
              </g>
              <g id="Ellipse_325" data-name="Ellipse 325">
                <circle className={a} cx="14.72" cy="14.97" r="3.92" />
                <circle className={b} cx="14.72" cy="14.97" r="2.8" />
              </g>
              <line
                id="Line_376"
                data-name="Line 376"
                className={b}
                x1="14.72"
                y1="11.61"
                x2="14.72"
                y2="1.53"
              />
              <line
                id="Line_377"
                data-name="Line 377"
                className={b}
                x1="14.72"
                y1="28.41"
                x2="14.72"
                y2="18.33"
              />
              <line
                id="Line_378"
                data-name="Line 378"
                className={b}
                x1="18.08"
                y1="14.97"
                x2="28.16"
                y2="14.97"
              />
              <line
                id="Line_379"
                data-name="Line 379"
                className={b}
                x1="1.28"
                y1="14.97"
                x2="11.36"
                y2="14.97"
              />
            </g>
          </svg>
        )
      case 'close-bubble':
        return <CloseBubbleSVG discType={discType} />
      case 'people':
        return (
          <svg {...getBasicClasses()} strokeWidth="1.6">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
          </svg>
        )
      case 'award':
        return (
          <svg {...getBasicClasses()} strokeWidth="1.6">
            <circle cx="12" cy="8" r="7" />
            <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
          </svg>
        )
      case 'working':
        return (
          <svg {...getBasicClasses('0 0 30 30')}>
            <g id="Working">
              <rect
                id="Rectangle_588"
                data-name="Rectangle 588"
                x="1.72"
                y="8.47"
                width="26"
                height="18.2"
                rx="2.6"
              />
              <path
                id="Path_2715"
                data-name="Path 2715"
                d="M19.92,26.67V5.87a2.6,2.6,0,0,0-2.6-2.6h-5.2a2.59,2.59,0,0,0-2.6,2.6v20.8"
              />
            </g>
          </svg>
        )
      default:
        return null
    }
  }

  return (
    <div className={classNames('container')} style={style}>
      {renderIcon(icon)}
    </div>
  )
}

export default ColorIcon
