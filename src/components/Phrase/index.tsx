import React, { FC } from 'react'
import classNamesBind from 'classnames/bind'
import css from './styles.module.scss'
const classNames = classNamesBind.bind(css)

export interface OwnProps {
  phrase: string
  discType: string
}

const Phrase: FC<OwnProps> = ({ phrase, discType }) => {
  return (
    <div className={classNames('container')}>
      <div className={classNames('item', discType)}>{phrase}</div>
    </div>
  )
}

export default Phrase
