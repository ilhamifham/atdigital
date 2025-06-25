function Button({ text }) {
    return (
        <button className="uppercase font-bold text-sm bg-secondary text-white py-[0.563rem] px-5 rounded-sm cursor-pointer">
            {text}
        </button>
    )
}

export default Button;