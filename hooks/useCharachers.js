import { useCallback, useEffect, useState } from 'react';
import { getCharacters } from '../service/api/getCharacters';

export const useCharacters = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState()
  const [offset, setOffset] = useState(0)
  const [searchName, setSearchName] = useState()

  const fetchMore = useCallback(async (name) => {
    if (loading) return;

    setLoading(true)

    setSearchName(name)
    const isNewName = searchName !== name
    if (isNewName) {
      setOffset(0)
    }

    getCharacters(20, isNewName ? 0 : offset, { name })
      .then(data => {
        setData(prev => isNewName ? data : [...prev, ...data]);
        setSuccess(true)
        setOffset(offset + 20)
      })
      .catch(setError)
      .finally(() => setLoading(false))
  }, [offset, loading])

  useEffect(() => {
    fetchMore()
  }, [])

  return [data, { loading, success, error, fetchMore }]
}
