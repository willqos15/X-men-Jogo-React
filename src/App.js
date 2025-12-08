//Importação de bibliotecas e componentes
import { useState } from "react";
import { useEffect } from "react";
import Btn from "./components/btn";
import imgSelect from "./images/T_Selecao.jpg"
import imgStart from "./images/T_Principal.png"
import imgAbout from "./images/T_Sobre.png"
import BarraPlayer from "./components/BarraPlayer";
import BarraEnemy from "./components/BarraEnemy";
import Selectperson from "./components/Selectperson";
import Sobre from "./components/Sobre";
import Globais from "./Globais";

//importação de Imagens
import Droom from "./images/T_Sala_de_perigo.webp"



//Função principal JSX
function App() {

//HOOKS - useStates do Jogador
const [Char,setChar] = useState ()
const [Vida,setVida] = useState ()
const [Energia,setEnergia] = useState ()
const [defender,setDefender] = useState(false)

//HOOKS - useStates do Inimigo
const [Enemy,setEnemy] = useState()
const [Vidae,setVidae] = useState ()
const [Energiae,setEnergiae] = useState ()
const [defE,setDefE] = useState(false)

//HOOKS - useStates de Controle
const [tela,setTela] = useState (imgStart)
const [Turno,setTurno] = useState (true)



//Funções de Selecionar personagem
function FCiclope(){
  setChar("Ciclope")
}

function FWolverine(){
  setChar("Wolverine")
  
}

function FColossus(){
  setChar("Colossus")
  
}

function FNoturno(){
  setChar("Noturno")
  
}

function FTempestade(){
  setChar("Tempestade")
  
}

useEffect(()=>{


  if (Char){
  var Chave = Globais.personagens.findIndex(e=> e.nome === Char)
  var valorvida= Globais.personagens[Chave].vidatotal
  var valorener= Globais.personagens[Chave].energiainicial
  setVida(valorvida)
  setEnergia(valorener)

  //Escolhe aleatoriamente um inimigo
  do  {
    var aleatorioInimigo = Math.floor(Math.random()*Globais.personagens.length)
    var Inimigo= Globais.personagens[aleatorioInimigo].nome
  } while (Inimigo===Char)

  //Configura o inimigo e sua vida e energia
  var valorvidae= Globais.personagens[aleatorioInimigo].vidatotal
  var valorenergiae= Globais.personagens[aleatorioInimigo].energiainicial
  setVidae(valorvidae)
  setEnergiae(valorenergiae)
  setEnemy(Inimigo)
  
  setTela (Droom)
    /* EXPLICAÇÃO CÓDIGO  DE TURNO ALEATÓRIO
  - Math.Random geram numeros flutantes entre 0 e 1 (sem incluir o 1 e o 0)
  - Multiplicando "Math.Random por 2", temos um intervalo de 0 e 2 (sem incluir o 2 e o 0)
  - Math.ceil arredonda para cima, fazendo os números serem ou 1 ou 2
  - Se turno for 1 = true(o jogador começa), se não = false(o oponente começa)
  */
  const turnoVez = Math.ceil(Math.random()*2)
  setTurno(turnoVez===1? true:false)
  //setTurno(false)
  }
 
},[Char])



  //Verifica a cada mudança de Turno
  useEffect(()=>{


    //FUNÇÃO GERAL DE DANOS LEVADOS
    function Danos(){
    //Variaveis Inimigo
    var ChaveE = Globais.personagens.findIndex(e=> e.nome === Enemy)
    var AtkE = Globais.personagens[ChaveE].atk
    var AtkEEner = Globais.personagens[ChaveE].energiaAtk
    var DefEEner = Globais.personagens[ChaveE].energiaDef
    var EEnerMax = Globais.personagens[ChaveE].energiatotal
    //Variaveis jogador
    var Chave = Globais.personagens.findIndex(e=> e.nome === Char)
    var vDef = Globais.personagens[Chave].resist
    var Especial = Globais.personagens[ChaveE].especial
    var EEspE = Globais.personagens[ChaveE].especialEner
    var VidaMax = Globais.personagens[ChaveE].vidatotal
    var DREspecial = Especial -vDef
    var DReduzido = AtkE-vDef
    //console.log(`Vida=${Vida} AtkE=${AtkE} vDef= ${vDef} DReduzido${DReduzido}`)
    //console.log(`Vidae=${Vidae} Enemy=${Enemy} Energiae= ${Energiae}`)
    

    //Quando inimigo ataca - Jogador defende o dano é reduzido
    function DanoDef(){
    
    if(Vida>0 && Vidae>0){
    
    //Caso Jogador esteja defendendo
    if(defender===true && Turno ===false){

      //DANO Especial INIMIGO DEFENDIDO
      if(Energiae>=EEspE){

      if(Enemy === "Ciclope"){
        setVida((e)=> {
          const Dn = e-DReduzido
          return Dn<0? 0: Dn})

        setEnergiae((e)=> {
          const En = e-AtkEEner
          return En<0? 0: En})
      }

      else if (Enemy==="Wolverine" || Enemy==="Colossus" ||Enemy==="Noturno" ||Enemy==="Tempestade"){
      
        setVida((e)=> {
      const Dn = e-DREspecial
      return Dn<0? 0: Dn})
  
      setEnergiae((e)=> {
        const En = e-EEspE
        return En<0? 0: En})
      
      if (Enemy=="Wolverine"){
        setVidae((e)=>{
        const Vde = e +EEnerMax
        return Vde>VidaMax? VidaMax : Vde})}

      if (Enemy=="Tempestade"){
        setEnergia(0)}
      }

      
        //DANO Normal INIMIGO DEFENDIDO
        } else if (Energiae<EEspE){

        //Inimigos do tipo defensivo
        if (Enemy==="Colossus"|| Enemy==="Noturno") {
          setEnergiae((e)=> {
          const En = e+DefEEner
          return En>EEnerMax? EEnerMax: En})
          setDefE(true) //DISPARA DEFESA averiguado
        }
        
        //inimigos do tipo ofensivo
        if (Enemy==="Wolverine" || Enemy==="Tempestade")
        setVida((e)=> {
          const Dn = e-DReduzido
          return Dn<0? 0: Dn})

        
        //Ganham energia ao atacar
        if(Enemy==="Wolverine" ||Enemy==="Tempestade"){
          setEnergiae((e)=> {
          const En = e+AtkEEner
          return En>EEnerMax? EEnerMax: En})}

        else if(Enemy==="Ciclope" && Energiae<=AtkEEner){
          setEnergiae((e)=> {
          const En = e+ DefEEner
          return En>EEnerMax? EEnerMax: En})
          setDefE(true)//DISPARA DEFESA averiguado
        }
        
        else if (Enemy==="Ciclope" && Energiae>AtkEEner){
          setVida((e)=> {
          const Dn = e-DReduzido
          return Dn<0? 0: Dn})

          setEnergiae((e)=> {
          const En = e-AtkEEner
          return En<0? 0: En})
        }
        }
        setDefender(false)
    }}

    }

   //Executa a função que leva dano reduzido
    
      DanoDef()
    
    
    
    


    //Dano caso o jogador leve dano inimigo e não esteja defendendo
    if (defender===false && Turno===false) {
      
    function Dano(){
      
      if (Vida>0 && Vidae>0 && Enemy){

        //ESPECIAL INIMIGO
        if(Energiae>=EEspE){
          

         if(Enemy === "Ciclope"){

            setVida((e)=> {
            const Dn = e-AtkE
            return Dn<0? 0: Dn})

            setEnergiae((e)=> {
            const En = e-AtkEEner
            return En<0? 0: En})
          
      } else if (Enemy==="Wolverine" || Enemy==="Colossus" ||Enemy==="Noturno" ||Enemy==="Tempestade"){

        setVida((e)=> {
      const Dn = e-Especial
      return Dn<0? 0: Dn})
  
     //Perda de energia
      setEnergiae((e)=> {
        const En = e-EEspE
        return En<0? 0: En})
      
      if (Enemy=="Wolverine"){
        setVidae((e)=>{
        const Vde = e +EEnerMax
        return Vde>VidaMax? VidaMax : Vde})}

      if (Enemy=="Tempestade"){
        setEnergia(0)}
      }

      

      //dano normal
      } else if (Energiae<EEspE){

        if (Enemy==="Wolverine" || Enemy==="Tempestade"){
        setVida((e)=> {
        const Dn = e -AtkE
        return Dn<0? 0: Dn})}

        if(Enemy==="Ciclope" && Energiae<=AtkEEner){ 
          
          setEnergiae((e)=> {
          const En = e+ DefEEner
          return En>EEnerMax? EEnerMax: En})
          setDefE(true)
        }

        else if(Enemy==="Ciclope" && Energiae>AtkEEner){

          setVida((e)=> {
            const Dn = e-AtkE
            return Dn<0? 0: Dn})

        setEnergiae((e)=> {
        const En = e-AtkEEner
        return En>EEnerMax? EEnerMax: En})}

        if (Enemy==="Colossus"|| Enemy==="Noturno") {
          setEnergiae((e)=> {
          const En = e+ DefEEner
          return En>EEnerMax? EEnerMax: En})
          setDefE(true)
        }
      
      if(Enemy==="Wolverine" || Enemy==="Tempestade"){
        setEnergiae((e)=> {
        const En = e+AtkEEner
        return En>EEnerMax? EEnerMax: En})}
      }

     
    
    }

     
  
  }
      Dano()
      
         }

      
      

    }

    //Verifica se o valor da vida está undefined
    //if (!Vida) {console.log(`ERRO: Valor Vida: ${Vida}`)}
    //if (!Char) {console.log(`ERRO: Valor Char: ${Char}`)}

    if(tela===Droom) {
    
    const agora = new Date();
    const hora = agora.getHours()
    const min = agora.getMinutes()
    const seg = agora.getSeconds()
    const mili =agora.getMilliseconds()
    //verificação do turno  
    if (Turno===true){ 
      console.log(`${hora}h${min}min${seg} jogador: Vida:${Vida} - DefJ ${defender} VS Vidae: ${Vidae} DefE: ${defE} `)
    } else {
      console.log(`${hora}h${min}min${seg} Oponente: Vida:${Vida} - DefJ ${defender} VS Vidae: ${Vidae} DefE: ${defE}`)
    }
  
    if (Vidae>0 && Vida>0 && Turno===false){
      setTimeout(() => {
      Danos()
      }, 1500) 

      setTimeout(()=>{setTurno(true)},3000)
      }

}},[Turno])




//----------------------ATAQUE DO JOGADOR----------------------------------------

function btnataque(){
    if (Vida>0 && Vidae>0){
    ataque()
    setTurno(false)}
}

function ataque(){
  //puxa valores Globais da ficha do personagem escolhido
  var Chave = Globais.personagens.findIndex(e=> e.nome === Char)
  var vDano = Globais.personagens[Chave].atk
  var eAtk = Globais.personagens[Chave].energiaAtk
  var enTotal = Globais.personagens[Chave].energiatotal
  //valores inimigo
  var ChaveE = Globais.personagens.findIndex(e=> e.nome === Enemy)
  var defIni = Globais.personagens[ChaveE].resist
  var AtkReduzido = vDano-defIni
  if (AtkReduzido<0) {AtkReduzido=0}
  
  if (Vidae>0 && Vida>0){

    if (defE===true){

      setVidae((e)=> {
      const Ve = e -AtkReduzido
      return Ve<0? 0 : Ve})

      setDefE(false)

    //Personagens que consomem energia ao atacar
    if(Char==="Ciclope")
    {setEnergia((e)=>{
      const En = e-eAtk
      return En<0? 0 : En})}

    //Personagens que ganhar energia ao atacar
    if(Char==="Wolverine" || Char === "Noturno" || Char ==="Tempestade" || Char ==="Colossus" )
    {setEnergia((e)=>{
      const En = e+eAtk
      return En>enTotal? enTotal : En})}
    }

    //ATAQUE BRUTO
    else if(defE===false)
    {
    //Arrowfunction pega a vida do inimigo e diminui por dano
    //Caso a vida do inimigo seja menor que zero, retorna zero
    setVidae((e)=> {
      const Ve = e -vDano
      return Ve<0? 0 : Ve})

    //Personagens que consomem energia ao atacar
    if(Char==="Ciclope")
    {setEnergia((e)=>{
      const En = e-eAtk
      return En<0? 0 : En})}

    //Personagens que ganhar energia ao atacar
    if(Char==="Wolverine" || Char === "Noturno" || Char ==="Tempestade" || Char ==="Colossus" )
    {setEnergia((e)=>{
      const En = e+eAtk
      return En>enTotal? enTotal : En})}
    }}}


//-------------------------DEFESA DO JOGADOR-------------------------
function btndefesa (){

  if(Vida>0 && Vidae>0){
    defesa()
    setTurno(false)
  }

      


}

function defesa() {

  //puxa valores Globais da ficha do personagem escolhido
  var Chave = Globais.personagens.findIndex(e=> e.nome === Char)
  var enerDef= Globais.personagens[Chave].energiaDef
  var enerT= Globais.personagens[Chave].energiatotal

  //Ganha energia ao defender
  //Caso a energia seja maior que a energia total, retorna a energia total
  if(Char ==="Ciclope" || Char ==="Colossus" || Char ==="Noturno" || Char ==="Wolverine" ){
    setEnergia((e)=> {
      const Def=e+ enerDef
      return Def>enerT? enerT: Def})}
    
  if(Char ==="Tempestade"){
    setEnergia((e)=> {
      const Def=e+ enerDef
      return Def>enerT? enerT: Def})
  
    setEnergiae((e)=> {
      const Een = e-1
      return Een<0? 0 : Een})
  }

  setDefender(true)
  setDefE(false)
}

//---------------------------PODER ESPECIAL DO JOGADOR--------------------------
function btnespecial(){

  if(Vida>0 && Vidae>0)
  {
      Especial()
      setTurno(false)
  }

}

function Especial(){
  //puxa valores Globais da ficha do personagem escolhido
  var Chave = Globais.personagens.findIndex(e=> e.nome === Char)
  var DEsp = Globais.personagens[Chave].especial
  var EEsp = Globais.personagens[Chave].especialEner
  var Etotal = Globais.personagens[Chave].energiatotal
  //valores inimigo
  var ChaveE = Globais.personagens.findIndex(e=> e.nome === Enemy)
  var defIni = Globais.personagens[ChaveE].resist
  var EspReduzido = DEsp-defIni
  if (EspReduzido<0) {EspReduzido=0}

  if(defE===true){
    //Perdem energia e dão dano
  if (Char ==="Ciclope" || Char==="Colossus" || Char ==="Noturno"){
  setEnergia((e)=> {
    const En = e - EEsp
    return En<0? 0 : En})
  setVidae((e)=> {
    const Ve = e -EspReduzido
    return Ve<0? 0 : Ve})
  }

  //Perdem energia, Ganham vida e dão dano
  if (Char ==="Wolverine"){
  setEnergia((e)=> {
    const En = e -EEsp
    return En<0? 0 : En})

  setVida((e)=> {
    const Vd = e +Etotal
    return Vd>20? 20 : Vd})

  setVidae((e)=>{
    const Ve = e -EspReduzido
    return Ve<0? 0: Ve})
  }

  //Perdem energia, dão dano e zeram energia do inimigo
  if(Char==="Tempestade"){
    setEnergia((e)=>{
      const En = e -EEsp
      return En<0? 0 : En})

    setVidae((e)=> {
      const Vd = e -EspReduzido
      return Vd<0? 0 : Vd})

    setEnergiae(0)}
    setDefE(false)
  }

  //DANO SEM DEFESA
  if (defE===false){

    //Perdem energia e dão dano
  if (Char ==="Ciclope" || Char==="Colossus" || Char ==="Noturno"){
  setEnergia((e)=> {
    const En = e - EEsp
    return En<0? 0 : En})
  setVidae((e)=> {
    const Ve = e -DEsp
    return Ve<0? 0 : Ve})
  }

  //Perdem energia, Ganham vida e dão dano
  if (Char ==="Wolverine"){
  setEnergia((e)=> {
    const En = e -EEsp
    return En<0? 0 : En})

  setVida((e)=> {
    const Vd = e +Etotal
    return Vd>20? 20 : Vd})

  setVidae((e)=>{
    const Ve = e -DEsp
    return Ve<0? 0: Ve})
  }

  //Perdem energia, dão dano e zeram energia do inimigo
  if(Char==="Tempestade"){
    setEnergia((e)=>{
      const En = e -EEsp
      return En<0? 0 : En})

    setVidae((e)=> {
      const Vd = e -DEsp
      return Vd<0? 0 : Vd})

    setEnergiae(0)}
  }
}

  


//Função de quando o botão é clicado que altera startGame para Select
const playClicked = () => {
  setTela (imgSelect)
}

function FVoltar(){setTela(imgSelect)
  setChar("")
}

function FSobre(){setTela(imgAbout)}

function FTinicial(){setTela(imgStart)
  setChar("")
}

  return (
    <>
    <div className="principal">

      <div className="titulo">
        <h1>X-MEN: SALA DE PERIGO</h1>
      </div>

      <div className="tela" style ={{ backgroundImage: `url(${tela})`}}>
        
        {/*Tela de Seleção de Peronsagens*/}
        {tela=== imgSelect &&
        <Selectperson FCiclope={FCiclope}
        FWolverine={FWolverine}
        FNoturno={FNoturno}
        FColossus={FColossus}
        FTempestade={FTempestade}/>}
        
        {tela === imgAbout && <> <Sobre/> </>}

        {tela === Droom &&<>
        <BarraPlayer char= {Char} vida ={Vida} energia={Energia} setvida={setVida} setenergia={setEnergia} mododef={defender}/>

          {Turno=== true && Vida>0 && Vidae>0 &&
          <p className ="turno"> Turno do Jogador</p>}

          {Turno=== false && Vida>0 && Vidae>0&&
          <p className ="turno"> Turno do Oponente</p>}

          {Vida<=0 &&
          <div className= "fimpartida"> 
          <div><p className="lose"> Derrota</p></div>
          </div>}

          {Vidae<=0 &&
          <div className= "fimpartida"> 
          <div><p className="win"> Vitória</p></div>
          </div>}
    
        <BarraEnemy enemy={Enemy} vida={Vidae} energia = {Energiae} setvida={setVidae} setenergia={setEnergiae} mododef={defE}/>

        </>}

        </div>
        

          

      
      {/*PAINEL DO BOTÕES INFERIOR*/}
      <div className="painelbotao" >

        {tela === imgSelect  &&
        <div className="legenda">   <p>Selecione um personagem!</p>  
        <Btn texto="Voltar" onClick={FTinicial} estado={true}></Btn>
        </div>
        }

        {tela=== imgStart && //Se o botão não foi ciclado, exibir na tela
        <>
        <Btn texto= "Jogar" onClick= {playClicked} estado={true}/>
        <Btn texto= "Sobre" onClick = {FSobre} estado={true}/>
        </>}

        {tela === imgAbout &&
        <Btn texto= "Voltar" onClick = {FTinicial} estado={true}/>
        }

        {tela=== Droom && //Se o botão não foi ciclado, exibir na tela
        <>

        {Char==="Ciclope" && <> 
        <Btn texto= "Atacar"
        datatip= {`${Globais.personagens[0].atk} de dano/ -${Globais.personagens[0].energiaAtk} energia`}
        onClick={btnataque}
        estado={Energia>=Globais.EATKCiclope && Vida>0 && Vidae>0? Turno :false}
        trocaTurno={Turno}
        modoDef/>
        
        <Btn texto= "Defesa"
        datatip= {`Reduz golpe do oponente em -${Globais.personagens[0].resist}/ +${Globais.personagens[0].energiaDef} energia`}
        onClick={btndefesa}
        estado={Vida>0 && Vidae>0?Turno:false} trocaTurno={Turno}/>
        
        <Btn texto= "Especial"
        datatip= {`${Globais.personagens[0].especial} de dano/ -${Globais.personagens[0].especialEner} energia`}
        onClick={btnespecial}
        estado={Energia>=Globais.EECiclope && Vida>0 && Vidae>0? Turno:false}
        trocaTurno={Turno}/> 
        </>}

        {Char==="Tempestade" && <> 
        <Btn texto= "Atacar"
        datatip= {`${Globais.personagens[4].atk} de dano/ +${Globais.personagens[4].energiaAtk} energia`}
        onClick={btnataque}
        estado={Vida>0 && Vidae>0? Turno :false}
        trocaTurno={setTurno}/>
        
        <Btn texto= "Defesa"
        datatip= {`Reduz golpe do oponente em -${Globais.personagens[4].resist} e energia inimiga em -1/ +${Globais.personagens[4].energiaDef} energia`}
        onClick={btndefesa}
        estado={Vida>0 && Vidae>0?Turno:false} trocaTurno={setTurno}/>
        
        
        <Btn texto= "Especial"
        datatip= {`${Globais.personagens[4].especial} de dano e zera energia do oponente/ -${Globais.personagens[4].especialEner} energia`}
        onClick={btnespecial}
        estado={Energia>=Globais.EETempestade && Vida>0 && Vidae>0? Turno:false}
        trocaTurno={setTurno}/> 
        </>}



        {Char==="Wolverine" && <> 
        <Btn texto= "Atacar"
        datatip= {`${Globais.personagens[1].atk} de dano/ +${Globais.personagens[1].energiaAtk} energia`}
        onClick={btnataque}
        estado={Vida>0 && Vidae>0?Turno:false}
        trocaTurno={setTurno}/>
        
        <Btn texto= "Defesa"
        datatip= {`Reduz golpe do oponente em -${Globais.personagens[1].resist}/ +${Globais.personagens[1].energiaDef} energia`}
        onClick={btndefesa}
        estado={Vida>0 && Vidae>0?Turno:false} trocaTurno={setTurno}/>
        
        <Btn texto= "Especial"
        datatip= {`${Globais.personagens[1].especial} de dano e +${Globais.personagens[1].energiatotal} vida/ -${Globais.personagens[1].especialEner} energia`}
        onClick={btnespecial}
        estado={Energia>=Globais.EEWolverine && Vida>0 && Vidae>0? Turno: false}
        trocaTurno={setTurno}/> 
        </>}


        {Char==="Colossus" && <> 
        <Btn texto= "Atacar"
        datatip= {`${Globais.personagens[2].atk} de dano/ +${Globais.personagens[2].energiaAtk} energia`}
        onClick={btnataque}
        estado={Vida>0 && Vidae>0?Turno:false}
        trocaTurno={setTurno}/>
        
        <Btn texto= "Defesa"
        datatip= {`Reduz golpe do oponente em -${Globais.personagens[2].resist}/ +${Globais.personagens[2].energiaDef} energia`}
        onClick={btndefesa}
        estado={Vida>0 && Vidae>0?Turno:false} trocaTurno={setTurno}/>
        
        <Btn texto= "Especial"
        datatip= {`${Globais.personagens[2].especial} de dano/ -${Globais.personagens[2].especialEner} energia`}
        onClick={btnespecial}
        estado={Energia>=Globais.EEColossus && Vida>0 && Vidae>0? Turno: false}
        trocaTurno={setTurno}/> 
        </>}

        {Char==="Noturno" && <> 
        <Btn texto= "Atacar"
        datatip= {`${Globais.personagens[3].atk} de dano/ +${Globais.personagens[3].energiaAtk} energia`}
        onClick={btnataque}
        estado={Vida>0 && Vidae>0?Turno:false}
        trocaTurno={setTurno}/>
        
        <Btn texto= "Esquiva"
        datatip= {`Reduz golpe do oponente em -${Globais.personagens[3].resist}/ +${Globais.personagens[3].energiaDef} energia`}
        onClick={btndefesa}
        estado={Vida>0 && Vidae>0?Turno:false} trocaTurno={setTurno}/>
        
        <Btn texto= "Especial"
        onClick={btnespecial}
        datatip= {`${Globais.personagens[3].especial} de dano/ -${Globais.personagens[3].especialEner} energia`}
        estado={Energia>=Globais.EENoturno && Vida>0 && Vidae>0?Turno:false}
        trocaTurno={setTurno}/> 
        </>}

        <Btn texto="Voltar" onClick={FVoltar} estado={true}></Btn>
       
        
        </>}
        

        
      </div>

    </div>

    <footer> <p>Jogo Demo @2025 - Desenvolvido por William Queiroz</p></footer>

    </>
  )
}

export default App
