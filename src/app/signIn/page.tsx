
import SignInForm from '@/app/ui/auth/signin-form';
import AuthLogo from '../ui/auth/logo';

export default function SignInPage() {
  return (
    <main className="flex flex-col bg-fill-background-paw-pals items-center justify-center md:h-screen">
        <AuthLogo/>
        <SignInForm />
    </main>
  );
}