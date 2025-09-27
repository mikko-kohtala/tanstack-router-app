export function BootLoader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-gray-50 to-slate-100">
      <div className="text-center">
        <div className="mb-8">
          <div className="mb-6 flex justify-center">
            <div className="flex space-x-2">
              <div className="h-3 w-3 animate-bounce rounded-full bg-blue-600" style={{ animationDelay: "0ms" }} />
              <div className="h-3 w-3 animate-bounce rounded-full bg-blue-600" style={{ animationDelay: "150ms" }} />
              <div className="h-3 w-3 animate-bounce rounded-full bg-blue-600" style={{ animationDelay: "300ms" }} />
            </div>
          </div>
          <h1 className="mb-2 font-bold text-2xl text-gray-800">Booting up application</h1>
          <p className="text-gray-600">Checking authentication status</p>
          <p className="mt-1 text-gray-500 text-sm">Verifying client-side credentials</p>
        </div>
        <div className="mx-auto h-1 w-48 overflow-hidden rounded-full bg-gray-200">
          <div className="h-full animate-pulse bg-gradient-to-r from-blue-400 to-blue-600" />
        </div>
      </div>
    </div>
  );
}
