import styles from "./Sobre.module.css"
import foto from "../images/foto.jpeg"
function Sobre() {
    return (<div className={styles.divgeral}>
        <div className={styles.div1}>
            <h1>Sobre o projeto:</h1>
            <p> "X-men: Sala de Perigo" foi feito como um estudo de Desenvolvimento Web, HTML, CSS, Javascript e React. </p>
            <p> Os conceitos das mecânicas do jogo foram baseadas em RPG de turno. Personalizei o funcionamento de cada personagem para ter diferentes jogabilidades.</p>
            <p> Criar um projeto de zero foi desafiador e proveitoso. Treinei bastantes comandos no React, principalmente Lifting state up, useState(), useEffect(), manipulação de variaveis, correção de bugs... muitos bugs.</p>
            <p> Todos direitos autorais pertencem aos seus respectivos donos. Esse é um projeto sem fins lucrativos. As imagens foram retiradas do jogo "X-men Arcade (1992)" e os cenários de "X-men Children of Atom" e "Marvel VS Capcom"</p>
            <p> Última atualização do protótipo: 05/12/2025</p>
        </div>

        <div className={styles.div1}>
            <h1>Sobre mim:</h1>
            <p> <bold>Nome:</bold> William Queiroz de Oliveira Souza
                <br />Local: Altamira - Pará (Brasil)
                <br />Formação: Engenharia da Computação</p>

            <div className={styles.divisoria}>
                <div className={styles.divisoriafoto}><img src={foto} alt="foto criador do jogo" className={styles.foto} /></div>
                <div className={styles.divisoriatexto}>
                    <h3>Contato:</h3>
                    <ul>
                        <li> <a href="https://github.com/willqos15/X-men-Jogo-React"
                            target="_blank" rel="noopener noreferrer">Projeto no Github</a> </li>
                        <li> <a href="https://wa.me/5593991878598" target="_blank" rel="noopener noreferrer">Whatsapp</a> </li>
                        <li> <a href="https://queirozdeveloper.vercel.app/" target="_blank" rel="noopener noreferrer"> Portfólio</a></li>
                    </ul>

                </div>
            </div>





        </div>

    </div>)
}

export default Sobre