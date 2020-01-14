import Link from "next/link"
import Layout from "../components/Layout"
import Counter from "../components/Counter"

export default () =>
    <Layout header="other" title="other page">
       <Counter />
        <hr />
    <div>
        <Link href="/">
            <a>&lt;&lt; Back to Index page</a>
        </Link>
    </div>
    </Layout>