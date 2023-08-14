import { FC } from 'react'
import classNamesBind from 'classnames/bind'
import ProfileHeader from 'components/ProfileHeader'
import { Profile } from 'lib/types'
import SectionHeader from 'components/SectionHeader'
import css from './styles.module.scss'
import CircumplexGraph from 'components/CircumplexGraph'
import Recommendations from 'components/Recommendations'
import DosDonts from 'components/DosDonts'
import ProfileBulletPoints from 'components/ProfileBulletPoints'
const classNames = classNamesBind.bind(css)

interface OwnProps {
  profile: Profile
}

const ProfileOverview: FC<OwnProps> = ({ profile }: OwnProps) => {
  return (
    <div className={classNames('container')}>
      <ProfileHeader profile={profile} />
      <ProfileBulletPoints profile={profile} />
      <Recommendations
        profile={profile}
        title={'HOW TO COMMUNICATE'}
        icon="speech_bubble"
        recommendationsList={profile.content.profile.overview}
      />
      <DosDonts profile={profile} />
      <SectionHeader icon="disc_wheel" profile={profile}>
        DISC Map
      </SectionHeader>
      <CircumplexGraph profile={profile} size={250} />
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
      <Recommendations
        profile={profile}
        title={'WRITING STYLES'}
        recommendationsList={profile.content.communication.phrase}
        icon="mail"
      />
      <Recommendations
        profile={profile}
        title={'SPEAKING TO'}
        recommendationsList={profile.content.meeting.phrase}
        icon="speech_bubble"
      />
      <Recommendations
        profile={profile}
        title={'SELLING TO'}
        recommendationsList={profile.content.selling.phrase}
        icon="working"
      />
    </div>
  )
}

export default ProfileOverview
