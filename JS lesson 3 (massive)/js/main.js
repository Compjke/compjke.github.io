const styles = ["jazz", "blues"];

document.write("<br><br>" + " " + styles.join(" / "));

styles.push("rock-n-roll");
document.write("<br><br>" + " " + styles.join(" / "));

styles.splice(1, 1, "Classic");
document.write("<br><br>" + " " + styles.join(" / "));

let stylesDel = styles.shift();
document.write("<br><br>" + " " + stylesDel);

styles.unshift("Reggi", "Rap");

document.write("<br><br>" + " " + styles.join(" / "));


