import { FC } from 'react'
import classNamesBind from 'classnames/bind'
import { Profile } from 'lib/types'
import ColorIcon from 'components/ColorIcon'
import css from './styles.module.scss'
const classNames = classNamesBind.bind(css)

interface OwnProps {
  profile: Profile
}

const DosDonts: FC<OwnProps> = ({ profile }: OwnProps) => {
  const { content } = profile

  const renderSuggestion = (suggestion: string, dont = false) => {
    return (
      <div key={suggestion} className={classNames('suggestion', { dont })}>
        <div className={classNames('suggestionIcon')}>
          <ColorIcon
            icon={dont ? 'close-bubble' : 'checkBubble'}
            discType={dont ? 'D' : 'S'}
            width={12}
          />
        </div>
        <div className={classNames('suggestionText')}>{suggestion}</div>
      </div>
    )
  }

  return (
    <div className={classNames('content')}>
      <div className={classNames('suggestions')}>
        <div className={classNames('suggestionTitle', 'green')}>Do</div>
        {content.recommendations.do.map(d => renderSuggestion(d))}
        <div className={classNames('suggestionTitle', 'red')}>Don't</div>
        {content.recommendations.dont.map(d => renderSuggestion(d))}
      </div>
    </div>
  )
}

export default DosDonts
