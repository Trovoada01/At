import Eventos  from './componentes/eventos';
import Verifica from './componentes/verifica'
import Verifica_img from './componentes/verifica_img'
import Atividade from './componentes/Atividade';



function App() {

    const Lista = ['A','B','C',]
    const Lista_a = Lista.map(
        (c) => <p>{c}</p>

    )

    return (
        <div className="App">
            {/* <Eventos /> */}
            {/* <Verifica v="True" /> */}
            <div className='cont_img'>
                <Atividade v="2" />
                
            </div>
            
        </div>
    )
}
export default App