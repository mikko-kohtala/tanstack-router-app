import type * as React from "react";
import { cn } from "@/lib/utils";

function LayoutRoot({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("min-h-screen bg-gray-50", className)} data-slot="layout-root" {...props} />;
}

function LayoutHeader({ className, ...props }: React.ComponentProps<"header">) {
  return <header className={cn("border-gray-200 border-b bg-white", className)} data-slot="layout-header" {...props} />;
}

function LayoutHeaderContent({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("mx-auto px-4 sm:px-6 lg:px-8", className)} data-slot="layout-header-content" {...props} />;
}

function LayoutHeaderBar({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex h-16 items-center justify-between", className)} data-slot="layout-header-bar" {...props} />
  );
}

function LayoutBody({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("flex h-[calc(100vh-4rem)]", className)} data-slot="layout-body" {...props} />;
}

function LayoutSidebar({ className, ...props }: React.ComponentProps<"aside">) {
  return (
    <aside className={cn("w-64 border-gray-200 border-r bg-white", className)} data-slot="layout-sidebar" {...props} />
  );
}

function LayoutSidebarHeader({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("border-gray-200 border-b p-4", className)} data-slot="layout-sidebar-header" {...props} />;
}

function LayoutSidebarContent({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("p-4", className)} data-slot="layout-sidebar-content" {...props} />;
}

function LayoutMain({ className, ...props }: React.ComponentProps<"main">) {
  return <main className={cn("flex-1 overflow-y-auto", className)} data-slot="layout-main" {...props} />;
}

function LayoutContent({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("p-8", className)} data-slot="layout-content" {...props} />;
}

function LayoutSection({ className, ...props }: React.ComponentProps<"section">) {
  return <section className={cn("space-y-6", className)} data-slot="layout-section" {...props} />;
}

export const Layout = {
  Root: LayoutRoot,
  Header: LayoutHeader,
  HeaderContent: LayoutHeaderContent,
  HeaderBar: LayoutHeaderBar,
  Body: LayoutBody,
  Sidebar: LayoutSidebar,
  SidebarHeader: LayoutSidebarHeader,
  SidebarContent: LayoutSidebarContent,
  Main: LayoutMain,
  Content: LayoutContent,
  Section: LayoutSection,
};
