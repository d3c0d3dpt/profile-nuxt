import firebase from 'firebase/app';

export default (context) => {
    fetch('/__/firebase/init.json').then(async (response) => {
        firebase.initializeApp(await response.json());

        await context.$fire.analyticsReady();
    });
};
