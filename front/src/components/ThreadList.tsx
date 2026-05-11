import useThreads from "../hooks/useThreads"
import ThreadItem from "./ThreadItem"

function ThreadList() {
  const { threads, loading, error } = useThreads()
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>
  return threads.map(t => <ThreadItem thread={t} />)
}

export default ThreadList
