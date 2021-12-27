import { initializeApp } from 'firebase/app';

const firebaseConfig = {
	apiKey: process.env.VUE_APP_FIRE_KEY,
	authDomain: process.env.VUE_APP_FIRE_DOMAIN,
	projectId: process.env.VUE_APP_FIRE_PROJECT_ID,
	storageBucket: process.env.VUE_APP_FIRE_BUCKET,
	messagingSenderId: process.env.VUE_APP_FIRE_MESSAGE_ID,
	appId: process.env.VUE_APP_FIRE_APPID
};

export default initializeApp(firebaseConfig);
