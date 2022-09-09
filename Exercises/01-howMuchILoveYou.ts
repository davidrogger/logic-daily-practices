// export function howMuchILoveYou(petals: number): string{
//   const flower:Record<number, string> = {
//     1: 'I love you',
//     2: 'a little',
//     3: 'a lot',
//     4: 'passionately',
//     5: 'madly',
//     6: 'not at all',
//   }
//   let position = petals;

//   if (petals > 6) {
//     let count = 0;
//     while(count !== petals) {
//       for (let index = 1; index <= 6; index += 1) {
//         position = index;
//         count += 1;
//         if (count === petals) index = 7;
//       }      
//     }
//   }
  
//   return flower[position]
// }

export function howMuchILoveYou(petals: number): string{
  const flower:Record<number, string> = {
      1: 'I love you',
      2: 'a little',
      3: 'a lot',
      4: 'passionately',
      5: 'madly',
      6: 'not at all',
    }
    const position = petals % 6;
    return flower[position]
  }
