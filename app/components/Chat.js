'use client'

import { useState, useRef, useEffect } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Switch } from '@/components/ui/switch'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'

export default function Chat() {
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const messagesEndRef = useRef(null)
  
  const sendMessage = () => {
    if (!input.trim()) return
    setMessages([...messages, { text: input, sender: 'You' }])
    setInput('')
  }
  
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])
  
  return (
    <div className="max-w-md w-full mx-auto my-10 border rounded-lg overflow-hidden shadow">
      <div className="h-80 overflow-y-auto bg-muted p-4">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`mb-3 flex ${msg.sender === 'You' ? 'justify-end' : 'justify-start'} items-end`}
          >
            {msg.sender !== 'You' && (
              <Avatar className="mr-2">
                <AvatarFallback>AI</AvatarFallback>
              </Avatar>
            )}
            <div
              className={`px-3 py-2 rounded-2xl max-w-[70%] ${
                msg.sender === 'You'
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary text-secondary-foreground'
              }`}
            >
              {msg.text}
            </div>
            {msg.sender === 'You' && (
              <Avatar className="ml-2">
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
            )}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="flex p-2 border-t">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          className="flex-grow mr-2"
        />
        <Button onClick={sendMessage}>Send</Button>
      </div>
    </div>
  )
}