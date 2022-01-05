import Navbar from "components/Navbar/Navbar"


const Layout = ({ children }) => {
    return (
        <div>
            <Navbar />
            {children}

            <footer>
                <br />
                ---  This is the Footer ---
            </footer>

            <style jsx>{`
                footer{
                    background-color: salmon;
                }
            `}</style>
        </div>
    )
}

export default Layout
