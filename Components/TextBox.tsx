interface TextBoxProps {
    text?: string
}

export default function TextBox(props:TextBoxProps) {
    return (
        <main className="w-full h-full rounded-md p-6 bg-[#EFE8D3] flex justify-start items-center font-bold text-black text-[1.5rem]">
            {props.text}
        </main>
    )
}