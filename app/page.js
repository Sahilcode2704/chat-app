import Chat from './components/Chat'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground">
      <h1 className="text-3xl font-bold mb-6">Welcome to Chat App</h1>
      <Chat />
    </main>
  )
}