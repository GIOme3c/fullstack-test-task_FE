import Footer from '@/components/Footer'
import { store } from '@/store/store'
import { Provider } from 'react-redux'
import "./index.css"


export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
      <Footer/>
    </Provider>
  )
}
