import logo from './logo.svg'

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-6">
        <img src={logo} className="h-40 mx-auto animate-spin-slow" alt="logo" />
        <p className="text-lg text-muted-foreground">
          Edit <code className="font-mono bg-muted px-1 py-0.5 rounded">src/App.tsx</code> and save to reload.
        </p>
        <div className="flex gap-4 justify-center">
          <a
            className="text-primary hover:underline"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <a
            className="text-primary hover:underline"
            href="https://tanstack.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn TanStack
          </a>
        </div>
      </div>
    </div>
  )
}

export default App