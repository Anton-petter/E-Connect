const firebaseConfig = {
  apiKey: "AIzaSyBH9w6Z24UXNz9ZDGm0E2ivPsEzzex9miI",
  authDomain: "contact-form-30990.firebaseapp.com",
  databaseURL: "https://contact-form-30990-default-rtdb.firebaseio.com",
  projectId: "contact-form-30990",
  storageBucket: "contact-form-30990.appspot.com",
  messagingSenderId: "907735019191",
  appId: "1:907735019191:web:24f08301791f32c4e8a732"
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");

  saveMessages(name, emailid, msgContent);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 7000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
