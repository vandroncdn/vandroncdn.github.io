function getLink(){ var a = prompt("Click On Any Ad Than Copy the Url Of Ad & Paste Here");
  
if (a.length>10 && a.includes("https://")) {
window.open('https://bit.ly/' + document.getElementById('text').value );
} else {
alert("you entered wrong link");
}
}