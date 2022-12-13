class Empleado{
    codigo;
    nombre;
    apellido;
    correo;
    cargo;
    sueldo;
    sueldoBruto(){
        alert(`el sueldo bruto de ${this.nombre} ${this.apellido} es de ${this.sueldo}`)
    };
    descuento(){
        alert("el descuento es de 12.5%")
    };
    sueldoNeto(){
        alert(`el sueldo neto de ${this.nombre} ${this.apellido} es de ${this.sueldo-(this.sueldo*0.125)}`)
    }
}
let jaime = new Empleado()

let cargoempleado = document.getElementById("cargoempleado")

cargoempleado.addEventListener("change",function(){
    let nombre = document.getElementById("nombre")
    jaime.nombre = nombre.value

    let apellido = document.getElementById("apellido")
    jaime.apellido = apellido.value

    let correo = document.getElementById("correo")
    jaime.correo = correo.value

    let seleccionado = this.options[cargoempleado.selectedIndex]
    let cargo = seleccionado.value
    jaime.cargo = cargo
    switch (jaime.cargo) {
        case "value1":
            jaime.sueldo = 5000
            break;
        case "value2":
            jaime.sueldo = 4000
            break;
        case "value3":
            jaime.sueldo = 3000
            break;
        case "value4":
            jaime.sueldo = 2000
            break;
        case "value5":
            jaime.sueldo = 1500
            break;
        default:
            break;
    }
    jaime.sueldoBruto()
    jaime.sueldoNeto()
    jaime.descuento()
})