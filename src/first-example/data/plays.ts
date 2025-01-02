export type Play = {
  [key: string]: {
    name: string
    type: string
  }
}

export const plays: Play = {
  hamlet: {
    name: 'Hamlet',
    type: 'tragedy',
  },
  'as-you-like-it': {
    name: 'As You Like It',
    type: 'comedy',
  },
  othello: {
    name: 'Othello',
    type: 'tragedy',
  },
}

