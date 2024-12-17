import { Button } from "@/components/ui/button";
import { CardFooter } from "@/components/ui/card";

export function LoginFormFooter() {
  return (
    <CardFooter className="flex justify-between">
      <Button variant="link">Create an account</Button>
      <Button variant="link">Forgot password?</Button>
    </CardFooter>
  );
}
