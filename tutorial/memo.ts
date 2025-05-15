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

}
const updatememo = () => {

}
const savememo = () => {
  memolist.push (creatememo());
}

