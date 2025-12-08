import CCiclope from "../images/C_Ciclope.png"
import CWolverine from "../images/C_Wolverine.png"
import CTempestade from "../images/C_Tempestade.png"
import CColossus from "../images/C_Colossus.png"
import CNoturno from "../images/C_Noturno.png"
import styles from "./Selectperson.module.css"

function Selectperson({FCiclope, FWolverine, FTempestade, FNoturno, FColossus}){

    return(
        <div className={styles.select}>
        <img src={CCiclope} className={styles.sprite} onClick={FCiclope}/>
        <img src={CWolverine} className={styles.sprite} onClick={FWolverine}/>
        <img src={CTempestade} className={styles.sprite} onClick={FTempestade}/>
        <img src={CNoturno} className={styles.sprite} onClick={FNoturno}/>
        <img src={CColossus} className={styles.sprite} onClick={FColossus}/>
        </div>
    )
}

export default Selectperson