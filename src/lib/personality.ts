import { DiscType } from './types'

export const toArchetype = (discType: DiscType) => {
  const discTypes = {
    IS: 'Harmonizer',
    Is: 'Encourager',
    I: 'Motivator',
    Id: 'Influencer',
    DI: 'Initiator',
    Di: 'Driver',
    D: 'Captain',
    Dc: 'Architect',
    CD: 'Questioner',
    Cd: 'Skeptic',
    C: 'Analyst',
    Cs: 'Editor',
    SC: 'Stabilizer',
    Sc: 'Planner',
    S: 'Supporter',
    Si: 'Counselor',
  }

  return discTypes[discType]
}
