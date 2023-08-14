import { FC } from 'react'
import type { Profile } from 'lib/types'
import classNamesBind from 'classnames/bind'
import { fullName } from 'lib/profile'
import css from './styles.module.scss'
import ProfileBubble from '../ProfileBubble'
const classNames = classNamesBind.bind(css)

export interface OwnProps {
  profile: Profile
}

const ProfileHeader: FC<OwnProps> = ({ profile }: OwnProps) => {
  const name = fullName(profile)
  const longName = name.length > 15
  const discType = profile.personalities?.disc_type || ''
  return (
    <div className={classNames('container', discType)}>
      <div className={classNames('pattern')} />
      <div className={classNames('bubble-wrapper')}>
        <ProfileBubble profile={profile} size={44} />
      </div>
      <div className={classNames('info')}>
        <div className={classNames('name', { longName })}>{name}</div>
        <div className={classNames('subtitle')}>{`${
          profile.verified ? 'user' : 'predicted'
        } profile`}</div>
      </div>
    </div>
  )
}

export default ProfileHeader
