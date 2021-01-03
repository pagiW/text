import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { make } from '../actions';
import '../styles/form.css';

const Form = ({ history, make }) => {
    let [form, setForm] = useState({});
    const handleSubmit = (e) => {
        e.preventDefault();
        make(form);
        history.push('/text');
    }
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }
    useEffect(() => {
        document.title = 'form';
    }, [])
    return (
        <main className='form'>
            <form onSubmit={handleSubmit}>
                <label htmlFor='name'>Name</label>
                <input type='text' name='name' id='name' autoComplete='name' placeholder='your name' required onChange={handleChange} />
                <label htmlFor='email'>Email</label>
                <input type='text' name='email' id='email' autoComplete='email' required placeholder='your email' onChange={handleChange} />
                <button>create my user</button>
                {form.name ? <p>{form.name}</p>: <p>your name</p>}
                {form.email ? <p>{form.email}</p>: <p>your email</p>}
            </form>
        </main>
    );
}

const mapDispatchToProps = {
    make
}

export default connect(null, mapDispatchToProps)(Form);