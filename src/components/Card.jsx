import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { delet } from '../actions';
import '../styles/card.css';

const Card = ({ text, id, del, delet, name, email }) => {
    let [show, showModal] = useState(false);
    return (
        <div className='card'>
            <h1>{name}</h1>
            <h2>{email}{email && ':'}</h2>
            <p>{text}</p>
            {del && <button onClick={() => {
                showModal(true);
            }}>delete</button>}
            {show && ReactDOM.createPortal(
                <div className='modal'>
                    <div className='modal-card'>
                        <button className='x' onClick={() => showModal(false)}>x</button>
                        <h1 style={{color: 'red'}}>Are you sure?</h1>
                        <button className='card-button' onClick={() => {delet(id); showModal(false)}}>delete</button>
                    </div>
                </div>
            , document.getElementById('modal'))}
        </div>
    );
}

const mapDispatchToProps = {
    delet
}

export default connect(null, mapDispatchToProps)(Card);