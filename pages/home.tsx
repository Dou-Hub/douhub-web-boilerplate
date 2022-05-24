
import PageBase from 'douhub-ui-web/build/cjs/pages/base';
import { TestMenu } from 'douhub-ui-web-boilerplate';

const Home = (props: Record<string, any>) => {

    return <PageBase
        {...props}
        slug="home"
        Header={() => <></>}
        Footer={() => <></>}
    >
        <div className="w-full p-12">
            <div className="mx-auto flex">
                <h1 className="text-4xl font-extrabold text-gray-900 mr-8">Hello World</h1>
                <div className="text-lg border rounded px-4 py-1">
                    <TestMenu text="Menu" />
                </div>
            </div>
        </div>
    </PageBase>
};

export default Home
