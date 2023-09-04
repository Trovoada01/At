function Atividade(props) {
    const v = props.v

    if (v == 1) {
        return (
            <img src={ require('../imgs/1.jpg') } alt="1" title="1"/>
        )
    }
    else if (v == 2) {
        return (
            <img src={ require('../imgs/2.jpg') } alt="2" title="2"/>
        )
    }
    else if (v == 3) {
        return (
            <img src={ require('../imgs/3.jpg') } alt="3" title="3"/>
        )
    }

}

export default Atividade