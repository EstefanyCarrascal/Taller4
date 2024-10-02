// import React, {useState} from "react";

// const FormularioUsuario = () => {
//     const [nombre, setNombre] = useState('');
//     const [nombreMostrado, setNombreMostrado] = useState('');

//     const manejarCambio = (e) => {
//         setNombre(e.target.value);
//     };

//     const manejarSubmit = (e) => {
//         e.preventDefault();
//         setNombreMostrado(nombre);
//     };

//     return (
//         <div>
//             <form onSubmit={manejarSubmit}>
//             <label htmlFor="nombre">Nombre de usuario:  </label>
//             <input 
//             type="text"
//             id="nombre"
//             value={nombre}
//             onChange={manejarCambio}
//             placeholder="Escribe tu nombre"/>
//             <button type="submit">Mostrar nombre</button>
//             </form>
//             {nombreMostrado && <h2>Nombre ingresado: {nombreMostrado}</h2>}
//         </div>
//     );
// };

// export default FormularioUsuario;
