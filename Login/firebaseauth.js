// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
import { getFirestore, setDoc, doc } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyDxzBB_RKFRVRPTunIFy_qUNGRVTpHHPrc",
    authDomain: "the-estate-59b23.firebaseapp.com",
    projectId: "the-estate-59b23",
    storageBucket: "the-estate-59b23.appspot.com",
    messagingSenderId: "477231912374",
    appId: "1:477231912374:web:f7c9ecdd1777c576a65d17"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Function to display messages with fading effect
function showMessage(message, divId) {
    var messageDiv = document.getElementById(divId);
    messageDiv.style.display = "block";
    messageDiv.innerHTML = message;
    messageDiv.style.opacity = 1;
    setTimeout(function () {
        messageDiv.style.opacity = 0;
    }, 5000);
}

// Function to show loader while processing
function showLoader() {
    document.getElementById('loader').style.display = 'block';
}

// Function to hide loader
function hideLoader() {
    document.getElementById('loader').style.display = 'none';
}

// Sign Up event listener
const signUp = document.getElementById('submitSignUp');
signUp.addEventListener('click', (event) => {
    event.preventDefault();
    const email = document.getElementById('rEmail').value;
    const password = document.getElementById('rPassword').value;
    const firstName = document.getElementById('fName').value;
    const lastName = document.getElementById('lName').value;
    const phone = document.getElementById('phone').value; // Added phone number field

    const auth = getAuth();
    const db = getFirestore();

    showLoader(); // Show loader while processing

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            const userData = {
                email: email,
                firstName: firstName,
                lastName: lastName,
                phone: phone // Include phone number in user data
            };
            showMessage('Account Created Successfully', 'signUpMessage');
            const docRef = doc(db, "users", user.uid);
            setDoc(docRef, userData)
                .then(() => {
                    window.location.href = 'login.html';
                })
                .catch((error) => {
                    console.error("Error writing document", error);
                    hideLoader(); // Hide loader on error
                });
        })
        .catch((error) => {
            const errorCode = error.code;
            if (errorCode == 'auth/email-already-in-use') {
                showMessage('Email Address Already Exists !!!', 'signUpMessage');
            } else {
                showMessage('Unable to create User', 'signUpMessage');
            }
            hideLoader(); // Hide loader on error
        });
});

// Sign In event listener
const signIn = document.getElementById('submitSignIn');
signIn.addEventListener('click', (event) => {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const auth = getAuth();

    showLoader(); // Show loader while processing

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            showMessage('Login successful', 'signInMessage');
            const user = userCredential.user;
            localStorage.setItem('loggedInUserId', user.uid);
            window.location.href = '../Ads/fetchDB.html';
        })
        .catch((error) => {
            const errorCode = error.code;
            if (errorCode === 'auth/invalid-credential') {
                showMessage('Incorrect Email or Password', 'signInMessage');
            } else {
                showMessage('Account does not Exist', 'signInMessage');
            }
            hideLoader(); // Hide loader on error
        });
});

// Hide loader initially
document.addEventListener("DOMContentLoaded", function () {
    hideLoader();
});
