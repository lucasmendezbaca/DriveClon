import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

// const firebaseConfig = {
//   apiKey: "AIzaSyBnR6JEhJP1-IWVlR1bkq_-F3oaXNpACrM",
//   authDomain: "vimdrive-development.firebaseapp.com",
//   projectId: "vimdrive-development",
//   storageBucket: "vimdrive-development.appspot.com",
//   messagingSenderId: "598896467351",
//   appId: "1:598896467351:web:cb7d3b4e5ed5e5adc238d2"
// };

const firebaseConfig = {
  apiKey: 'AIzaSyBdP0cSWm1aN_hv8VMTCbhgPp7L9lMrmtU',
  authDomain: 'driveclone-a351a.firebaseapp.com',
  projectId: 'driveclone-a351a',
  storageBucket: 'driveclone-a351a.appspot.com',
  messagingSenderId: '989015759228',
  appId: '1:989015759228:web:c3592481c655303ec42cf9',
}

export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
