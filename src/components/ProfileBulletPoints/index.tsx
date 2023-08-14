import { FC } from 'react'
import classNamesBind from 'classnames/bind'
import { Profile } from 'lib/types'
import css from './styles.module.scss'
const classNames = classNamesBind.bind(css)

interface OwnProps {
  profile: Profile
}

const ProfileBulletPoints: FC<OwnProps> = ({ profile }: OwnProps) => {
  const { disc_type: discType, archetype } = profile.personalities

  return (
    <div className={classNames('content')}>
      <div
        className={classNames('discTypeSubheader', discType)}
      >{`${discType} (${archetype})`}</div>
      <div className={classNames('qualities')}>
        {profile.qualities.slice(0, 3).join(' \u0387 ')}
      </div>
    </div>
  )
}

export default ProfileBulletPoints
