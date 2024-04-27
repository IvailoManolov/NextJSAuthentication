import { Button } from "@/components/ui/button";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { LoginButton } from "@/components/auth/login-button";
import Header from "@/components/custom-ui/header";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"]
})

export default async function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-300 to-sky-100">
      <div className="space-y-6 flex flex-col items-center">

        <h1 className={cn("text-6xl font-semibold text-white drop-shadow-md text-center", font.className)}>
          Auth
        </h1>

        <p className="text-white text-lg">
          Authentication service
        </p>

        <div>
          <LoginButton>
            <Button variant="secondary" size={"lg"}>
              Sign in
            </Button>
          </LoginButton>

        </div>
      </div>
    </main>
  );
}