class Coche  {
        
    constructor(modelo, velocidad, antiguedad){
        this.modelo = '';
        this.velocidad = '';
        this.antiguedad = '';
    }

    aumentarVelocidad(){
        this.velocidad += 1;
    }

    reducirVelocidad(){
        this.velocidad -= 1;
    }


}