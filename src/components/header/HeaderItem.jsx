const HeaderItem = ( props ) => {

    const { href } = props

    return(
        <li className="font-studio_feixen_sans uppercase hover:text-vincit_red group cursor-pointer">
            <a href={ href } className="flex items-center">
                { props.children }
                <div className="w-6 aspect-square invisible group-hover:visible">
                    <img
                        src="/icons/red_arrow.svg"
                        alt=""
                        className="w-6 aspect-square"
                    />
                </div>
            </a>

        </li>
    )

}

export default HeaderItem
