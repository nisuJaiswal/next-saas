import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";
import { buttonVariants } from "./ui/Button";
import {
  LoginLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  return (
    <nav className="h-14 sticky inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between border-b border-zinc-200">
          <Link href={"/"} className="z-40 font-semibold flex">
            <span>N.SaaS</span>
          </Link>

          {/* TODO: Add Mobile Navbar */}

          <div className="hidden items-center space-x-4 sm:flex">
            <>
              <Link
                href={"/pricing"}
                className={buttonVariants({ variant: "ghost", size: "sm" })}
              >
                Pricing
              </Link>
              <LoginLink
                className={buttonVariants({
                  size: "sm",
                  variant: "ghost",
                })}
              >
                Log in
              </LoginLink>

              <RegisterLink
                className={cn(
                  "flex items-center justify-between",
                  buttonVariants({
                    size: "sm",
                  })
                )}
              >
                Register <ArrowRight className="h-5  w-5" />
              </RegisterLink>
            </>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
