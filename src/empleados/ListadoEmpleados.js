import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { NumericFormat } from 'react-number-format';

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
            <div className="container text-center" style={{ margin: '30px' }}>
                <h3>Sistema de Recursos Humanos</h3>
            </div>
            <table className="table table-striped table-hover align-middle">
                <thead className="table-dark">
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Departamento</th>
                        <th scope="col">Sueldo</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        //Iteramos el arreglo de empleados
                        empleados.map((empleado, indice) => (
                            <tr key={indice}>
                                <th scope="row">{empleado.idEmpleado}</th>
                                <td>{empleado.nombre} {empleado.apellido}</td>
                                <td>{empleado.departamento}</td>
                                <td> <NumericFormat value={empleado.sueldo} displayType={'text'} thousandSeparator={","}
                                prefix={'$'} decimalScale={2} fixedDecimalScale/> </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
