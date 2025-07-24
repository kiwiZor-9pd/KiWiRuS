// Firebase Auth
function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => window.location = 'main.html')
    .catch(e => alert(e.message));
}

function register() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(() => window.location = 'main.html')
    .catch(e => alert(e.message));
}

function logout() {
  firebase.auth().signOut().then(() => window.location = 'index.html');
}