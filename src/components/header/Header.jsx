import ButtonJSX from "../../atoms/jsx/Button"
import ContainerJSX from "../../layouts/Container"
import HeaderItem from "./HeaderItem"

const Header = () => {

    return(
        <header className="h-24 bg-white z-50 relative flex items-center">
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
        </header>
    )

}

export default Header
