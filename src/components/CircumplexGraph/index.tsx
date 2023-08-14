import { FC, useState } from 'react'
import classNamesBind from 'classnames/bind'
import DiscChart from './components/DiscChart'
import type { DiscType, Profile } from 'lib/types'

import css from './styles.module.scss'
import { toArchetype } from 'lib/personality'
const classNames = classNamesBind.bind(css)

export type OwnProps = {
  size: number
  profile: Profile
  selectedType: string | null
  showDiscChart?: boolean
}

export type ProfileScore = {
  id: string
  degrees: number
  intensity: number
}

const CircumplexGraph: FC<OwnProps> = ({
  size = 450,
  selectedType,
}: OwnProps) => {
  const [hoveredType, setHoveredType] = useState<string | null>(null)

  const handleTypeHovered = (discType: string | null) => {
    setHoveredType(discType)
  }

  return (
    <div className={classNames('flex', { size })}>
      <div>
        <div
          className={classNames('container', { size })}
          style={{ width: `${size}px` }}
        >
          <div className={classNames('wrapper')}>
            <div className={classNames('chart-wrapper')}>
              <DiscChart
                selectedType={selectedType}
                onTypeHovered={handleTypeHovered}
              />
            </div>
            <div
              className={classNames('hover-traits', hoveredType, {
                display: !!hoveredType,
              })}
            >
              <div className={classNames('hover-title', hoveredType)}>
                {toArchetype(hoveredType as DiscType)} ({hoveredType})
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CircumplexGraph
