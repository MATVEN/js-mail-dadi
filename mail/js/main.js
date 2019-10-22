// variabili
var ask = parseInt(prompt("Scrivi qui la tua mail."));
var list = ['member1@mail.com', 'member2@mail.com', 'member3@mail.com', 'member4@mail.com'];
console.log(list);

var mail = list;
var found = false;
console.log(found, 'before for')
// verifica
for (var i = 0; i < mail.length; i++) {
  if (mail == list[i]) {
    found = true;
  }
}

console.log(found, 'after for')

if (found == true) {
  console.log('Congratulations!You are on the invited list.');
}
else {
  console.log('Sorry! You are not invited.');
}
