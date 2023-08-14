export const fullName = (profile: {
  first_name: string
  last_name: string
}) => {
  let fullName = ''
  if (profile.first_name && profile.last_name)
    fullName = `${profile.first_name} ${profile.last_name}`
  else if (profile.first_name) fullName = profile.first_name
  else if (profile.last_name) fullName = profile.last_name
  return fullName
}

export const getInitials = (profile: {
  first_name: string
  last_name: string
}) => {
  let initials = ''
  if (profile.first_name) initials += profile.first_name.slice(0, 1)
  if (profile.last_name) initials += profile.last_name.slice(0, 1)
  return initials
}
