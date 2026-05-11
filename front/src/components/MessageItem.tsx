import type { Message } from "../types"

function MessageItem({ message }: { message: Message }) {

  var date: string = new Date(message.timestamp).toLocaleString("fr-FR")

  return (
    <li className="message-item">
      <div className="message-meta">
        {message.author} a dit le {date}
      </div>
      <div className="message-content">
        <p>{message.content}</p>
      </div>
    </li>
  )
}

export default MessageItem
