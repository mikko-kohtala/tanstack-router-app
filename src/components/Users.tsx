import { Link, Outlet } from "@tanstack/react-router";

export const UsersLayout = () => (
  <div>
    <h2>Users</h2>
    <p>Total Users: 1,250</p>
    <nav style={{ marginTop: "10px", marginBottom: "10px" }}>
      <Link to="/users" style={{ marginRight: "10px" }}>
        List
      </Link>
      <Link to="/users/active" style={{ marginRight: "10px" }}>
        Active Users
      </Link>
      <Link to="/users/roles">
        User Roles
      </Link>
    </nav>
    <Outlet />
  </div>
);

export const UsersList = () => (
  <div>
    <h3>User List</h3>
    <ul>
      <li>John Doe - Admin</li>
      <li>Jane Smith - Editor</li>
      <li>Bob Johnson - Viewer</li>
    </ul>
  </div>
);

export const UsersActive = () => (
  <div>
    <h3>Active Users</h3>
    <p>Currently active: 892 users</p>
    <p>Last 24 hours: 1,150 users</p>
  </div>
);

export const UsersRoles = () => (
  <div>
    <h3>User Roles</h3>
    <ul>
      <li>Admins: 15</li>
      <li>Editors: 45</li>
      <li>Viewers: 1,190</li>
    </ul>
  </div>
);