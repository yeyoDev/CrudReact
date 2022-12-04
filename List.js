import React from 'react'
import { Link } from "react-router-dom";

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = { datosCargados: false, empleados:[] }
    }
    
    borrarDatos = (id) => {
        
        fetch("http://localhost/empleados/?borrar="+id)
            .then(respuesta => respuesta.json())
            .then((datosRespuesta) => {
                
                console.log(datosRespuesta);
                this.cargarDatos();

            })
            .catch(error => console.log("Error", error))

    }

    cargarDatos() {
        
        fetch("http://localhost/empleados/")
            .then(respuesta => respuesta.json())
            .then((datosRespuesta) => {
                
                console.log(datosRespuesta);
                this.setState({ datosCargados: true, empleados:datosRespuesta})

            })
            .catch(console.log)

    }

    componentDidMount() {
        this.cargarDatos();
    }

    

    render() {

        const { datosCargados, empleados } = this.state
        
        

        if (!datosCargados) { return (<div>Cargando...</div>) }
        else {
            return (
                    <>
                    <div className="card">
                    <div className="card-header">
                        <Link className="btn btn-success" to={"/Create"}>Agrega nuevo empleado</Link>
                    </div>
                    <div className="card-body">
                            {empleados.length > 0 ?
                            <>
                            <h4>Lista de empleados</h4>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Nombre</th>
                                        <th>Correo</th>
                                        <th>Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {empleados.map(
                                        (empleado) => (
                                        <tr key={empleado.Id}>
                                            <td>{empleado.Id}</td>
                                            <td>{empleado.nombre}</td>
                                            <td>{empleado.correo}</td>
                                            <td>
                                                <div className="btn-group" role="group" aria-label="">
                                                    <Link className="btn btn-warning" to={"/editar/" + empleado.Id} state={empleado}>Editar</Link>
                                                    <button type="button" className="btn btn-danger" onClick={()=>this.borrarDatos(empleado.Id)}>Borrar</button>
                                                </div>
                                            </td>
                                        </tr> 
                                        )
                                    )}
                                </tbody>
                            </table>    
                            </>
                            : <h4>No hay empleados por mostrar. Agregue uno nuevo.</h4>
                        }
                </div>
                <div className="card-footer text-muted">
                </div>
                </div>
                </>
                );
        }
    }
}
 
export default List;

