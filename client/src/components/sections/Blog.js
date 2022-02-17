import React from "react";
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Popup from 'reactjs-popup';
//import 'reactjs-popup/dist/index.css';
import styled from "styled-components";



const Blog = ({ owner, description, title, Category, id }) => {
    id = btoa(id);

    const [flag, setFlag] = useState('');
    const [response, setResponse] = useState('');
    const [verif, setVerif] = useState(true);




    const check = () => {


        axios.get(`http://127.0.0.1:8000/api/Flag/${id}/${flag}`)
            .then(res => {
                if (res.data.state === "success")
                    window.location.href = `/Blogs/${id}`;

                else
                    setVerif(false);
            })

    }

    return (


        /*   <div className="tiles-item reveal-from-middle" data-reveal-delay="200" > */
        <div className="tiles-item " data-reveal-delay="200">
            <div className="tiles-item-inner" >{owner}
                <div className="testimonial-item-content" >
                    <p style={{ width: "200px", color: "whitesmoke", wordWrap: "break-word" }}>
                        {description}
                    </p>

                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                    <span className="testimonial-item-name text-color-high">{title}</span>
                    <span className="testimonial-item-link"><Link to={`/Blogs/Category/${Category}`} className="text-color-low">/ {Category}</Link>
                    </span>
                    <br />
                    <Popup trigger={<div className="btne from-top">see more</div>}>
                        <input onChange={event => setFlag(event.target.value)} type="text" name="flag" className="form-control" placeholder="you need to enter the flag first" required style={{ backgroundColor: "whitesmoke", borderRadius: "5px" }} />

                        <Link onClick={check} style={{ color: verif ? '#4a6e1f' : "red" }}>Check </Link>
                    </Popup>

                </div>

            </div>

        </div >


    )
}





export default Blog;