import axios from 'axios'
import { useEffect, useState } from 'react'


export default function useFetch(url, options={
    method: 'GET',
    data: null,
    headers: {}
}) {
const [data, setData] = useState(null)
const [error, setError] = useState(false)
const [loading, setLoading] = useState(true)

const reload = async  () => {
    try {
        setError(false)
        setLoading(true)
        const response = await axios({
            url,
            data: options.data,
            method: options.method,
            headers: options.headers
        });
        const {data} = response;
        setData(data)
        setLoading(false)
    } catch (err) {
        setError(err.message)
        setLoading(false)
    }
}
useEffect(() => {
    reload()
}, [])
return {
    data,
    error,
    loading,
    reload
}
}