import React from "react";
import { useLocation, useNavigate } from "react-router-dom";


const DetailTodo = () => {
    const navigate = useNavigate();
    const state = useLocation();
    const navigateBack = () => {
        navigate('/');
    }
    return (
        <>
            <div style={{backgroundColor:'white', width:'50vw', marginLeft:'auto', marginRight:'auto', marginTop:'30px', borderRadius:'10px'}}>
                <div style={{ textAlign: 'center' }}>
                    <h1 style={{backgroundColor:'lightgray'}}>Detail ToDo</h1>
                    <h3>Title</h3>
                    <p>{state.state.titless}</p>
                    <h3>Description</h3>
                    <p>{state.state.content}</p>
                </div>
            </div>
            {/* {state.state.content.length === 0 ? {navigateBack} : null} */}
        </>
    );

}

export default DetailTodo;