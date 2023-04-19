import Colaborador from '../Colaborador'
import './Equipo.css'
const Equipo = (props) => {

    const {colorPrimario, colorSecundario, titulo} = props.datos

    const obj = {
        backgroundColor: colorSecundario
    }

    return <section className="equipo" style={ obj }>
        <h3 style={{ borderColor: colorPrimario }}>{titulo}</h3>
        <div className="solaboradores">
            <Colaborador/>        </div>
    </section>
}

export default Equipo