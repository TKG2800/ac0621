var nextid;
var memolist;
var creatememo = function () {
    var textArea = document.getElementById("memo");
    var text = "";
    if (textArea instanceof HTMLInputElement) {
        text = textArea.value;
    }
    else if (textArea == null) { }
    var memo = {
        id: nextid++,
        context: text,
    };
    return memo;
};
var removememo = function () {
};
var updatememo = function () {
};
var savememo = function () {
};
