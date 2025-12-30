import CCiclope from './images/C_Ciclope.png'
import CWolverine from './images/C_Wolverine.png'
import CColossus from './images/C_Colossus.png'
import CNoturno from './images/C_Noturno.png'
import CTempestade from "./images/C_Tempestade.png"

export default class Globais {



   static personagens = [
      {
         nome: "Ciclope",
         vidatotal: 15,
         energiainicial: 10,
         energiatotal: 10,
         foto: CCiclope,
         atk: 6,
         energiaAtk: 2,
         energiaDef: 2,
         especial: 12,
         especialEner: 10,
         resist: 1
      },

      {
         nome: "Wolverine",
         vidatotal: 20,
         energiainicial: 0,
         energiatotal: 5,
         foto: CWolverine,
         atk: 3,
         energiaAtk: 1,
         energiaDef: 1,
         especial: 6,
         especialEner: 3,
         resist: 1
      },

      {
         nome: "Colossus",
         vidatotal: 25,
         energiainicial: 0,
         energiatotal: 10,
         foto: CColossus,
         atk: 4,
         energiaAtk: 2,
         energiaDef: 2,
         especial: 10,
         especialEner: 10,
         resist: 3
      },

      {
         nome: "Noturno",
         vidatotal: 15,
         energiainicial: 0,
         energiatotal: 10,
         foto: CNoturno,
         atk: 2,
         energiaAtk: 2,
         energiaDef: 2,
         especial: 8,
         especialEner: 5,
         resist: 4
      },

      {
         nome: "Tempestade",
         vidatotal: 15,
         energiainicial: 0,
         energiatotal: 10,
         foto: CTempestade,
         atk: 6,
         energiaAtk: 2,
         energiaDef: 2,
         especial: 15,
         especialEner: 10,
         resist: 2
      }


   ]

   /*
   CONCEITOS DE MECÂNICAS DE PERSONAGEM
   - CICLOPE: ENERGIA INICIA CHEIA. ATAQUE REDUZ ENERGIA. DEFESA AUMENTA ENERGIA - ESPECIAL DANO
   - WOLVERINE: ENERGIA INICIA VAZIA. ATAQUE E DEFESA AUMENTA ENERGIA. - ESPECIAL DANO + RECUPERA VIDA
   - NOTURNO: ENERGIA INICIA VAZIA. ATAQUE E DEFESA AUMENTA ENERGIA - ESPECIAL DANO
   - COLOSSUS: ENERGIA INICIA VAZIA. ATAQUE E DEFESA AUMENTA ENERGIA - ESPECIAL DANO
   - TEMPESTADE: ENERGIA INICIA VAZIA. ATAQUE E DEFESA AUMENTA ENERGIA - ESPECIAL DANO E ZERO ENERGIA
   */


   //static chave = Globais.personagens.findIndex(e=> e.nome === char)
   static EECiclope = Globais.personagens[0].especialEner
   static EEColossus = Globais.personagens[2].especialEner
   static EENoturno = Globais.personagens[3].especialEner

   static EEWolverine = Globais.personagens[1].especialEner
   static EDEFWolverine = Globais.personagens[1].energiaDef

   static EATKTempestade = Globais.personagens[4].energiaAtk
   static EATKCiclope = Globais.personagens[0].energiaAtk
   static EDEFTempestade = Globais.personagens[4].energiaDef
   static EETempestade = Globais.personagens[4].especialEner

}