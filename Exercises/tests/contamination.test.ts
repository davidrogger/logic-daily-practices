import contamination from "../01-contaminationString";
import { expect } from 'chai';

describe('Testing contaiminationString', () => {
  it('Should return "AAAAAAAA"', () => {
    const test01 = contamination('_1a54oP', 'A');
    expect(test01).to.be.equal('AAAAAAA');
  });

  it('Should return "       "', () => {
    const test02 = contamination('tests02', ' ');
    expect(test02).to.be.equal('       ');
  });

  it('Should return "&&&&&&&&"', () => {
    const test03 = contamination('moretest', '&');
    expect(test03).to.be.equal('&&&&&&&&');
  });

  it('Should return ""', () => {
    const test04 = contamination('', 'A');
    expect(test04).to.be.equal('');
  });
  
});
