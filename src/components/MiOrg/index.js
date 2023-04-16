import { useState } from "react";
import "./MiOrg.css"

const MiOrg = () => {

    const [nombre, actualizarNombre] = useState("Harland")
    const [mostrar, actualizarMostrar] = useState(true)

    const manejarClick = () => {
        console.log("Mostrar elemento" + mostrar);
        actualizarMostrar(!mostrar)
    }
    return <section className="orgSection">
        <h3 className="title">Mi organización {nombre}</h3>
        <img src="/img/add.png" alt="add" onClick={manejarClick}/>
    </section>
}

export default MiOrg;