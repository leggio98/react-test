import { BrowserRouter } from "react-router-dom"
import App from './App'
import {SWRConfig} from 'swr'
import 'bootstrap/dist/css/bootstrap.min.css'

const fetcher = url => fetch(url).then(response => response.json())

function Root () {
    return (
        <div>
            <SWRConfig value={{fetcher}}>
            <BrowserRouter>
            <App/>
            </BrowserRouter>
            </SWRConfig>
        </div>
    )
}


export default Root
