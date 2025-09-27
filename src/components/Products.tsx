import { Link, Outlet } from "@tanstack/react-router";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

export const ProductsLayout = () => (
  <div className="space-y-6">
    <Card>
      <CardHeader>
        <CardTitle>Products</CardTitle>
        <CardDescription>Browse our product catalog</CardDescription>
      </CardHeader>
      <CardContent>
        <nav className="flex gap-2">
          <Link to="/products">
            <Button variant="outline" size="sm">All Products</Button>
          </Link>
          <Link to="/products/featured">
            <Button variant="outline" size="sm">Featured</Button>
          </Link>
          <Link to="/products/categories">
            <Button variant="outline" size="sm">Categories</Button>
          </Link>
        </nav>
      </CardContent>
    </Card>
    <Outlet />
  </div>
);

export const ProductsList = () => (
  <Card>
    <CardHeader>
      <CardTitle>All Products</CardTitle>
    </CardHeader>
    <CardContent>
      <ul className="space-y-2">
        <li className="flex items-center">
          <span className="text-muted-foreground">•</span>
          <span className="ml-2">Product A</span>
        </li>
        <li className="flex items-center">
          <span className="text-muted-foreground">•</span>
          <span className="ml-2">Product B</span>
        </li>
        <li className="flex items-center">
          <span className="text-muted-foreground">•</span>
          <span className="ml-2">Product C</span>
        </li>
      </ul>
    </CardContent>
  </Card>
);

export const ProductsFeatured = () => (
  <Card>
    <CardHeader>
      <CardTitle>Featured Products</CardTitle>
    </CardHeader>
    <CardContent>
      <ul className="space-y-2">
        <li className="flex items-center">
          <span className="text-primary">★</span>
          <span className="ml-2 font-semibold">Premium Product X</span>
        </li>
        <li className="flex items-center">
          <span className="text-primary">★</span>
          <span className="ml-2 font-semibold">Limited Edition Y</span>
        </li>
      </ul>
    </CardContent>
  </Card>
);

export const ProductsCategories = () => (
  <Card>
    <CardHeader>
      <CardTitle>Product Categories</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="grid grid-cols-2 gap-2">
        <div className="p-2 border rounded-md">
          <span className="text-sm">Electronics</span>
        </div>
        <div className="p-2 border rounded-md">
          <span className="text-sm">Clothing</span>
        </div>
        <div className="p-2 border rounded-md">
          <span className="text-sm">Books</span>
        </div>
        <div className="p-2 border rounded-md">
          <span className="text-sm">Home & Garden</span>
        </div>
      </div>
    </CardContent>
  </Card>
);