import { FC } from 'react'
import classNamesBind from 'classnames/bind'
import ProfileHeader from 'components/ProfileHeader'
import { Profile } from 'lib/types'
import ColorIcon from 'components/ColorIcon'
import SectionHeader from 'components/SectionHeader'
import css from './styles.module.scss'
import CircumplexGraph from 'components/CircumplexGraph'
import Recommendations from 'components/Recommendations'
import DosDonts from 'components/DosDonts'
const classNames = classNamesBind.bind(css)

interface OwnProps {
  profile: Profile
}

const ProfileOverview: FC<OwnProps> = ({ profile }: OwnProps) => {
  const { disc_type: discType, archetype } = profile.personalities

  return (
    <div className={classNames('container')}>
      <ProfileHeader profile={profile} />
      <div className={classNames('content')}>
        <div
          className={classNames('discTypeSubheader', discType)}
        >{`${discType} (${archetype})`}</div>
        <div className={classNames('qualities')}>
          {profile.qualities.slice(0, 3).join(' \u0387 ')}
        </div>
      </div>
      <Recommendations
        profile={profile}
        title={'HOW TO COMMUNICATE'}
        icon="speech_bubble"
        recommendationsList={profile.content.profile.overview}
      />
      <DosDonts profile={profile} />
      <SectionHeader icon="disc_wheel" discType={discType}>
        DISC Map
      </SectionHeader>
      <CircumplexGraph
        profile={profile}
        size={250}
        selectedType={profile.personalities.disc_type}
      />
      <Recommendations
        profile={profile}
        title={'BEHAVIOR'}
        recommendationsList={profile.content.behavior.phrase}
        icon="people"
      />
      <Recommendations
        profile={profile}
        title={'ENERGIZERS'}
        recommendationsList={profile.content.motivation.phrase}
        icon="award"
      />
      <Recommendations
        profile={profile}
        title={'DRAINERS'}
        recommendationsList={profile.content.drainer.phrase}
        icon="working"
      />
    </div>
  )
}

export default ProfileOverview
