

function insertAfter (newNode, oldNode) {
    var parent = oldNode.parentNode;
    if (oldNode == parent.lastChild) {
        parent.appendChild(newNode);
    } else {
        parent.insertBefore(newNode, oldNode.nextSibling);
    }
}

function extractAttribute(elements, attrName) {
}

function extractContent(elements) {
    var conList = new Array(elements.length);
//    for (e in elements) {
    for (var i = 0; i < elements.length; i++) {
        conList[i] = elements[i].innerHTML;
    }
    return conList;
}
  
function listHead2 () {
    var h2s = document.getElementsByTagName("h2");
//    alert(h2s.length);
    var hcontList = extractContent(h2s);
//    alert(hcontList.length);
    var defList = document.createElement("dl");

    var body = document.getElementsByTagName("body")[0];
    if (body == undefined || body.firstChild == undefined) {
        return;
    }
    var firstHead = body.firstChild.nextSibling;
//    insertAfter(defList, firstHead);
    body.insertBefore(defList, firstHead);
    i = 0;
    for (hcont in hcontList) {
        i++;
        var dtitle = document.createElement("dt");
        var dtitleCont = document.createTextNode(hcontList[hcont]);
        dtitle.appendChild(dtitleCont);
        defList.appendChild(dtitle);
    }
}

listHead2();
