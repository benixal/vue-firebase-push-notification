<script setup>
import HelloWorld from './components/HelloWorld.vue'
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyBZXOdtYpkX4eh5GBUW8uu0p4MqmklgFXE",
  authDomain: "hello-notification-2db39.firebaseapp.com",
  projectId: "hello-notification-2db39",
  storageBucket: "hello-notification-2db39.appspot.com",
  messagingSenderId: "187164567341",
  appId: "1:187164567341:web:288e2201706b683e0f55a4",
  measurementId: "G-L5HTRYKJ8E"
};


const app = initializeApp(firebaseConfig);


// Get registration token. Initially this makes a network call, once retrieved
// subsequent calls to getToken will return from cache.
const messaging = getMessaging();
onMessage(messaging, (payload) => {
  console.log('Message received. ', payload);
  // ...
});

getToken(messaging, { vapidKey: 'BMT_sbuE9dD1qi334hY9O5fWGLOcGFCpz6ti9EyrIqQECH8zLjhEvdVX2HtP_4eze5JBcGrKsZs4sxE8tk4c-lo' }).then((currentToken) => {
  if (currentToken) {
    // Send the token to your server and update the UI if necessary
    console.log("Token is:",currentToken);
    // ...
  } else {
    // Show permission request UI
    console.log('No registration token available. Request permission to generate one.');
    // ...
  }
}).catch((err) => {
  console.log('An error occurred while retrieving token. ', err);
  // ...
});

</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
