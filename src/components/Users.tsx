import { Link, Outlet } from "@tanstack/react-router";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

export const UsersLayout = () => (
  <div className="space-y-6">
    <Card>
      <CardHeader>
        <CardTitle>Users</CardTitle>
        <CardDescription>Manage your user base</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-sm text-muted-foreground">
          Total Users: <span className="font-semibold text-foreground">1,250</span>
        </div>
        <nav className="flex gap-2">
          <Link to="/users">
            <Button variant="outline" size="sm">List</Button>
          </Link>
          <Link to="/users/active">
            <Button variant="outline" size="sm">Active Users</Button>
          </Link>
          <Link to="/users/roles">
            <Button variant="outline" size="sm">User Roles</Button>
          </Link>
        </nav>
      </CardContent>
    </Card>
    <Outlet />
  </div>
);

export const UsersList = () => (
  <Card>
    <CardHeader>
      <CardTitle>User List</CardTitle>
    </CardHeader>
    <CardContent>
      <ul className="space-y-2">
        <li className="flex justify-between items-center p-2 rounded-md hover:bg-muted">
          <span>John Doe</span>
          <span className="text-sm text-muted-foreground">Admin</span>
        </li>
        <li className="flex justify-between items-center p-2 rounded-md hover:bg-muted">
          <span>Jane Smith</span>
          <span className="text-sm text-muted-foreground">Editor</span>
        </li>
        <li className="flex justify-between items-center p-2 rounded-md hover:bg-muted">
          <span>Bob Johnson</span>
          <span className="text-sm text-muted-foreground">Viewer</span>
        </li>
      </ul>
    </CardContent>
  </Card>
);

export const UsersActive = () => (
  <Card>
    <CardHeader>
      <CardTitle>Active Users</CardTitle>
    </CardHeader>
    <CardContent className="space-y-2">
      <div className="flex justify-between">
        <span className="text-muted-foreground">Currently active:</span>
        <span className="font-semibold">892 users</span>
      </div>
      <div className="flex justify-between">
        <span className="text-muted-foreground">Last 24 hours:</span>
        <span className="font-semibold">1,150 users</span>
      </div>
    </CardContent>
  </Card>
);

export const UsersRoles = () => (
  <Card>
    <CardHeader>
      <CardTitle>User Roles</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="space-y-2">
        <div className="flex justify-between items-center p-2 border rounded-md">
          <span>Admins</span>
          <span className="font-semibold">15</span>
        </div>
        <div className="flex justify-between items-center p-2 border rounded-md">
          <span>Editors</span>
          <span className="font-semibold">45</span>
        </div>
        <div className="flex justify-between items-center p-2 border rounded-md">
          <span>Viewers</span>
          <span className="font-semibold">1,190</span>
        </div>
      </div>
    </CardContent>
  </Card>
);