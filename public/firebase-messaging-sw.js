// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
    apiKey: "AIzaSyBZXOdtYpkX4eh5GBUW8uu0p4MqmklgFXE",
    authDomain: "hello-notification-2db39.firebaseapp.com",
    projectId: "hello-notification-2db39",
    storageBucket: "hello-notification-2db39.appspot.com",
    messagingSenderId: "187164567341",
    appId: "1:187164567341:web:288e2201706b683e0f55a4",
    measurementId: "G-L5HTRYKJ8E"
  });

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log(
      '[firebase-messaging-sw.js] Received background message ',
      payload
    );
    // Customize notification here
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
      body: payload.notification.body,
      icon: '/icon.png'
    };
  
    self.registration.showNotification(notificationTitle, notificationOptions);
  });