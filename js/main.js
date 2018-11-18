function closed() {
    document.getElementById("cookie").style.display="none";
}

function hide($el) {
    $el.closest('[id]').style.display="none";
    document.getElementById("blackout").style.display="none";
}
function popUps($id) {
    document.getElementById("blackout").style.display="block";
    document.getElementById($id).style.display="block";

}