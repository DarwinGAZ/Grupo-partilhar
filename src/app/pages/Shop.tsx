import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Button } from "../components/ui/button";
import { ShoppingBag } from "lucide-react";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

export function Shop() {
  const products: Product[] = [
    {
      id: 1,
      name: "Cesta de Palha Artesanal",
      price: 45.00,
      image: "https://images.unsplash.com/photo-1769754427247-d22b1f4d43f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3ZlbiUyMGJhc2tldCUyMGhhbmRjcmFmdHxlbnwxfHx8fDE3NzMyNDk1NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Cesta trançada à mão por artesãs da comunidade",
    },
    {
      id: 2,
      name: "Bowl de Cerâmica",
      price: 35.00,
      image: "https://images.unsplash.com/photo-1610701596295-4dc5d6289214?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwaGFuZG1hZGUlMjBib3dsfGVufDF8fHx8MTc3MzI0OTU0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Tigela de cerâmica feita e pintada à mão",
    },
    {
      id: 3,
      name: "Conjunto de Artesanato",
      price: 60.00,
      image: "https://images.unsplash.com/photo-1769578683495-88c7c5adbaad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kbWFkZSUyMGNyYWZ0cyUyMHByb2R1Y3RzfGVufDF8fHx8MTc3MzE4NDk2Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Kit com peças exclusivas de artesanato local",
    },
    {
      id: 4,
      name: "Tapete de Crochê",
      price: 80.00,
      image: "https://images.unsplash.com/photo-1769754427247-d22b1f4d43f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3ZlbiUyMGJhc2tldCUyMGhhbmRjcmFmdHxlbnwxfHx8fDE3NzMyNDk1NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Tapete colorido feito em crochê artesanal",
    },
    {
      id: 5,
      name: "Jogo de Porta-copos",
      price: 25.00,
      image: "https://images.unsplash.com/photo-1769578683495-88c7c5adbaad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kbWFkZSUyMGNyYWZ0cyUyMHByb2R1Y3RzfGVufDF8fHx8MTc3MzE4NDk2Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Set com 4 porta-copos em artesanato",
    },
    {
      id: 6,
      name: "Vaso Decorativo",
      price: 50.00,
      image: "https://images.unsplash.com/photo-1610701596295-4dc5d6289214?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwaGFuZG1hZGUlMjBib3dsfGVufDF8fHx8MTc3MzI0OTU0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Vaso em cerâmica com acabamento artesanal",
    },
  ];

  const handleBuy = (product: Product) => {
    const message = `Olá, tenho interesse no produto: ${product.name}. Pode me passar mais informações?`;
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div>
      {/* Header */}
      <section className="bg-green-600 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <ShoppingBag className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Nossa Loja</h1>
            <p className="text-lg md:text-xl text-green-100 max-w-3xl mx-auto">
              Produtos artesanais feitos com amor pela nossa comunidade
            </p>
          </div>
        </div>
      </section>

      {/* Sobre a Loja */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Artesanato que Transforma</h2>
            <p className="text-lg text-gray-600">
              Cada produto da nossa loja é feito à mão por membros da nossa comunidade. 
              Ao comprar, você não apenas leva para casa um item único e especial, 
              mas também apoia a geração de renda das famílias atendidas pela ONG.
            </p>
          </div>
        </div>
      </section>

      {/* Produtos */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="aspect-square overflow-hidden">
                  <ImageWithFallback
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-green-600">
                      R$ {product.price.toFixed(2)}
                    </span>
                    <Button
                      onClick={() => handleBuy(product)}
                      className="bg-green-600 hover:bg-green-700 text-white"
                    >
                      Comprar
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Como funciona</h2>
            <p className="text-lg text-gray-600">
              Comprar é fácil e rápido
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 text-green-600 rounded-full font-bold text-xl mb-4">
                1
              </div>
              <h3 className="font-semibold mb-2">Escolha o produto</h3>
              <p className="text-gray-600 text-sm">
                Navegue pelos produtos e escolha o que mais gostar
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 text-green-600 rounded-full font-bold text-xl mb-4">
                2
              </div>
              <h3 className="font-semibold mb-2">Clique em Comprar</h3>
              <p className="text-gray-600 text-sm">
                Você será direcionado para o nosso WhatsApp
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 text-green-600 rounded-full font-bold text-xl mb-4">
                3
              </div>
              <h3 className="font-semibold mb-2">Finalize a compra</h3>
              <p className="text-gray-600 text-sm">
                Nossa equipe irá ajudá-lo com pagamento e entrega
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Quer vender seus produtos?</h2>
          <p className="text-lg text-green-100 mb-8">
            Se você faz parte da nossa comunidade e produz artesanato, entre em contato conosco. 
            Podemos ajudar a divulgar e vender seus produtos!
          </p>
          <Button size="lg" variant="outline" className="bg-white text-green-600 hover:bg-gray-100">
            <a href="https://wa.me/5511999999999?text=Gostaria de vender meus produtos na loja da ONG">
              Entre em contato
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}
