import { ArrowLeftCircle } from "lucide-react";

export default function Home() {
  return (
    <div>
      <main className="flex items-center space-x-2 animate-pulse">
        <ArrowLeftCircle className="w-12 h-12" />
        <h1 className="text-lg font-bold">Get started with creating a New Document</h1>
      </main>
    </div>
  );
}
