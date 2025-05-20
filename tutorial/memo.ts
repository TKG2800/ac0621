type memo = {
    id: number;
    context: string;
}

let nextid: number;
let memolist: memo[];
const creatememo = () => {
  let textArea = document.getElementById("memo") as HTMLInputElement | null;
  let text: string = ""; 
  if (textArea instanceof HTMLInputElement) {
    text = textArea.value;
  } else if (textArea == null) {}
    let memo: memo = {
        id: nextid++,
        context: text, 
    }
  return memo;
} 
const removememo = () => {
  
  memolist.pop(searchmemo());
}
const updatememo = () => {

}
const savememo = () => {
  memolist.push (creatememo());
}
const searchmemo = (findid: number) => {
  let i: number; 
  for (i=0, i<memolist.length; i++;) {
    if (memolist[i].id == findid){
      console.log(memolist[i].id);
      return memolist[i];
    }
  
  }
}
const diaplaymemo = () => {
  let list = document.getElementById("list") as HTMLGetElement | null;
  if (list instanceof HTMLGetElement)
  
}
