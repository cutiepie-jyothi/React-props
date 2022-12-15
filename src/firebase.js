import firebase from "firebase"

const config={
	  apiKey: "AIzaSyAPQZlOpRZi4wgFRVYw6AZXSCMJp0GcIzw",
	  authDomain: "first-project-5f52a.firebaseapp.com",
	  projectId: "first-project-5f52a",
	  storageBucket: "first-project-5f52a.appspot.com",
	  messagingSenderId: "25312321641",
	  appId: "1:25312321641:web:38e3a6a8fa409ccd8702f8"
}

firebase.initializeApp(config);
export default firebase;