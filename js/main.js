var firebaseConfig = {
        apiKey: "AIzaSyDDhgZM0zFxwjs9etiNNOSdacThneZwMF0",
        authDomain: "serobot-ef962.firebaseapp.com",
        projectId: "serobot-ef962",
        storageBucket: "serobot-ef962.appspot.com",
        messagingSenderId: "980327918395",
        appId: "1:980327918395:web:eb2c0ab5eb123cc8eba51e",
        measurementId: "G-1VDQ6JYJ96",
        databaseURL: "https://serobot-ef962-default-rtdb.asia-southeast1.firebasedatabase.app/",
    };

firebase.initializeApp(firebaseConfig);

var database = firebase.database();
var chat_log = database.ref('chat_log');