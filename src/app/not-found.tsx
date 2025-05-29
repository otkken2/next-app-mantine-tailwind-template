import { BackToHome } from "@/components/BackToHome";

export default function NotFound() {
  return (
    <div className="flex flex-col h-screen w-full gap-6 items-center">
      <h2 className="text-center text-2xl">Not Found</h2>
      <BackToHome />
    </div>
  );
}
