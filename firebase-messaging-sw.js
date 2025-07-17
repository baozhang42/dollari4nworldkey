importScripts(
    "https://www.gstatic.com/firebasejs/9.9.1/firebase-app-compat.js"
);
importScripts(
    "https://www.gstatic.com/firebasejs/9.9.1/firebase-messaging-compat.js"
);

const firebaseConfig = {
    apiKey: "AIzaSyAFgnDfeuInEUbmuXMs8ixshCJpnk01mxw",
    authDomain: "vie-faucet-316c7.firebaseapp.com",
    projectId: "vie-faucet-316c7",
    storageBucket: "vie-faucet-316c7.appspot.com",
    messagingSenderId: "716838953297",
    appId: "1:716838953297:web:764963e30ae3acfedf7370",
    measurementId: "G-D0GLPV6SKE",
};

const app = firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();