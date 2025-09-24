import { Link, Outlet } from "@tanstack/react-router";

export const ProductsLayout = () => (
  <div>
    <h2>Products</h2>
    <nav style={{ marginTop: "10px", marginBottom: "10px" }}>
      <Link to="/products" style={{ marginRight: "10px" }}>
        All Products
      </Link>
      <Link to="/products/featured" style={{ marginRight: "10px" }}>
        Featured
      </Link>
      <Link to="/products/categories">
        Categories
      </Link>
    </nav>
    <Outlet />
  </div>
);

export const ProductsList = () => (
  <div>
    <h3>All Products</h3>
    <ul>
      <li>Product A</li>
      <li>Product B</li>
      <li>Product C</li>
    </ul>
  </div>
);

export const ProductsFeatured = () => (
  <div>
    <h3>Featured Products</h3>
    <ul>
      <li>Premium Product X</li>
      <li>Limited Edition Y</li>
    </ul>
  </div>
);

export const ProductsCategories = () => (
  <div>
    <h3>Product Categories</h3>
    <ul>
      <li>Electronics</li>
      <li>Clothing</li>
      <li>Books</li>
      <li>Home & Garden</li>
    </ul>
  </div>
);