import Image from "next/image"

export default function DescForm(props) {

    return (
        <div className="border-2 border-blue-500 rounded-lg p-4 w-full md:w-3/4 flex flex-col">
            <div className="flex justify-between flex-col-reverse md:flex-row">
                <div>
                    <p className="text-3xl">{props.nome}</p>
                    <p className="opacity-50">{props.formacao}</p>
                </div>
                <Image src={props.logo} alt='Logo da instituição' width={150} height={150}
                className="object-contain self-start mb-4 md:mb-0"/>
            </div>
            <p className="text-xl my-4">{props.descricao}</p>
            <p className="self-end opacity-50">{props.duracao}</p>
        </div>
    )
}