function getItem() {
  console.log('getItem');
  let user = JSON.parse(window.localStorage.getItem('user'));
  let name = document.getElementsByName('firstname');
  let email = document.getElementsByName('email');
  for (let i = 0; i < name.length; i++) {
    name[i].value = user.name;
  }
  for (let i = 0; i < email.length; i++) {
    email[i].value = user.email;
  }
  console.log(user.name);
}

getItem();
