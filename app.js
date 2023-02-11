function greet(){
    console.log("Hello");

}
let logGreeting = (miParametro) => miParametro();

logGreeting(greet);

//Functions expression created on the fly

let logGreetings = (miParametro) => miParametro();
logGreeting(function(){
    console.log("Hello from a function created on the fly");
});

//Interpolación de strings "clasica"
let logGreeting1 = (miNombre, miColor) => {
    console.log("Hola " + miNombre + " buenos dias! Tu color favorito es el " + miColor);
}

logGreeting1("Sofia", "rosa");

//Template strings
let color = "rosa";
let talla = "M";
let modelo = "Clasica";

console.log("Sofia tiene una playera talla" + talla + "de color" + color + "modelo" + modelo);
console.log(`Sofia tiene una playera 
talla ${talla}
de color ${color} 
modelo ${modelo}`);
