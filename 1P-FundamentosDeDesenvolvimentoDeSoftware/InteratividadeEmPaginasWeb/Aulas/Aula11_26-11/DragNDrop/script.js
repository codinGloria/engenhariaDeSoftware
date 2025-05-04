let item;

function dragStart(e){
    e.dataTransfer.setData("text", e.target.id);
    item = e.target.id;
}

function dragOver(e){
    e.preventDefault();
}

function drop(e){
    e.preventDefault();
    let data = e.dataTransfer.getData("text");
    e.target.appendChild(document.getElementById(data));
}