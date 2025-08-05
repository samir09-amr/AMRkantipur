<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBuC7aMTOmsAHlZi7-EGkBFsUMp5XaaMZM",
    authDomain: "amrkantipur.firebaseapp.com",
    projectId: "amrkantipur",
    storageBucket: "amrkantipur.firebasestorage.app",
    messagingSenderId: "244178199183",
    appId: "1:244178199183:web:ca5aa173863b47ce40c6fa",
    measurementId: "G-3D2KPKS43L"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>
document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  db.collection("users").doc(username).set({
    username: username,
    lastLogin: new Date()
  })
  .then(() => {
    // Redirect after saving
    window.location.href = "home.html";
  })
  .catch(error => {
    console.error("Error saving user: ", error);
    alert("Login failed. Please try again.");
  });
});
firebase.auth().onAuthStateChanged(user => {
  if (user) {
    // User is signed in
    db.collection("users").doc(user.uid).get()
      .then(doc => {
        if (doc.exists) {
          console.log("User data:", doc.data());
        }
      });
  }
});
