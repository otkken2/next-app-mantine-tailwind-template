import Link from "next/link";

export const Header = () => {
  return (
    <header className="flex justify-between items-center p-4">
      <Link href="/" className="text-2xl font-bold">
        eSIM Store
      </Link>
    </header>
  );
};
