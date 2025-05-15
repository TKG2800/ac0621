type memo = {
    id: number;
    context: string;
}

let nextid: number;
const creatememo = () => {
  let textArea = document.getElementById("memo") as HTMLInputElement | null;
  let text: string; 
  if (textArea == HTMLInputElement) {
    text = textArea?.value;
  } else if (textArea == null) {}
    let memo: memo = {
        id: number = nextid++,
        context: string = text; 
    }
  return memo;
}  
const removememo = () => {

}
const updatememo = () => {

}
