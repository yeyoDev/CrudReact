import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from "react-router-dom";

const Editar = () => {
    let location = useLocation();
    const [nombre, setNombre] = useState("")
    const [correo, setCorreo] = useState("")
    const [id, setId] = useState(0)
    const navigate = useNavigate()

    useEffect(() => {
        let empleado = location.state
        
        setNombre(empleado.nombre)
        setCorreo(empleado.correo)
        setId(empleado.id)
    }, [])
    
    const changeNombre = (event) => {
        console.log("Event:",event.target)
        setNombre(event.target.value)
    }
    const changeCorreo = (event) => {
        console.log("Event:",event.target)
        setCorreo(event.target.value)
    }

    const editarEmpleado = (event) => {
        event.preventDefault()
        fetch("http://localhost/empleados/?actualizar="+id, {
            method: "POST",
            body: JSON.stringify({
                id: id,
                nombre: nombre,
                correo: correo,
            })
        })
        .then(respuesta => respuesta.json())
        .then((datosRespuesta) => {
            console.log(datosRespuesta);
            navigate("/")
            
        })
        .catch(console.log)
    }
    
    console.log(location.state)
    return (
        <div className="card">
            <div className="card-header">
                Editar empleados
            </div>
            <div className="card-body">
                <br></br>
                {nombre}
                <br></br>
                {correo}
                <br></br> 

                <form onSubmit={editarEmpleado}>
                        <div className="form-group">
                          <label htmlFor="">Nombre</label>
                        <input type="text" name="nombre" value={nombre} id="nombre" className="form-control" placeholder="" aria-describedby="helpId" onChange={changeNombre}/>
                          <small id="helpId" className="text-muted">Escribe el nombre del empleado</small>
                        </div>

                        <div className="form-group">
                          <label htmlFor="">Correo</label>
                          <input type="text" name="correo" value={correo} id="correo" className="form-control" placeholder="" aria-describedby="helpId" onChange={changeCorreo}/>
                          <small id="helpId" className="text-muted">Escribe el correo del empleado</small>
                        </div>

                        <div className="btn-group" role="group" aria-label="">
                            <button type="Submit" className="btn btn-success">Agrega nuevo empleado</button>
                        </div>
                </form>

            </div>
            <div className="card-footer text-muted">

            </div>
        </div>
    );
    
}
 
export default Editar;