import { pacifico } from "@/app/ui/fonts";
import Link from "next/link";

export default function AuthLogo() {
  return (
    <Link href="/" className={`${pacifico.className} inline-block w-[366px] text-[96px] text-center antialiased`}>PawPals</Link>
  );
}