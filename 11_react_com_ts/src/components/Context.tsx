import { useContext } from "react"
import { AppContext } from "../MeuContext/meucontext"

function Context() {
    const details = useContext(AppContext)
    return (
        <div>
            {details && (
                <div>
                    <h2>Linguagem: {details?.language}</h2>
                    <h4>FW: {details?.framework}</h4>
                    <p>Qtd: {details?.projects}</p>
                </div>
            )}
        </div>
    )
}

export default Context