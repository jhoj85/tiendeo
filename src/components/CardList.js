import React, {useState,useEffect} from 'react'
import axios from 'axios';
import tiendeo from '../img/tiendeo.jpg'


export default function CardList({handleSelect,update}) {
    const [cards, setCards] =useState([]);


useEffect(()=>{
    getCard();
},[update])



const getCard = async () => {
    const res = await axios.get('http://localhost:5000/api/cards');
    setCards(
        res.data
    );
    
}


const deleteCard = async (cardId) => {
    const response =window.confirm('Estas seguro que desea eliminar ?');
    if (response) {
        await axios.delete('http://localhost:5000/api/cards/' + cardId);
        getCard();
    }
}

const editar = (id, titulo, descrip, url)=>{
    handleSelect(id, titulo, descrip,url);
}


    return (
        <>

            {
                cards.map(user =>{
                    if(user.url == ''){
                        return (
                       <div className="cards" key={user._id} onDoubleClick={()=> deleteCard(user._id)} >
                            {/* <a onClick={()=> editar(user._id,user.titulo,user.descripcion,user.url)}>Edit</a> */}
                            <div className="container-btn">
                            <button className="btn" onClick={()=> editar(user._id,user.titulo,user.descripcion,user.url)}>Edit</button>
                            <button className="btn" onClick={()=> deleteCard(user._id)}>X</button>
                            </div>
                            <h2>{user.titulo}</h2>
                            <img className="card-img" src={tiendeo} alt="" />
                            <span>{user.descripcion} </span>
                         </div> 
                            )
                    }else{
                        return (
                        <div className="cards" key={user._id} onDoubleClick={()=> deleteCard(user._id)} >
                            <div className="container-btn">
                            <button className="btn" onClick={()=> editar(user._id,user.titulo,user.descripcion,user.url)}>Edit</button>
                            <button className="btn" onClick={()=> deleteCard(user._id)}>X</button>
                            </div>
                            <h2>{user.titulo}</h2>
                            <img className="card-img" src={user.url} alt="" />
                            <span>{user.descripcion} </span>
                         </div> 
                            )
                    }
                })
            }
            
             
        </>
    )
}
