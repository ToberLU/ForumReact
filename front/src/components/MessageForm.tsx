import { useState } from 'react'

function MessageForm(props: { threadId?: string }) {

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  function submitMessage() {
    // submit message
  }

var titleElement = <></>;
  if (props.threadId == undefined) {
    titleElement = <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        />;
  }

  return (
    <>
      {titleElement}
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button onClick={submitMessage}>
        Envoyer
      </button>
    </>
  )
}

export default MessageForm
