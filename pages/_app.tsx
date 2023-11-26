import React from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import ThemeContainer from '../context/theme/ThemeContainer'
import Headroom from 'react-headroom'
const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
    {/* <Headroom>
      hello
    </Headroom> */}
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Mukta:wght@400;500;700;800&display=swap"
          rel="stylesheet"
        ></link>
        <title>The BarCodeStudio</title>
        <meta
          name="description"
          content="Transforming Spaces, Elevating Lives: Your Vision, Our Design.
          Architecture | Interior Design | Furniture Design "
          key="desc"
        />
        <meta
          name="description"
          content="Architecture | Interior Design | Furniture Design "
        />
        <meta
          property="og:image"
          content="/images/hgrt56.jpg"
        />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <ThemeContainer>
        <Component {...pageProps} />
      </ThemeContainer>
    </>
  )
}

export default MyApp
