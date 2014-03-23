

function showPic(whichpic) {
    var src = whichpic.getAttribute("href");
    var title = whichpic.getAttribute("title");
    placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src", src);
    var text = document.getElementById("description");
//      text.firstChild.nodeValue = title;
    text.childNodes[0].nodeValue = title;
}

function insertAfter (newNode, oldNode) {
    var parent = oldNode.parentNode;
    if (oldNode == parent.lastNode) {
        parent.appendChild(newNode);
    } else {
        parent.insertBefore(newNode, oldNode.nextSibling);
    }
}

table = document.getElementById("obj-table")
//  alert(typeof table)
document.getElementsByTagName("head")[0].setAttribute("title", "js_note title set by js")

items = document.getElementsByTagName("a")
for (i=0; i<items.length; i++) {
    items[i].onclick = function() { showPic(this); return false; }
}  