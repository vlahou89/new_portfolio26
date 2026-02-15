"use client";
import React, { forwardRef } from "react";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface NavLinkProps
  extends React.PropsWithChildren<Omit<LinkProps, "className">> {
  className?: string;
  activeClassName?: string;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ href, className, activeClassName, children, ...props }, ref) => {
    const pathname = usePathname();
    const hrefStr = typeof href === "string" ? href : href?.pathname ?? "";
    const isActive = hrefStr.startsWith("/") && pathname === hrefStr;

    return (
      <Link
        href={href}
        ref={ref}
        className={cn(className, isActive && activeClassName)}
        {...props}
      >
        {children}
      </Link>
    );
  }
);

NavLink.displayName = "NavLink";

export { NavLink };
