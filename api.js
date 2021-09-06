//GET
/*
const traerInfo = async () => {
  const respuesta = await fetch("https://jsonplaceholder.typicode.com/todos/1");

  const respuestaJson = await respuesta.json();

  return respuestaJson;
};
console.log(traerInfo().then((response) => console.log(response)));

*/
//POST
/*
fetch("https://jsonplaceholder.typicode.com/todos", {
  method: "POST",
  body: JSON.stringify({
    title: "Comida",
    body: "Muy rico",
    userId: 1,
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
*/

const traerInfoPokedex = async () => {
  const respuesta = await fetch("https://pokeapi.co/api/v2/pokemon/2");
  const respuestaJson = await respuesta.json();
  return console.log(respuestaJson);
};

traerInfoPokedex();
