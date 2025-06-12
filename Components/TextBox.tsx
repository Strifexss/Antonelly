interface TextBoxProps {
  text?: string;
}

export default function TextBox(props: TextBoxProps) {
  return (
    <div className="w-full rounded-md p-4 bg-white/70 border border-rose-200 backdrop-blur-sm flex justify-start items-center font-semibold text-zinc-800 text-lg sm:text-xl">
      {props.text}
    </div>
  );
}
