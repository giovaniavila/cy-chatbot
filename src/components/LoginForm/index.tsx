import { Button } from "@/components/ui/button";
import { CardFooter } from "@/components/ui/card";
import { AIChat } from "../AiChat";
import { LoginFormHeader } from "./components/header";
import { LoginFormContent } from "./components/content";

export function LoginForm() {
  return (
    <div className="w-[37.5rem]">
      <LoginFormHeader />
      <LoginFormContent />
      <CardFooter className="flex justify-between">
        <Button variant="link">Create an account</Button>
        <Button variant="link">Forgot password?</Button>
      </CardFooter>
      <AIChat />
    </div>
  );
}
