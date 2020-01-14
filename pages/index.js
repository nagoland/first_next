// const h1 = {
//     fontSize: "72pt",
//     fontWeight: "bold",
//     textAlign: "right",
//     letterSpacing: "-8px",
//     color: "#f0f0f0",
//     margin: "-40px 0px"
// }

// const p = {
//     margin: "0px",
//     color: "#666",
//     fontSize: "16pt"
// }

import Link from "next/link"
import Layout from "../components/Layout"
import Counter from "../components/Counter"
import Calc from "../components/Calc"
// import Image from "../static/Image"
// import Box from "../static/Box"

export default () =>
    <Layout header="next" title="top page">
        <Counter />
        <Calc />
        <hr />
        <Link href= "/other">
            <button>Go to Other @age &gt;&gt;</button>
        </Link>
    </Layout>