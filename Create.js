import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";

const Create = () => {
    const [nombre, setNombre] = useState("")
    const [correo, setCorreo] = useState("")
    const [id, setId] = useState("")
    const navigate = useNavigate()

    const changeNombre = (event) => {
        setNombre(event.target.value)
    }
    const changeCorreo = (event) => {
        setCorreo(event.target.value)
    }
    const changeId = (event) => {
        setId(event.target.value)
    }
    
    const enviarDatos = (e) => {
        e.preventDefault();
        console.log("El formulario fue enviado!");
        console.log(id);
        console.log(nombre);
        console.log(correo);

        var datosEnviar = { id: parseInt(id), nombre: nombre, correo: correo }

        fetch("http://localhost/empleados/?insertar="+id, {
            method: "POST",
            body: JSON.stringify(datosEnviar)
        })
            .then(respuesta => respuesta.json())
            .then((datosRespuesta) => {
                console.log(datosRespuesta);
                navigate("/")
               
            })
            .catch(console.log)
    }

    return ( 
        <div className="card">
            <div className="card-header">
                Empleados
            </div>
            <div className="card-body">
                <form onSubmit={enviarDatos}>
                    <div className="form-group">
                        <label htmlFor="">id</label>
                        <input type="text" name="id" onChange={changeId} value={id} id="id" className="form-control" placeholder="" aria-describedby="helpId" />
                        <small id="helpId" className="text-muted">Escribe el id del empleado</small>
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="">Nombre</label>
                        <input type="text" name="nombre" onChange={changeNombre} value={nombre} id="nombre" className="form-control" placeholder="" aria-describedby="helpId" />
                        <small id="helpId" className="text-muted">Escribe el nombre del empleado</small>
                    </div>

                    <div className="form-group">
                        <label htmlFor="">Correo</label>
                        <input type="text" name="correo" onChange={changeCorreo} value={correo} id="correo" className="form-control" placeholder="" aria-describedby="helpId" />
                        <small id="helpId" className="text-muted">Escribe el correo del empleado</small>
                    </div>

                    <div className="btn-group" role="group" aria-label="">
                        <button type="Submit" className="btn btn-success">Agrega nuevo empleado</button>
                        <Link to={"/"} className="btn btn-cancel">Cancelar</Link>
                    </div>
                </form>
            </div>
            <div className="card-footer text-muted">
                
            </div>
        </div>
    );
}
 
export default Create;