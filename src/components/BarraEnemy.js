import styles from './BarraEnemy.module.css'
import Globais from '../Globais'
import { useEffect } from 'react'

function BarraEnemy({enemy,vida,energia,setvida,setenergia,mododef}){

    var chave = Globais.personagens.findIndex(e=> e.nome === enemy)
    const cenemy = Globais.personagens[chave]

    useEffect(()=>{
        if(cenemy){
            setvida (cenemy.vidatotal)
        }
    },[])

    useEffect(()=>{
        if(cenemy){
            setenergia (cenemy.energiainicial)
        }
    },[])

    if (!cenemy) return null

    return(<>
        <div className={styles.barra}>

        <div className={styles.vida}> 
            <div style={{width: vida * 300 / cenemy.vidatotal + "px"}}></div>
        </div>

        <div className= {styles.energia}> 
            <div style={{width:( energia *300)/cenemy.energiatotal + "px"}}
            className={energia>=cenemy.especialEner? styles.eon: styles.eoff}></div> 
            </div> 

            <div  className={styles.textobarra}>
            <p>Vida: {vida}/{cenemy.vidatotal}</p>
            <p>Energia: {energia}/{cenemy.energiatotal}</p>
            </div>
            
        </div>
        <img src={cenemy.foto}  className={mododef==true? styles.defesa : styles.echosed}/>
        
        </>
    )
}

export default BarraEnemy