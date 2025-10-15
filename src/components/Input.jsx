function Input(props) {
    return (
        <input 
            className="border border-slate-400 outline-slate-400 px-4 py-2 rounded-md" 

            // PEGA TUDO QUE VAI VIR DE PROPS (TYPE, PLACEHOLDER, TITLE, VALUE)
            {...props}
        />
    );
}

export default Input;