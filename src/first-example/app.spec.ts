import { describe, expect } from '@jest/globals';

import { invoices, plays } from './data'
import { statement } from './app'

describe('statement', () => {
  it('should generate correct statement for customer invoice', () => {
    const expectedOutput = 
      'Statement for BigCo\n' +
      'Hamlet: $650.00 (55 seats)\n' +
      'As You Like It: $580.00 (35 seats)\n' +
      'Othello: $500.00 (40 seats)\n' +
      'Amount owed is $1,730.00\n' +
      'You earned 47 credits\n'

    const result = statement(invoices[0], plays)
    expect(result).toBe(expectedOutput)
  })
})