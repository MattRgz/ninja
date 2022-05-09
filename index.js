class Ninja{
    constructor(nombre,salud){
        this.nombre = nombre;
        this.salud = salud;
        this.velocidad = 3;
        this.fuerza = 3;
    }
    sayName(){
        console.log(this.nombre)
    }
    showStats(){
        let stats = {
            nombre: this.nombre,
            fuerza: this.fuerza,
            velocidad: this.velocidad,
            salud: this.salud,
        }
        console.log(stats)
    }
    drinkSake(){
        this.salud+=10;
    }
}
const mati = new Ninja("Matias",200);
mati.sayName();
mati.drinkSake();
mati.showStats();