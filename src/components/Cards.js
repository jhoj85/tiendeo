import React, {useState} from 'react';
import Modal from './Modal';
import CardList from './CardList';
//import { update } from '../models/Card';

export default function Cards(props) {
    const [show, setShow]=useState(false);
    const [editar, setEditar] =useState('')
    const [update, setUpdate] =useState('')


const handleModal = ()=>{
    setShow(true)
}

const handleSelect =(id,titulo,descrip,url)=>{
    setShow(true)
    setEditar({
        id,
        titulo,
        descrip,
        url
    })
}

const refresh =(callBack)=>{
    setUpdate(callBack)

}


    return (
        <div>
            {show == true ? <Modal refresh={refresh} editar={editar} /> : null}
            <div className="container-cards">
                    <CardList update={update} handleSelect={handleSelect}/>
                <div>
                    <span onClick={handleModal} className="agregar">+</span>
                </div>

            </div>
        </div>
    )
}
