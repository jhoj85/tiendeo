import React,{useState} from 'react'
import axios from 'axios';


export default function Modal({editar,refresh}) {
    // //const {editar}=props
    // console.log(editar)
    const [titulo1, setTitulo1]=useState(editar.titulo)
    const [descrip, setDescrip] = useState(editar.descrip)
    const [card, setCard]=useState({
        titulo:'',
        descripcion:'',
        url:''
    });

    const handleNueva =(e)=>{
        setCard({
            ...card,
            [e.target.name]: e.target.value
        })
    }
    
    const updateTitulo =(e)=>{
        setTitulo1(e.target.value)
    }

    const updateDescrip =(e)=>{
        setDescrip(e.target.value)
    }


const onSubmit = async (e) =>{
    e.preventDefault();
    await axios.post('http://localhost:5000/api/cards', {
        titulo: card.titulo,
        descripcion: card.descripcion,
        url: card.url  
    });
    setCard({
        titulo:'',
        descripcion:'',
        url:''
    })
    refresh(card.descripcion);

}

const onUpdate = async (id)=>{
    
     await axios.put('http://localhost:5000/api/cards/'+ id, {
        titulo: titulo1,
        descripcion: descrip,
        url: editar.url
    });
}


    return (
        <div>
            {
                editar.id != null ?  <div className="container-modal">
                <form action="" onSubmit={onUpdate(editar.id)} className="form">
                   <div className="input-container">
                   <h2 className="title">Nueva Tarjeta</h2>
                   <label htmlFor="">Titulo</label>
                    <input onChange={updateTitulo} className="input-modal" value={titulo1} name="titulo" placeholder={editar.titulo} type="text" />
                    <label htmlFor="">Descripcion</label>
                    <input onChange={updateDescrip} className="input-modal" value={descrip} name="descripcion" placeholder={editar.descrip}  type="text" />
                    <button type="submit" className="btn-modal">Modificar</button>
                    {/* <button type="submit" className="btn-modal">Cerrar</button> */}
                   </div>
                </form>
            </div>: 
            <div className="container-modal">
                <form action="" onSubmit={onSubmit} className="form">
                   <div className="input-container">
                   <h2 className="title">Nueva Tarjeta</h2>
                    <input onChange={handleNueva} required className="input-modal" value={card.titulo} name="titulo" placeholder="Titulo" type="text" />
                    <input onChange={handleNueva} required  className="input-modal" value={card.descripcion} name="descripcion" placeholder="Descripcion" type="text" />
                    <input onChange={handleNueva} className="input-modal" value={card.url} name="url" placeholder="Imagen (Url)" type="text" />
                    <button type="submit" className="btn-modal">Añadir</button>
                   </div>
                </form>
            </div>
            }

            
        </div>
    )
}
