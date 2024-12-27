import '../styles/global.scss';
import Navbar from '../components/Navbar';
import { usePathname } from 'next/navigation'

function MyApp({ Component, pageProps }) {
  const pathname = usePathname()
  return <>
    {pathname != '/' ? <>
      <Navbar />
    </> : <></>}
    <Component {...pageProps} />
    {console.log(pathname)}
  </>;
}

export default MyApp;