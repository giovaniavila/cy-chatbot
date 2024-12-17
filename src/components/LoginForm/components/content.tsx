import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { EyeOff, Eye } from "lucide-react";
import { useState } from "react";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters long.",
  }),
  rememberMe: z.boolean().default(false),
});

const FormInput = ({ label, id, type, placeholder, field }: any) => {
  return (
    <FormItem>
      <FormLabel htmlFor={id}>{label}</FormLabel>
      <FormControl>
        <Input
          id={id}
          type={type}
          aria-label={`Enter your ${label.toLowerCase()}`}
          placeholder={placeholder}
          {...field}
        />
      </FormControl>
      <FormMessage />
    </FormItem>
  );
};

const PasswordField = ({ showPassword, setShowPassword, field }: any) => (
  <FormItem>
    <FormLabel htmlFor="password">Password</FormLabel>
    <FormControl>
      <section className="relative">
        <Input
          id="password"
          type={showPassword ? "text" : "password"}
          placeholder="Enter your password"
          {...field}
        />
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="absolute right-2 top-1/2 -translate-y-1/2"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? (
            <EyeOff className="h-4 w-4" />
          ) : (
            <Eye className="h-4 w-4" />
          )}
        </Button>
      </section>
    </FormControl>
    <FormMessage />
  </FormItem>
);

const RememberMeField = ({ field }: any) => (
  <FormItem className="flex items-center space-x-3 space-y-0">
    <FormControl>
      <Checkbox checked={field.value} onCheckedChange={field.onChange} />
    </FormControl>
    <div className="space-y-1 leading-none">
      <FormLabel>Remember me</FormLabel>
      <FormDescription>Keep me logged in on this device</FormDescription>
    </div>
  </FormItem>
);

export function LoginFormContent() {
  const [showPassword, setShowPassword] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { email: "", password: "", rememberMe: false },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <CardContent>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormInput
              label="Email"
              id="email"
              type="email"
              placeholder="Enter your email"
              field={field}
            />
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <PasswordField
              showPassword={showPassword}
              setShowPassword={setShowPassword}
              field={field}
            />
          )}
        />
        <FormField
          control={form.control}
          name="rememberMe"
          render={({ field }) => <RememberMeField field={field} />}
        />
        <Button type="submit" size="lg" className="w-full">
          Login
        </Button>
      </form>
    </CardContent>
  );
}
