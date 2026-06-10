import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function ListadoEmpleados() {

    const urlBase = 'http://localhost:8080/rh-app/empleados';
    const [empleados, setEmpleados] = useState([]);
    
    useEffect(() => {
        cargarEmpleados();
    }, []); //Se le coloca un array vacio para que se ejecute solo una vez al cargar el componente

    const cargarEmpleados = async () => {
        const resultado = await axios.get(urlBase); 
        console.log("Resultado de cargar empleados")
        console.log(resultado.data);
        setEmpleados(resultado.data);
    }

  return (
    <div className="container">
        <div className="container text-center" style={{margin: '30px'}}>
            <h3>Sistema de Recursos Humanos</h3>
        </div>
        <table className="table table-striped table-hover align-middle">
            <thead className="table-dark">
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Apellido</th>
                    <th scope="col">Departamento</th>
                    <th scope="col">Sueldo</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Juan</td>
                    <td>Pérez</td>
                    <td>Recursos Humanos</td>
                    <td>$3000</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}
