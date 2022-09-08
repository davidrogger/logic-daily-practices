import twoSum from '../02-twoSum';
import { expect } from 'chai';

describe('Testing twoSum', () => {
  it('Should return "[0, 1]"', () => {
    const test01 = twoSum([2, 7, 11, 15], 9)
    expect(test01).to.be.deep.equal([0, 1]);
  });

  it('Should return "[]"', () => {
    const test02 = twoSum([2, 5, 6], 0)
    expect(test02).to.be.deep.equal([]);
  });

  it('Should return "[0, 2]"', () => {
    const test03 = twoSum([2, 3, 4, 6, 5], 6);
    expect(test03).to.be.deep.equal([0, 2]);
  });
  
});