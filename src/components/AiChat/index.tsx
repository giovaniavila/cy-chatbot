import { useState } from 'react'
import { Send, X, MessageSquare } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ScrollArea } from '@/components/ui/scroll-area'

export function AIChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    { role: 'assistant', content: "Hello! I'm an AI assistant. How can I help you today?" },
  ])
  const [input, setInput] = useState('')

  const toggleChat = () => setIsOpen(!isOpen)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (input.trim()) {
      setMessages([...messages, { role: 'user', content: input }])
      setInput('')
     
      setTimeout(() => {
        setMessages(prev => [...prev, { role: 'assistant', content: "I'm a static AI for now, but I received your message!" }])
      }, 1000)
    }
  }

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed bottom-4 right-4 w-full max-w-md bg-background border rounded-lg shadow-lg overflow-hidden"
          >
            <header className="flex justify-between items-center p-4 border-b">
              <h2 className="text-lg font-semibold">AI Chat</h2>
              <Button variant="ghost" size="icon" onClick={toggleChat}>
                <X className="h-4 w-4" />
              </Button>
            </header>
            <ScrollArea className="h-[400px] p-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`mb-4 flex ${
                    message.role === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  <div
                    className={`rounded-lg px-3 py-2 max-w-[80%] ${
                      message.role === 'user'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted'
                    }`}
                  >
                    {message.content}
                  </div>
                </div>
              ))}
            </ScrollArea>
            <form onSubmit={handleSubmit} className="border-t p-4">
              <div className="flex items-center space-x-2">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message..."
                />
                <Button type="submit" size="icon">
                  <Send className="h-4 w-4" />
                  <span className="sr-only">Send message</span>
                </Button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
      <Button
        onClick={toggleChat}
        className="fixed bottom-4 right-4 rounded-full shadow-lg"
        size="icon"
      >
        <MessageSquare className="h-6 w-6" />
      </Button>
    </>
  )
}
