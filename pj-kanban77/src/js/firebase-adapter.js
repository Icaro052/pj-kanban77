// firebase-adapter.js
const firebaseConfig = {
    apiKey: "COLE_SUA_API_KEY_AQUI",
    authDomain: "SEU_PROJETO_ID.firebaseapp.com",
    projectId: "SEU_PROJETO_ID",
    storageBucket: "SEU_PROJETO_ID.appspot.com",
    messagingSenderId: "SEU_SENDER_ID",
    appId: "SEU_APP_ID"
};

let app;
let db;
let auth;

const initializeFirebase = () => {
    app = firebase.initializeApp(firebaseConfig);
    db = firebase.firestore();
    auth = firebase.auth();
};

const signUp = async (email, password) => {
    try {
        const userCredential = await auth.createUserWithEmailAndPassword(email, password);
        return userCredential.user;
    } catch (error) {
        console.error("Erro ao cadastrar:", error);
        throw error;
    }
};

const login = async (email, password) => {
    try {
        const userCredential = await auth.signInWithEmailAndPassword(email, password);
        return userCredential.user;
    } catch (error) {
        console.error("Erro ao fazer login:", error);
        throw error;
    }
};

const logout = async () => {
    try {
        await auth.signOut();
    } catch (error) {
        console.error("Erro ao fazer logout:", error);
        throw error;
    }
};

const getCurrentUser = () => {
    return auth.currentUser;
};

const onAuthStateChanged = (callback) => {
    auth.onAuthStateChanged(callback);
};

const getFirestore = () => {
    return db;
};

export { initializeFirebase, signUp, login, logout, getCurrentUser, onAuthStateChanged, getFirestore };