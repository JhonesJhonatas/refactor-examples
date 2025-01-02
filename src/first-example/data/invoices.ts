export interface Invoice {
  customer: string
  performances: {
    playID: string
    audience: number
  }[]
}

export const invoices: Invoice[] = [
  {
    customer: 'BigCo',
    performances: [
      {
        playID: "hamlet",
        audience: 55,
      },
      {
        playID: "as-you-like-it",
        audience: 35,
      },
      {
        playID: "othello",
        audience: 40,
      },
    ],
  },
];
