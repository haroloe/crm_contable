import { signIn } from '@/lib/auth';

export default function LoginPage() {
  return (
    <div className="mx-auto flex min-h-screen max-w-md items-center p-8">
      <form action={async (formData) => { 'use server'; await signIn('credentials', formData); }} className="w-full rounded-xl bg-white p-6 shadow">
        <h2 className="text-2xl font-semibold">Ingreso al CRM</h2>
        <p className="mb-4 text-sm text-slate-500">Roles: administrador, contador, asistente, cobranzas.</p>
        <input name="email" placeholder="Correo" className="mb-3 w-full rounded border p-2" />
        <input type="password" name="password" placeholder="Contraseña" className="mb-4 w-full rounded border p-2" />
        <button className="w-full rounded bg-brand p-2 text-white">Entrar</button>
      </form>
    </div>
  );
}
