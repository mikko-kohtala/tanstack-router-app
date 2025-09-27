import type * as React from "react";
import { cn } from "@/lib/utils";

function PageRoot({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("space-y-6", className)} data-slot="page-root" {...props} />;
}

function PageHeader({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("", className)} data-slot="page-header" {...props} />;
}

function PageTitle({ className, ...props }: React.ComponentProps<"h2">) {
  return <h2 className={cn("font-bold text-2xl text-gray-900", className)} data-slot="page-title" {...props} />;
}

function PageDescription({ className, ...props }: React.ComponentProps<"p">) {
  return <p className={cn("mt-1 text-gray-600", className)} data-slot="page-description" {...props} />;
}

function PageActions({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("flex items-center gap-4", className)} data-slot="page-actions" {...props} />;
}

function PageContent({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("", className)} data-slot="page-content" {...props} />;
}

function PageSection({ className, ...props }: React.ComponentProps<"section">) {
  return <section className={cn("", className)} data-slot="page-section" {...props} />;
}

function PageFooter({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("mt-8 border-gray-200 border-t pt-6", className)} data-slot="page-footer" {...props} />;
}

export const Page = {
  Root: PageRoot,
  Header: PageHeader,
  Title: PageTitle,
  Description: PageDescription,
  Actions: PageActions,
  Content: PageContent,
  Section: PageSection,
  Footer: PageFooter,
};
