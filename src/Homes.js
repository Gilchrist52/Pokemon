import React, { useState} from 'react';
import "./Home.css";
import { FaImages, FaRegEdit } from 'react-icons/fa';
import { AiFillDelete, AiFillProfile } from 'react-icons/ai';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import Modales from './Modales'
import Images from './Images';


const Homes = () => {
    const [showModal, setShowModal] = useState(false);
    const [search, setSearch] = useState("");

    const SearchInput = (e) => {
        setSearch(e.target.value)
    }

    return (
        <div>
            <Form className='Containerfrm'>
               <div className='frm'>
                <h4>AJOUTEZ UN NOUVEAU POKEMON</h4>
                <br/>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Nom Pokemon"
                        className="mb-3"
                    >
                        <Form.Control type="text" name="name" />
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="HP"
                        className="mb-3"
                    >
                        <Form.Control type="number" name="hp"/>
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="CP"
                        className="mb-3"
                    >
                        <Form.Control type="number"  name="cp"/>
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="picture"
                        className="mb-3"
                    >
                        <Form.Control type="text" name="picture"/>
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="types"
                        className="mb-3"
                    >
                        <Form.Control type="text" name="types"/>
                    </FloatingLabel>
               </div>
                <Button 
                    type='submit'
                    className="mt-4" 
                    variant="outline-success" 
                >
                    Ajouter
               </Button> 
            </Form>

            

            <div className='container'>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Search...."
                    className="mb-3 w-75"
                >
                    <Form.Control 
                        type="search"
                        name="search" 
                        onChange={SearchInput}
                    />
                </FloatingLabel>
                <div className='containerbody'>
                {
                    Images.filter((item)=> {
                        if(search ==="") {
                            return item
                        } else if (item.nom.toLowerCase().includes(search.toLowerCase())) {
                            return item
                        }
                    })
                     .map( (item) => (
                        <div key={item.id} className='pokemonbody'>
                            <div className='pokemonimg'>
                                <img src={item.image} alt="img"/>
                            </div>
                            <div className='pokemoninfo'>
                                <h2>{item.nom}</h2>
                                <p>{item.date}</p>
                                <button style={{backgroundColor: "#FF9966"}}>{item.type[0]}</button>
                                {
                                    item.type[1] ? <button style={{backgroundColor: "#A9DFBF"}}>{item.type[1]}</button> : ""
                                }
                            </div>
                            <div className='absolute'>
                                <div className='icons' onClick={() => {setShowModal(true)}} style={{backgroundColor: "#7DCEA0 "}}>
                                    <AiFillProfile size="22px" color='#FFFFFF' />
                                </div>
                                <div className='icons' style={{backgroundColor: "#F7DC6F"}}>
                                    <FaRegEdit size="22px" color='#FFFFFF' />
                                </div>
                                <div className='icons' style={{backgroundColor: "#EC7063"}}>
                                    <AiFillDelete size="22px" color='#FFFFFF' />
                                </div>
                            </div>
                            
                        </div>
                    )) 
                } 
                </div>
            </div>
            <Modales
                show={showModal}
                onHide={() => setShowModal(false)}
            >
                 <h3 style={{textAlign: "center"}}>POKEMON</h3>
            </Modales>
      </div>
    );
};

export default Homes;