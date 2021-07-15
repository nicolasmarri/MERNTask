import React,{Fragment, useContext, useState} from 'react'
import proyectoContext from '../../context/proyectos/proyectoContext'

const NuevoProyecto = () => {

    //Obtener el state del formulario
    const proyectosContext = useContext(proyectoContext)
    const {formulario, errorFormulario, mostrarFormulario, agregarProyecto, mostrarError} = proyectosContext 

    //State para Proyecto
    const [proyecto, guardarProyecto] = useState({
        nombre:''
    })

    

    //Extraer nombre de proyecto
    const {nombre} = proyecto;
    
    //Lee los contenidos del input
    const onChangeProyecto = e =>{
        guardarProyecto({
            ...proyecto,
        [e.target.name]:e.target.value
        })
    }

    //Cuando el usuario envía un proyecto
    const onsubmitProyecto = e =>{
        e.preventDefault()

        //Validar el proyecto
        if(nombre === '') {
            mostrarError();
            return;
        }

        //Agregar al State
        agregarProyecto(proyecto)

        //Reiniciar el form
        guardarProyecto({
            nombre: ''
        })
    }

    //Mostrar el formulario
    const onClickFormulario = () =>{
        mostrarFormulario()
    }

    return (
        <Fragment>
            <button
                type='button'
                className='btn btn-block btn-primario'
                onClick={onClickFormulario}
            >Nuevo Proyecto</button>

            { formulario ?
                    (
                        <form
                            className='formulario-nuevo-proyecto'
                            onSubmit={onsubmitProyecto}
                        >   
                        <input
                            type='text'
                            className='input-text'
                            placeholder='Nombre Proyecto'
                            name='nombre'
                            value={nombre}
                            onChange={onChangeProyecto}
                        />
        
                        <input 
                            type='submit'
                            className='btn btn-primario btn-block'
                            value='Agregar Proyecto'
                        />
                        </form>        
                    ) : null }
            {errorFormulario ? <p className='mensaje error'>El Nombre del proyecto es Oblgatorio</p> : null}
        </Fragment>
    )
}

export default NuevoProyecto
