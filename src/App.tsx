import logo from "./logo.svg";

function App() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="space-y-6 text-center">
        <img alt="logo" className="mx-auto h-40 animate-spin-slow" src={logo} />
        <p className="text-lg text-muted-foreground">
          Edit{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono">
            src/App.tsx
          </code>{" "}
          and save to reload.
        </p>
        <div className="flex justify-center gap-4">
          <a
            className="text-primary hover:underline"
            href="https://reactjs.org"
            rel="noopener noreferrer"
            target="_blank"
          >
            Learn React
          </a>
          <a
            className="text-primary hover:underline"
            href="https://tanstack.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            Learn TanStack
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
