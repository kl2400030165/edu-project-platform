import { useState } from 'react';
import './TeamCommunication.css';

// ... (rest of the component code)

const TeamCommunication = ({ messages: initialMessages }) => {
  const [messages, setMessages] = useState(initialMessages || []);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      const message = {
        user: 'You',
        text: newMessage,
      };
      setMessages([...messages, message]);
      setNewMessage('');
    }
  };

  return (
    <div className="card">
      <div className="card-header">
        <span role="img" aria-label="team communication">💬</span>
        Team Communication
      </div>
      <div className="card-content chat-content">
        <div className="chat-messages">
          {messages.length > 0 ? (
            messages.map((msg, index) => (
              <div key={index} className="chat-message">
                <span className="chat-user">
                  <b>{msg.user}:</b>
                </span>{' '}
                {msg.text}
              </div>
            ))
          ) : (
            <p>Start the conversation!</p>
          )}
        </div>
        <div className="chat-input-area">
          <input
            type="text"
            className="chat-input"
            placeholder="Type your message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') handleSendMessage();
            }}
          />
          <button className="send-button" onClick={handleSendMessage}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeamCommunication;