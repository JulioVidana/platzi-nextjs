import 'semantic-ui-css/semantic.min.css'
import '../global.css'

//import CartProvider from '@store/Cart'


function MyApp({ Component, pageProps }) {
    return (
        //<CartProvider>
        <>
            <Component {...pageProps} />
        </>
        //</CartProvider>
    )
}


export default MyApp