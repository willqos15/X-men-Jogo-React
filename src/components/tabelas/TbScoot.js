import styles from './Tb.module.css'

function TbScott() {

    return(

        <div className={styles.tab}>
        <table  border="1">
            <tbody>
          
            <tr>
                <th>Nome</th>
                <td>Scott Summers</td>
            </tr>

            <tr>
                <th>Codinome</th>
                <td>Ciclope</td>
            </tr>
            <tr>
                <th>Habilidades</th>
                <td>Rajadas Ópticas</td>
            </tr>

            <tr>
                <th>Vida</th>
            <td>15</td>
            </tr>

            <tr>
                <th>Ataque</th>
                <td>1d6</td>
            </tr>

            <tr>
                <th>Especial</th>
                <td>1 ataque x2</td>
            </tr>
            </tbody>

    </table>
        </div>
    )

}

export default TbScott