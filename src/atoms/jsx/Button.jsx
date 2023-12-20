const ButtonJSX = ( props ) => {

    const { href } = props

    return(
        <a href={ href }>
            <button class="h-10 flex justify-center items-center bg-green-800 rounded-full text-sm text-white px-4 group">
                <div class="flex items-center gap-2">
                    { props.children }
                    <div class="w-4 aspect-square hidden group-hover:block">
                        <img
                            src="/icons/white_arrow.svg"
                            alt=""
                            class="w-4 aspect-square"
                        />
                    </div>
                </div>
            </button>
        </a>
    )

}

export default ButtonJSX
