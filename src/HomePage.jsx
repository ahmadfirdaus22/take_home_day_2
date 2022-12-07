import React, { useState } from "react";
import { Link, Outlet } from 'react-router-dom';
import Layout from "antd/es/layout/layout";
import { Button } from "antd";
import {useNavigate} from "react-router-dom";
import './HomePage.styling.css'
const { Header, Content, Footer } = Layout;


const HomePage = () => {
    const navigate = useNavigate();
    const [titles, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [todo, setTodo] = useState([]);
    const [ids, setIds] = useState(1);

    const navigateDetail = (id, title ,detail) =>{
        navigate(`${id}`, {state: {titless: title, content: detail}})
    }

    const changeTitle = (e) => {
        setTitle(e.target.value);
    };

    const changeDescription = (e) => {
        setDescription(e.target.value);
    };

    const addTodo = () => {
        if (titles.length === 0 || description.length === 0) {
            return;
        }

        setTitle('');
        setDescription('');
        setIds(ids + 1);
        setTodo([...todo, { id: ids, title: titles, desc: description }]);
        console.log(todo);
    }

    const deleteTodo = (id) =>{
        setTodo(todo.filter(a => a.id !== id))
    }

    return (
        <Layout>
            <div className="div-1">
                <h1 style={{fontSize:'30px'}}>ToDo List</h1>
                {todo.length === 0 ?
                    <textarea cols="60" rows="7" disabled className="textarea-1">You Did't Have any Todo</textarea>
                    :
                    <div className="div-2">{
                        todo.map((todos) => (
                            <div key={todos.id} onClick={() => { navigateDetail(todos.id, todos.title, todos.desc) }}  className="div-3">
                                <h4 className="title-1">{todos.title}
                                <Button onClick={() => {deleteTodo(todos.id)}} className="button-1" type="primary" danger size="large">X</Button></h4>
                            </div>
                        ))}
                    </div>
                }
                <h1 style={{fontSize:'30px'}}>Add ToDo</h1>
                <input type="text" className="input-1"  placeholder="Title Todo" onChange={changeTitle} />
                <textarea typeof="text"  placeholder="Detail Todo" onChange={changeDescription} className="input-2" cols="60" rows="7" />
               <div style={{width:'50vw', margin:'auto'}}>
                <Button type="primary" size="large" onClick={addTodo} block>Add</Button>
               </div>
            </div>
            <Outlet />
        </Layout>

    );
};

export default HomePage;