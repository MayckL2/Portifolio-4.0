

export default function CardForm(props){

    return(
        <li onClick={props.select} className="border-blue-500 border-2 p-4 rounded-lg hover:bg-blue-600 cursor-pointer transition-all">
            <p className="text-xl">{props.nome}</p>
            <div className="flex justify-between">
                <p className="opacity-50">{props.formacao}</p>
                <p className="opacity-50">{props.ano}</p>
            </div>
        </li>
    )
}