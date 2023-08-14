import { FC } from 'react'
import classNamesBind from 'classnames/bind'

import ProfileImage from 'components/ProfileImage'

import type { Profile } from 'lib/types'
import { getInitials } from 'lib/profile'
import css from './styles.module.scss'
const classNames = classNamesBind.bind(css)

export interface OwnProps {
  profile: Profile
  size: number
}

const ProfileBubble: FC<OwnProps> = ({ profile, size }: OwnProps) => {
  const initials = getInitials(profile).toUpperCase()
  const discType = profile.personalities?.disc_type || ''

  return (
    <div>
      <div
        style={{ width: size, minWidth: size, height: size, minHeight: size }}
        className={classNames('container')}
      >
        {profile.photo_url ? (
          <ProfileImage photoUrl={profile.photo_url} size={size} />
        ) : (
          <div className={classNames('plain', discType)}>{initials}</div>
        )}
      </div>
    </div>
  )
}

export default ProfileBubble
