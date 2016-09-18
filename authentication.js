(function() {

    var config = {
        apiKey: "AIzaSyCV43NJfQz3S3GZuZuNMxuO9DhA43gH_Ko",
        authDomain: "testproject-2fff1.firebaseapp.com",
        databaseURL: "https://testproject-2fff1.firebaseio.com",
        storageBucket: "",
        messagingSenderId: "180806269018"
    };
    firebase.initializeApp(config);

    // Get elements from document object model.

    const txtEmail;
    const txtPassword;
    const btnLogin;
    const btnSignUp;
    const btnLogout;

    // Add login event

    btnLogin.addEventListener('click', e => {

        const email = txtEmail.value;
        const pass = txtPassworld.value;
        const auth = firebase.auth();

        auth.signInWithEmailAndPassword(email, password);
        promise.catch(e => console.log(e.message)); // If no user then logs to the console.
    });

    // Add signup event

    btnSignUp.addEventListener('click' , e =>{

        const email = txtEmail.value;
        const pass = txtPassworld.value;
        const auth = firebase.auth();

        auth.createUserWithEmailAndPassword(email, password);
        promise.catch(e => console.log(e.message));

    });

    btnLogout.addEventListener('click', e => {

        firebase.auth().signOut();
    });


    // Add a realtime listener

    firebase.auth().onAuthStateChanged(firebaseUser => {

        if(firebaseUser){
            console.log(firebaseUser);
        }
        else{
            console.log('Not logged in');
        }
    });

}());