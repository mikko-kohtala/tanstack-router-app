import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

export const HomePage = () => (
  <div className="space-y-6">
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">Welcome Home</CardTitle>
        <CardDescription>
          Select a section from the navigation above to get started.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">
          This is a simple TanStack Router app with shadcn/ui components and Tailwind CSS v4.
        </p>
      </CardContent>
    </Card>
  </div>
);