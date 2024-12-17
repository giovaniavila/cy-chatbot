import { LoginForm } from "@/components/LoginForm";

export default function LoginPage() {
  return (
    <main className="grid grid-cols-2 h-screen">
      <aside className="relative" aria-hidden="true">
        <img
          src="https://images.unsplash.com/photo-1637775297458-7443ffd545b2?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Login background"
          className="absolute w-full h-full object-cover"
        />
      </aside>
      <section className="grid place-content-center">
        <LoginForm />
      </section>
    </main>
  );
}
