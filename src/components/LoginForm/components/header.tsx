import { CardDescription, CardHeader, CardTitle } from "../../ui/card";

export function LoginFormHeader() {
  return (
    <CardHeader className="mb-3">
      <CardTitle className="text-3xl font-bold">
        Login to Your Account
      </CardTitle>
      <CardDescription>
        Enter your credentials to access your account
      </CardDescription>
    </CardHeader>
  );
}
