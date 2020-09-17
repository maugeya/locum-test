import { useEffect, useState } from "react"

const CACHE = {}

const useFetch = (url) => {
  const [data, setData] = useState([])
  const [error, setError] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    const cacheID = url

    if (CACHE[cacheID] !== undefined) {
      setData(CACHE[cacheID])
      setIsLoading(false)
    } else {
      setIsLoading(true)
      setData([])
    }

    const fetchData = async () => {
      try {
        const res = await fetch(url)
        const json = await res.json()
        setData(json)
        setIsLoading(false)
      } catch (err) {
        setError(err)
        setIsLoading(false)
      }
    }
    fetchData()
  }, [url])
  return { data, error, isLoading }
}

export default useFetch
