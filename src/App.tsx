import './App.css'
import ProfileOverview from './components/ProfileOverview/index'
import data from './mocked-profile-data.json'
export { default as CircumplexGraph } from 'components/CircumplexGraph'
export { default as ColorIcon } from 'components/ColorIcon'
export { default as Phrase } from 'components/Phrase'
export { default as ProfileBubble } from 'components/ProfileBubble'
export { default as ProfileHeader } from 'components/ProfileHeader'
export { default as ProfileImage } from 'components/ProfileImage'

export { default as ProfileOverview } from 'components/ProfileOverview'
export { default as Recommendations } from 'components/Recommendations'
export { default as SectionHeader } from 'components/SectionHeader'

function App() {
  // query api for data
  const mockedProfile = data.data

  return (
    <div className="App">
      <div className="app-container">
        <ProfileOverview profile={mockedProfile} />
      </div>
    </div>
  )
}

export default App
