import 'bootstrap/dist/css/bootstrap.min.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { Container } from 'react-bootstrap'
import { Provider } from 'react-redux'
import AdminLayout from '../components/layouts/admin/admin-layout/AdminLayout'
import PageLayout from '../components/layouts/PageLayout'
import store from '../redux/store'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  console.log(router.pathname.includes('/admin'))
  return (
    <Provider store={store}>
      {!router.pathname.includes('/admin') ? <PageLayout>
        {/* <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Script
        src="https://unpkg.com/react/umd/react.production.min.js"
        crossOrigin="crossOrigin"
      />
      <Script
        src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
        crossOrigin="crossOrigin"
      />
      <Script
        src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
        crossOrigin="crossOrigin"
      /> */}
        <Container>
          <Component {...pageProps} />
        </Container>
      </PageLayout> :
        <AdminLayout>
          <Container>
            <Component {...pageProps} />
          </Container>
        </AdminLayout>
      }
    </Provider>
  )

}

export default MyApp
