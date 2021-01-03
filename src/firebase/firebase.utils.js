import firebase from 'firebase/app'; // pulling firebase utility lib
// partially importing firebase components
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAqEHbSSEFp1cc4wznSXrjGaQgEbpcPJt8",
  authDomain: "crwn-db-1a8c7.firebaseapp.com",
  databaseURL: "https://crwn-db-1a8c7.firebaseio.com",
  projectId: "crwn-db-1a8c7",
  storageBucket: "crwn-db-1a8c7.appspot.com",
  messagingSenderId: "373234533130",
  appId: "1:373234533130:web:f5bc4619babbef398830f3",
  measurementId: "G-2QBNV1G4F2"
};



// asyncronous
// doc | collection
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  
  const userRef = firestore.doc(`user/${userAuth.uid}`);  
  const snapShot = await userRef.get();

  // console.log(snapShot);
  // checking whether user exist or not. if not - creates one
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date(); // creates date objects at the time of call
    
    try  {
      await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch (error) {
          console.log('error craeting a user', error.message);
        }
      }
      
  return userRef;
}; 

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
// firing google
provider.setCustomParameters({ prompt: 'select_account' });
// setting up provider to the method because we only want google auth
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;