import Btn from "./btn"
import styles from './ListSelect.module.css'

function ListSelect({FCiclope, FMarvel, FGelo, FAnjo, FFera}) {
   
    return(
        <div>
        <ul className={styles.lista}>
            <li>
                <Btn texto = "Ciclope" onClick= {FCiclope}/>
            </li>
            <li>
                <Btn texto = "Garota Marvel" onClick={FMarvel}/>
            </li>
            <li>
                <Btn texto = "Homem de Gelo" onClick={FGelo}/>
            </li>
            <li>
                <Btn texto = "Fera" onClick={FFera}/>
            </li>
            <li>
                <Btn texto = "Anjo" onClick={FAnjo}/>
            </li>
        </ul>
        </div>

    )
}

export default ListSelect

