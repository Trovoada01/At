import React from "react";

function Evento() {
    function ev1() {
        console.log("AAAAAAAAAAAAAAAAA");
        alert("AAAAAAAAAAAAAAAAA")
    }
    function ev2() {
        console.log("BBBBBBBBBBBBBBBBB");
        alert("BBBBBBBBBBBBBBBBB")
    }
    return (
        <div>
            <button onClick={ev1}>A</button>
            <button onClick={ev2}>B</button>
        </div>
    );
}

export default Evento;