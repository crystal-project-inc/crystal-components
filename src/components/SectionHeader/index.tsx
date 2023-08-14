import React, { FC } from 'react'
import classNamesBind from 'classnames/bind'
import ColorIcon, { ColorIconName } from '../ColorIcon'
import css from './styles.module.scss'
const classNames = classNamesBind.bind(css)

export interface OwnProps {
  discType?: string
  icon?: ColorIconName
  children: React.ReactNode
}

const SectionHeader: FC<OwnProps> = ({ discType, icon, children }) => {
  const renderImage = () => {
    if (!icon) return null
    return (
      <div className={classNames('icon')}>
        <ColorIcon icon={icon} discType={discType} />
      </div>
    )
  }
  return (
    <div className={classNames('container', discType ? discType : '')}>
      {renderImage()}
      <div className={classNames('title')}>{children}</div>
    </div>
  )
}

export default SectionHeader
