import { useState, useEffect } from "react"

function useThreads() {
  const [threads, setThreads] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)
  useEffect(() => {
    const controller = new AbortController()
    fetch('/api/threads', { signal: controller.signal })
      .then(r => r.json())
      .then(setThreads)
      .catch(e => setError(e instanceof Error ? e : new Error(String(e))))
      .finally(() => setLoading(false))
    return () => controller.abort()
  }, [])
  return { threads, loading, error }
}

export default useThreads
