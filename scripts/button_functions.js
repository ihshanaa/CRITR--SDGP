/* Copies the output text to the clipboard */
function copyText(idName) {
    var r = document.createRange();
    r.selectNode(document.getElementById(idName));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(r);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
}




/* Saves the output text as .txt file */
/* Only .txt and .rtf formats are working */

/* .txt format */
function saveAsText(idName) {
    var txt = document.getElementById(idName).innerHTML;
    var file = new Blob([txt],{type:"text"});
    var anchor = document.createElement("a");
    anchor.href = URL.createObjectURL(file);
    anchor.download = "critr.txt";  /* Change file extension for different file formats */
    anchor.click();
}

/* .rtf format */
function saveAsRichText(idName) {
    var txt = document.getElementById(idName).innerHTML;
    var file = new Blob([txt],{type:"text"});
    var anchor = document.createElement("a");
    anchor.href = URL.createObjectURL(file);
    anchor.download = "critr.rtf";  /* Change file extension for different file formats */
    anchor.click();
}




/* Print the output text */
function printText(idName) {
    var divContents = document.getElementById(idName).innerHTML;
    var a = window.open('', '');
    a.document.write(divContents);
    a.document.close();
    a.print();
}




/* Share to social media */

/* Share to Facebook */
function shareOnFacebook(idName) {
    const navUrl = 
    'https://www.facebook.com/sharer/sharer.php?u=' +
    document.getElementById(idName).innerHTML; 
    ;
    window.open(navUrl , '_blank');
} 

/* Share to Twitter */

function shareOnTwitter(idName) {
    const navUrl =
      'https://twitter.com/intent/tweet?text=' +
      document.getElementById(idName).innerHTML;
    window.open(navUrl, '_blank');
}
