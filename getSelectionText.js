function getSelectionHtml() {
    var selection = "";
    if (typeof window.getSelection != "undefined") {
        var sel = window.getSelection();
        if (sel.rangeCount) {
            selection = sel.toString();
        }
    } else if (typeof document.selection != "undefined") {
        if (document.selection.type == "Text") {
            selection = document.selection.createRange().htmlText;
        }
    }
    return selection;
}