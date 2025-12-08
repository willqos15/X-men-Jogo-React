import styles from './btn.module.css'
let clique = false


function Btn({onClick, texto,passouMouse, id, estado, trocaTurno, datatip})
{

    function vazio(){}

    function press(){
      if(clique===true) return
      clique = true
      
      
      if((texto === "Atacar" || texto === "Defesa" || texto === "Esquiva" ||texto === "Especial")&& estado==true && trocaTurno==true)
        {onClick()
          console.log(trocaTurno)
        } else {onClick()}
      
      if(estado===true) {
        clique=false}

    }


    return(
        
        <>
  <button
  data-tip= {texto === "Atacar" || texto === "Defesa" || texto === "Esquiva" ||texto === "Especial"  ? datatip: undefined }
  className= {estado=== true? styles.bton : styles.btoff}
  onClick= {estado === true?
    ()=>{
      
      press()
    }: vazio}
  id={id} onMouseOver={passouMouse}>
            {texto}</button>
  </>
        
    )}

export default Btn