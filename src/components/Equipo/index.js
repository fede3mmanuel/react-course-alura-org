import './Equipo.css'
const Equipo = (props) => {
    return <section className="equipo">
        <h3>{props.equipo}</h3>
        <div className="solaboradores"></div>
    </section>
}

export default Equipo