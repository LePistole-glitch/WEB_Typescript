import { materias } from "./materias";
import { profesor } from "./profesor";

export class generarhorario {
    static traermateriasprofe(materias2:materias[], profesor2:profesor){
        //
        let guardarMaterias: materias [] = []
        profesor2.materiasImpartir.forEach(p=>{
            //debugger
            //console.log(p)
            let materias3:materias [] = materias2.filter(m=>{
                if(m.clave_mat===p && !m.asignada){
                    return m
                }else {
                    return
                }
            })
            //desempaqueta el array e ingresa materia por materia
            guardarMaterias.push(...materias3)
        })
        return guardarMaterias
    }

    // la funcion solo recibe una materia y un profesor
    static coincidematerias(materiasCoincide: materias, profesorCoincide: profesor){
        
        let checkHora = true
        //let materiasCoincide1: materias [] = [];
        //console.log(materiasCoincide)
        
        //Horarios de Materias
        //const hIP = new Date(`1970-01-01T${rango.horaInicio}`);
        const horaIniMatLunes = new Date(`1970-01-01T${materiasCoincide.horasDispoMat[1].Lunes.HoraInicio}`);
        const horaFinMatLunes = new Date(`1970-01-01T${materiasCoincide.horasDispoMat[1].Lunes.HoraFin}`);

        const horaIniMatMartes = new Date(`1970-01-01T${materiasCoincide.horasDispoMat[2].Martes.HoraInicio}`);
        const horaFinMatMartes = new Date(`1970-01-01T${materiasCoincide.horasDispoMat[2].Martes.HoraFin}`);

        const horaIniMatMiercoles = new Date(`1970-01-01T${materiasCoincide.horasDispoMat[3].Miercoles.HoraInicio}`);
        const horaFinMatMiercoles = new Date(`1970-01-01T${materiasCoincide.horasDispoMat[3].Miercoles.HoraFin}`);

        const horaIniMatJueves = new Date(`1970-01-01T${materiasCoincide.horasDispoMat[0].Jueves.HoraInicio}`);
        const horaFinMatJueves = new Date(`1970-01-01T${materiasCoincide.horasDispoMat[0].Jueves.HoraFin}`);

        const horaIniMatViernes = new Date(`1970-01-01T${materiasCoincide.horasDispoMat[4].Viernes.HoraInicio}`);
        const horaFinMatViernes = new Date(`1970-01-01T${materiasCoincide.horasDispoMat[4].Viernes.HoraFin}`);
        
        //Horarios de Profesores     
        const horaIniProfLunes = new Date(`1970-01-01T${profesorCoincide.horasDisponibles[1].Lunes.HoraInicio}`);
        const horaFinProfLunes = new Date(`1970-01-01T${profesorCoincide.horasDisponibles[1].Lunes.HoraFin}`);
        
        const horaIniProfMartes = new Date(`1970-01-01T${profesorCoincide.horasDisponibles[2].Martes.HoraInicio}`);
        const horaFinProfMartes = new Date(`1970-01-01T${profesorCoincide.horasDisponibles[2].Martes.HoraFin}`);

        const horaIniProfMiercoles = new Date(`1970-01-01T${profesorCoincide.horasDisponibles[3].Miercoles.HoraInicio}`);
        const horaFinProfMiercoles = new Date(`1970-01-01T${profesorCoincide.horasDisponibles[3].Miercoles.HoraFin}`);

        const horaIniProfJueves = new Date(`1970-01-01T${profesorCoincide.horasDisponibles[0].Jueves.HoraInicio}`);
        const horaFinProfJueves = new Date(`1970-01-01T${profesorCoincide.horasDisponibles[0].Jueves.HoraFin}`);
        
        const horaIniProfViernes = new Date(`1970-01-01T${profesorCoincide.horasDisponibles[4].Viernes.HoraInicio}`);
        const horaFinProfViernes = new Date(`1970-01-01T${profesorCoincide.horasDisponibles[4].Viernes.HoraFin}`);

        //console.log(horaFinMatLunes)
        

        checkHora = (horaIniMatLunes>=horaIniProfLunes && horaFinMatLunes<=horaFinProfLunes) &&
                    (horaIniMatMartes>=horaIniProfMartes && horaFinMatMartes<=horaFinProfMartes) &&
                    (horaIniMatMiercoles>=horaIniProfMiercoles && horaFinMatMiercoles<=horaFinProfMiercoles) &&
                    (horaIniMatJueves>=horaIniProfJueves && horaFinMatJueves<=horaFinProfJueves) &&
                    (horaIniMatViernes>=horaIniProfViernes && horaFinMatViernes<=horaFinProfViernes)

        //console.log(checkHora)
        return checkHora
    }

    // Funcion que recibe el arreglo de maestros y arreglo de materias para generar el Horario
    static generaHorario(materiasGenera: materias[], profesorGenera: profesor[]){
        //Dia, Grupo, Horas Jornada, Hora Inicio, Hora Fin, Materia, Nombre del Profesor 
        let guardaHorario: any[]=[]
        
        //let guardaHorario: materias [] = []
        //debugger
        profesorGenera.forEach(h=>{
            let aux: materias[] = this.traermateriasprofe(materiasGenera, h)
            //console.log(aux)
            //Se van a guardar las materias que ya se fueron asignando
            let matProf: materias[] = []
            
            //debugger
            for(let j=0; j<aux.length; j++){
                //console.log(j)
                
                    //console.log(j)
                    //Some retorna verdad si alguno de los elementos del arreglo cumpla con la condicion
                    //debugger
                    debugger
                    if(!matProf.find(n=>(this.verificaMat(n, aux[j]))) && this.coincidematerias(aux[j], h))
                    {
                        aux[j].asignada = true
                        matProf.push(materiasGenera[j])
                        guardaHorario.push({...aux[j], ProfesorAsignado: h.ap_paterno + " " + h.ap_materno +" "+ h.nombres})
                        materiasGenera[j].asignada=true
                    }
                
            }
            //console.log(materiasGenera)
        })
        return guardaHorario
    }

    // funcion para verificar que las materias no crucen 
    static verificaMat(materia1: materias, materia2: materias){

        // la variable se iguala a una condicion y regresa true o false
        
        const lunes = materia1.horasDispoMat[1].Lunes.HoraInicio===materia2.horasDispoMat[1].Lunes.HoraInicio
        const martes = materia1.horasDispoMat[2].Martes.HoraInicio===materia2.horasDispoMat[2].Martes.HoraInicio
        const miercoles = materia1.horasDispoMat[3].Miercoles.HoraInicio===materia2.horasDispoMat[3].Miercoles.HoraInicio
        const jueves = materia1.horasDispoMat[0].Jueves.HoraInicio===materia2.horasDispoMat[0].Jueves.HoraInicio
        const viernes = materia1.horasDispoMat[4].Viernes.HoraInicio===materia2.horasDispoMat[4].Viernes.HoraInicio


        return lunes && martes && miercoles && jueves && viernes
            
    }
}    