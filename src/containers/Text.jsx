import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { create } from '../actions';
import Card from '../components/Card';
import '../styles/text.css';

const Text = ({txt, create, number, user}) => {
    let [empty, setEmpty] = useState('');
    const [text, setText] = useState({
        mytxt: '',
    });
    const [isUser, setUser] = useState(true);
    const handleClick = () => {
        if (Object.keys(user).length > 0) {
            if (text.mytxt.length > 0) {
                create({mytxt: text.mytxt, id: number});
                setText({mytxt: ''});
                setEmpty('');
            } else {
                setEmpty('Your text is empty!');
            }
        } else {
            setUser(false);
        }
    }
    document.onkeyup = (e) => {
        if (e.key === 'Enter') {
            if (Object.keys(user).length > 0) {
                if (text.mytxt.length > 0) {
                    create({mytxt: text.mytxt, id: number});
                    setText({mytxt: ''});
                    setEmpty('');
                } else {
                    setEmpty('Your text is empty!');
                }
            } else {
                setUser(false);
            }
        }
    }
    useEffect(() => {
        document.title = 'text';
    }, []);
    return (
            <main className='text'>
                <section className='user-sec'>
                    {Object.keys(user).length > 0 ? <><h1>{user.name}</h1>
                    <h2>{user.email}</h2></>: <h1>your user</h1>}
                </section>
                <section className='write'>
                    <input type='text' value={text.mytxt} placeholder='write' onChange={(e) => setText({
                            mytxt: e.target.value
                        })} />
                    <button className='send' onClick={handleClick}></button>
                </section>
                {text.mytxt.length > 0 && <article><Card text={text.mytxt} id={number} del={false} /></article>}
                <h1>Your Text:</h1>
                {!isUser && <h1 style={{color: 'red'}}>You don't have an user, <Link to='/text/form' style={{color: 'purple'}}>create the yours!</Link></h1>}
                {txt.length === 0 && <h1 style={{color: 'red'}}>Write some text!</h1>}
                <h1 style={{color: 'red'}}>{empty}</h1>
                <section className='yourtext'>
                    {txt.map(text => <Card text={text.mytxt} id={text.id} del={true} {...user} />)}
                </section>
            </main>
    );
}

const mapStateToProps = state => ({
    txt: state.txt,
    number: state.number,
    user: state.user,
});

const mapDispatchToProps = {
    create
}

export default connect(mapStateToProps, mapDispatchToProps)(Text);