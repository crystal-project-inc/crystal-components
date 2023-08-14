import { FC } from 'react'
import classNamesBind from 'classnames/bind'
import css from './styles.module.scss'
const classNames = classNamesBind.bind(css)

export interface OwnProps {
  size: number
  photoUrl?: string
}

const ProfileImage: FC<OwnProps> = ({ photoUrl, size }: OwnProps) => {
  const placeholderImage = '../../assets/images/profile-placeholder.svg'
  const isValidUrl = () => {
    return photoUrl && !photoUrl.startsWith('data:image')
  }
  const url = isValidUrl() ? photoUrl : placeholderImage

  return (
    <div
      style={{ width: size, minWidth: size, height: size, minHeight: size }}
      className={classNames('container')}
    >
      <img src={url} className={classNames('profile-image')} />
    </div>
  )
}

export default ProfileImage
