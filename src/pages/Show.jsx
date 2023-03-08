import { useLoaderData } from "react-router-dom"

function Show(props) {

    const item = useLoaderData()

    return (<div>

        <h1>{item.title}</h1>

    </div>)
}

export default Show