import type { AppProps } from 'next/app';
import { AppBase } from 'douhub-ui-web-basic';
import '../styles/global.css';
import {CssCenter} from 'douhub-ui-store';

function App(appProps: AppProps) {
    return <>
        <CssCenter/>
        <AppBase {...appProps} />
    </>
}

export default App
