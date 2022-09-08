// my first attempt
function contamination1(text:string, char:string):string {
  return char.replace(/[\s\S]/gi, char);
}

// clever way
export default function contamination2(text:string, char:string):string {
  return char.repeat(text.length);
}