import SignUpForm from '../ui/auth/signup-form';
import AuthLogo from '../ui/auth/logo';

export default function SignUpPage() {
  return (
    <main className="flex flex-col bg-fill-background-paw-pals items-center justify-center h-screen">
      <AuthLogo />
      <SignUpForm />
    </main>
  );
}