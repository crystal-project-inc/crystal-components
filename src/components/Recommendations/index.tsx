import { FC } from 'react'
import classNamesBind from 'classnames/bind'
import SectionHeader from '../SectionHeader'
import Phrase from '../Phrase'
import { Profile } from '../../lib/types'
import { ColorIconName } from '../ColorIcon'
import css from './styles.module.scss'
const classNames = classNamesBind.bind(css)

const MAX_PHRASES = 3

export interface OwnProps {
  profile: Profile
  title: string
  icon?: ColorIconName
  recommendationsList: string[]
}

const Recommendations: FC<OwnProps> = ({
  profile,
  title,
  icon,
  recommendationsList,
}) => {
  const discType = profile.personalities.disc_type
  return (
    <div className={classNames('container')}>
      <SectionHeader icon={icon || undefined} profile={profile}>
        {title}
      </SectionHeader>
      <ul className={classNames('phraseContainer')}>
        {recommendationsList.slice(0, MAX_PHRASES).map(datum => (
          <Phrase key={datum} phrase={datum} discType={discType} />
        ))}
      </ul>
    </div>
  )
}

export default Recommendations
