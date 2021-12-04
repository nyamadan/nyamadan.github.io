import React from "react";
import Link from "next/link";

const SmallButtonLink = function SmallButtonLink({
  prefetch,
  href,
  children,
}: {
  prefetch?: boolean;
  href: string;
  children?: React.ReactNode;
}) {
  return (
    <Link prefetch={prefetch} href={href}>
      <a
        className="
                inline-block
                border-gray-900
                bg-gray-100
                text-gray-900
                shadow-md
                hover:bg-gray-900
                hover:text-gray-100
                hover:shadow-none
                transform
                duration-500
                transition-color
                border
                rounded-md
                py-0
                px-2
              "
      >
        {children}
      </a>
    </Link>
  );
};

export default SmallButtonLink;
