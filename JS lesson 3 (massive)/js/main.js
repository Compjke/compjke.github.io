const styles = ["jazz", "blues"];

document.write("<br><br>" + " " + styles.join(" / "));

styles.push("rock-n-roll");
document.write("<br><br>" + " " + styles.join(" / "));

var styleMiddle = Math.floor(styles.length / 2);
styles.splice(styleMiddle, 1 , "Classic");
document.write("<br><br>" + " " + styles.join(" / "));

let stylesDel = styles.shift();
document.write("<br><br>" + " " + stylesDel);

styles.unshift("Reggi", "Rap");

document.write("<br><br>" + " " + styles.join(" / "));


