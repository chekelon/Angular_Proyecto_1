export class Persona {
    id: number;
    nombre: string;
    apellidos:string;
    edad:number;
    sexo:string;


    setNombre(nombre){
        this.nombre=nombre;
    }
    setApellido(apellido){
        this.apellidos=apellido;
    }
    setEdad(edad){
        this.edad=edad;

    }
    setSexo(sexo){
        this.sexo=sexo
    }



   
  }