import type { Thread } from "../types"

function ThreadItem({ thread }: { thread: Thread }) {
  return (
    <li>
      {thread.title}<br />
      <i>by {thread.author}, the {thread.timestamp}</i>
    </li>
  )
}

export default ThreadItem
