import ComponenteF from "./componenteF";
import ComponenteV from "./componenteV";

function Verifica(props) {
    const v = props.v

    if (v) {
        return (
            <ComponenteV />
        )
    }
    else {
        return (
            <ComponenteF />
        )
    }
}

export default Verifica