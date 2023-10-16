import Contatos from "./contatos"

export default function Footer(props) {

    return (
        <footer id="footer" className="min-h-[20rem] relative">
            <div className={`container mx-auto mt-20 renderiza ${props.block ? 'block' : 'hidden'}`}>

                <h3 className="text-lg sm:text-3xl w-fit flex flex-col justify-center items-center text-center">
                    <p>ENTRE EM CONTATO COMIGO VIA OPÇÕES ABAIXO</p>
                    <p className={`p-[2px] bg-amber-400 rounded-lg w-[240px] ${props.block ? 'animaLinhaFooter' : null}`}></p>
                </h3>
 
            </div>
        </footer>
    )
}