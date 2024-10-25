import { useState, useEffect  } from 'react'
import React from "react";
import "./card.css";

export default function Card({}) {

    const [show, setShow] = useState(true)

    const handleShow = () => {
        setShow(!show)
    }

    return (
        <div className="card">
            {show ? <h3> title unda waishalos xo?</h3> : null}
            <img src="./assets/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvam9iNjgwLTE2Ni1wLWwxZGJ1cTN2LnBuZw.webp" alt="" width={130} />
            <h2>description: its good</h2>
            <button onClick={handleShow}>hide/show</button>
        </div>
    )
}