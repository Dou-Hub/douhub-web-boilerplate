
import { TestMenu } from 'douhub-ui-web-boilerplate';

import Head from 'next/head'
const Home = () => {

    return <div className="container">
        <Head>
            <title>Create Next App</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="p-12 w-full">
            <div className="p-12 flex mx-auto">
                <div className="mr-2 text-2xl font-bold" >Hello World 2</div>
                <div className="rounded border p-1"><TestMenu text="Menu"/></div>
            </div>
        </main>
    </div>
}

export default Home

