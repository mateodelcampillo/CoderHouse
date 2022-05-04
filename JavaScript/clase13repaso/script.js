// let caja = document.querySelector(".caja")
// fetch("https://rickandmortyapi.com/api/character/2")
// .then((response)=>response.json())
// .then((data)=>{console.log(data)
   
//     });
const formCaja = document.querySelector(".caja")
const inputNombre = document.querySelector(".nusquedaPorNombre")
const inputId = document.querySelector(".busquedaPorId")
 const escucharInput = ()=>{
     inputId.addEventListener(("input") ()=>{
         inputNombre.value = "";
     })
    }       
