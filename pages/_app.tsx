import type { AppProps } from 'next/app';
import React from 'react';
import '../styles/global.css';

function App(props: AppProps) {
  const { pageProps } = props;
  const Component:any = props.Component;
  return <Component {...pageProps} />
}

export default App
