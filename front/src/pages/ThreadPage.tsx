import MessageForm from "../components/MessageForm"
import { useParams } from 'react-router-dom'
import MessageItem from "../components/MessageItem";
import type { Message } from "../types";
import '../styles/ThreadPage.css'

function Thread() {
  const { threadId } = useParams() // threadId vient de l'URL

  const messages: Message[] = [
    {
      id: "1",
      author: "Alice",
      timestamp: Date.now() - 7200000,
      content: "Salut, quelqu'un a déjà testé React Router ?"
    },
    {
      id: "2",
      author: "Bob",
      timestamp: Date.now() - 5400000,
      content: "Oui, c'est plutôt simple à mettre en place. Faut juste penser à wrapper l'app avec BrowserRouter."
    },
    {
      id: "3",
      author: "Alice",
      timestamp: Date.now() - 3600000,
      content: "Et pour les paramètres d'URL, tu utilises useParams ?"
    }
  ]
  const listMessages = messages.map(message =>
    <MessageItem message={message} />
  );
  return (
    <>
      <ul>{listMessages}</ul>
      <MessageForm threadId={threadId} />
    </>
  )

}

export default Thread
