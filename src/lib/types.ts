export interface Profile {
  first_name: string
  last_name: string
  photo_url: string
  url: string
  verified: boolean
  qualities: string[]
  personalities: Personality
  images: {
    disc_map: string
  }
  content: {
    profile: {
      overview: string[]
    }
    behavior: {
      phrase: string[]
    }
    motivation: {
      phrase: string[]
    }
    drainer: {
      phrase: string[]
    }
    communication: {
      phrase: string[]
    }
    meeting: {
      phrase: string[]
    }
    selling: {
      phrase: string[]
    }
    working_together: {
      phrase: string[]
    }
    recommendations: {
      do: string[]
      dont: string[]
    }
  }
}

export interface Personality {
  archetype: string
  disc_type: string
  disc_intensity: number
  disc_percentages: {
    d: number
    i: number
    s: number
    c: number
  }
  enneagram_type: string
  myers_briggs_type: string
}

export type DiscType =
  | 'Dc'
  | 'D'
  | 'Di'
  | 'DI'
  | 'Id'
  | 'I'
  | 'Is'
  | 'IS'
  | 'Si'
  | 'S'
  | 'Sc'
  | 'SC'
  | 'Cs'
  | 'C'
  | 'Cd'
  | 'CD'
