import App from 'next/app'
import { UserAgentProvider } from '@quentin-sommer/react-useragent'

function MyApp({ Component, pageProps, ua }) {
  return (
    <UserAgentProvider ua={ua}>
      <Component {...pageProps} />
      </UserAgentProvider>
  )
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext)

  return {
    ...appProps,
    ua: appContext.ctx.req ? appContext.ctx.req.headers["user-agent"] : navigator.userAgent
  }
}

export default MyApp