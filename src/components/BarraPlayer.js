import styles from './BarraPlayer.module.css'
import Globais from '../Globais'
import { useEffect } from 'react'

function BarraPlayer({ char, vida, energia, setvida, setenergia, mododef }) {

  var chave = Globais.personagens.findIndex(e => e.nome === char)
  const player = Globais.personagens[chave]

  useEffect(() => {
    if (player) {
      setvida(player.vidatotal); // só executa depois que o componente renderiza
    }
  }, []);

  useEffect(() => {
    if (player) {
      setenergia(player.energiainicial); // só executa depois que o componente renderiza
    }
  }, []);


  if (!player) return null;


  return (<>
    <div className={styles.barra}>

      <div className={styles.vida}>
        <div style={{ width: vida * 300 / player.vidatotal + "px" }}> </div>
      </div>

      <div className={styles.energia}>
        <div style={{ width: energia * 300 / player.energiatotal + "px" }}
          className={energia >= player.especialEner ? styles.eon : styles.eoff}> </div>
      </div>

      <div className={styles.textobarra}>
        <p>Vida: {vida}/{player.vidatotal} </p>
        <p>Energia: {energia}/{player.energiatotal} </p>
      </div>




    </div>

    <img src={player.foto} alt="foto do jogador" className={mododef === true ? styles.defesa : styles.schosed} />





  </>

  )
}

export default BarraPlayer
