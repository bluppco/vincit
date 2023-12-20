const HeaderItem = ( props ) => {

    const { href } = props

    return(
        <li className="font-studio_feixen_sans uppercase hover:text-vincit_red group cursor-pointer">
            <a href={ href } className="flex items-center">
                { props.children }
                <div class="w-6 aspect-square invisible group-hover:visible">
                    <img
                        src="/icons/red_arrow.svg"
                        alt=""
                        class="w-6 aspect-square"
                    />
                </div>
            </a>

        </li>
    )

}

export default HeaderItem
