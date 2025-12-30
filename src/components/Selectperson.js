import CCiclope from "../images/C_Ciclope.png"
import CWolverine from "../images/C_Wolverine.png"
import CTempestade from "../images/C_Tempestade.png"
import CColossus from "../images/C_Colossus.png"
import CNoturno from "../images/C_Noturno.png"
import styles from "./Selectperson.module.css"

function Selectperson({ FCiclope, FWolverine, FTempestade, FNoturno, FColossus }) {

    return (
        <div className={styles.select}>

            <div>
                <img src={CCiclope} className={styles.sprite} onClick={FCiclope} alt="Ciclope" />
                <p>Ciclope</p>
            </div>

            <div>
                <img src={CWolverine} className={styles.sprite} onClick={FWolverine} alt="Wolverine" />
                <p>Wolverine</p>
            </div>

            <div>
                <img src={CTempestade} className={styles.sprite} onClick={FTempestade} alt="Tempestade" />
                <p>Tempestade</p>
            </div>

            <div>
                <img src={CNoturno} className={styles.sprite} onClick={FNoturno} alt="Noturno" />
                <p>Noturno</p>
            </div>

            <div>
                <img src={CColossus} className={styles.sprite} onClick={FColossus} alt="Colossus" />
                <p>Colossus</p>
            </div>

        </div>
    )
}

export default Selectperson