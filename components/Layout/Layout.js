import Navbar from "components/Navbar/Navbar"
import { Container } from 'semantic-ui-react'
import Footer from "components/Footer/Footer"

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <Container as="main" text>
                {children}
            </Container>
            <Footer />
        </>
    )
}

export default Layout
