var firebaseConfig = {
  apiKey: "AIzaSyDI_4p5G369yGswNITlzhfwvUeUY2iu_c0",
  authDomain: "prlgalletas.firebaseapp.com",
  databaseURL: "https://prlgalletas.firebaseio.com",
  projectId: "prlgalletas",
  storageBucket: "prlgalletas.appspot.com",
  messagingSenderId: "257934401429",
  appId: "1:257934401429:web:a0349d723ff995c2ac609c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function crear() {

    try {

        // Obtengo los datos del formulario
        var nombre = $('#nombre').val();
        var precio = $('#precio').val();
        var stock = $('#stock').val();

       // Hacemos referencia a Firebase Realtime Database
       var database = firebase.database();

       // Defino la ruta '/postres' en la base de datos Realtime Database
       const ref = database.ref('postres').push();

        ref.set({
          nombre: nombre,
          precio: precio,
          stock: stock,
        });

    }

    catch(err) {
        console.log(err);
    }

}
