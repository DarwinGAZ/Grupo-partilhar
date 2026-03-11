import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { Home } from "lucide-react";

export function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-300 mb-4">404</h1>
        <h2 className="text-3xl font-bold mb-4">Página não encontrada</h2>
        <p className="text-gray-600 mb-8">
          A página que você está procurando não existe ou foi movida.
        </p>
        <Button asChild className="bg-green-600 hover:bg-green-700 text-white">
          <Link to="/">
            <Home className="w-4 h-4 mr-2" />
            Voltar para o início
          </Link>
        </Button>
      </div>
    </div>
  );
}
