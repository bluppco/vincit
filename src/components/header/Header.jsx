import ButtonJSX from "../../atoms/jsx/Button"
import ContainerJSX from "../../layouts/Container"
import HeaderItem from "./HeaderItem"

import { motion, useScroll, useAnimation, useMotionValueEvent } from "framer-motion"

const Header = () => {

    const { scrollY } = useScroll()
    const squareVariants = {

        display: { y: 0, transition: { duration: .2 } },
        hide: { y: "-100%", transition: { duration: .4 } },

    }
    const controls = useAnimation( scrollY )
    useMotionValueEvent(scrollY, "change", (latest) => {

        let isScrollingDown = scrollY.getPrevious() - latest < 0;
        if( isScrollingDown && latest > 0 ){

            controls.start("hide")

        } else {

            controls.start("display")

        }


    })

    return(
        <header className="hidden md:block">
            <motion.header className={`h-16 bg-white z-50 relative flex items-center`}
                variants={ squareVariants }
                initial="display"
                animate={ controls }
            >
                <ContainerJSX>
                <nav className="flex justify-between items-center">
                    <a href="/">
                        <div className="w-24 aspect-video">
                            <img
                                src="/logos/vincit-logo.svg"
                                className="w-24 aspect-video"
                            />
                        </div>
                    </a>
                    <ul className="flex gap-6">
                        <HeaderItem href="/our-work">Our Work</HeaderItem>
                        <HeaderItem>Services</HeaderItem>
                        <HeaderItem>Careers</HeaderItem>
                        <HeaderItem href="/insights">Insights</HeaderItem>
                        <HeaderItem>About Us</HeaderItem>
                    </ul>
                    <ButtonJSX>Get in Touch</ButtonJSX>
                </nav>
                </ContainerJSX>
            </motion.header>
        </header>
    )

}

export default Header
