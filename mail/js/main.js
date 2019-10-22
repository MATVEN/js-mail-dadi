// variabili
var mailUser = prompt("Scrivi qui la tua mail.");
console.log(mailUser);
var listMail = ['member1@mail.com', 'member2@mail.com', 'member3@mail.com', 'member4@mail.com'];
console.log(listMail);
var found = false;

// verifica
for (var i = 0; i < listMail.length; i++) {
  if (mailUser == listMail[i]) {
    found = true;
  }
}

if (found == true) {
  console.log('Congratulations!You are on the invited list.');
}
else {
  console.log('Sorry! You are not invited.');
}
