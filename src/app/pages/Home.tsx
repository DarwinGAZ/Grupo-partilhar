import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { Heart, Users, Target, MessageCircle } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Home() {
    const team = [
        {
            name: "Maria Silva",
            role: "Diretora",
            image: "https://images.unsplash.com/photo-1649589244330-09ca58e4fa64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHBvcnRyYWl0JTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc3MzIxOTY4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        },
        {
            name: "João Santos",
            role: "Coordenador",
            image: "https://images.unsplash.com/photo-1554765345-6ad6a5417cde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBwb3J0cmFpdCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzMyNDg5OTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        },
        {
            name: "Ana Costa",
            role: "Educadora",
            image: "https://images.unsplash.com/photo-1649589244330-09ca58e4fa64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHBvcnRyYWl0JTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc3MzIxOTY4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        },
        {
            name: "Carlos Oliveira",
            role: "Assistente Social",
            image: "https://images.unsplash.com/photo-1554765345-6ad6a5417cde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBwb3J0cmFpdCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzMyNDg5OTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        },
    ];

    return (
        <div>
            {/* Hero Section */}
            <section className="relative bg-gray-900 text-white">
                <div className="absolute inset-0 overflow-hidden">
                    <ImageWithFallback
                        src="https://images.unsplash.com/photo-1761666507437-9fb5a6ef7b0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjB2b2x1bnRlZXJzJTIwaGVscGluZ3xlbnwxfHx8fDE3NzMyMzA0MjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                        alt="Comunidade"
                        className="w-full h-full object-cover opacity-40"
                    />
                </div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
                    <div className="max-w-2xl">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Transformando vidas através da solidariedade
                        </h1>
                        <p className="text-lg md:text-xl mb-8 text-gray-200">
                            Trabalhamos para criar oportunidades e oferecer
                            apoio às famílias em situação de vulnerabilidade
                            social.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button
                                asChild
                                size="lg"
                                className="bg-green-600 hover:bg-green-700 text-white"
                            >
                                <Link to="/sobre">Conhecer a organização</Link>
                            </Button>
                            <Button
                                asChild
                                size="lg"
                                variant="outline"
                                className="bg-white text-gray-900 hover:bg-gray-100"
                            >
                                <Link to="/doacoes">Fazer doação</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sobre a Organização */}
            <section className="py-16 md:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Sobre o Grupo Partilhar
                        </h2>
                        <p className="text-lg text-gray-600">
                            dedicados a transformar a realidade de pessoas em
                            situação de vulnerabilidade.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center p-6">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-full mb-4">
                                <Target className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">
                                O que fazemos
                            </h3>
                            <p className="text-gray-600">
                                Oferecemos cursos profissionalizantes, apoio
                                psicológico e assistência social para famílias
                                em necessidade.
                            </p>
                        </div>

                        <div className="text-center p-6">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-full mb-4">
                                <Users className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">
                                Quem ajudamos
                            </h3>
                            <p className="text-gray-600">
                                Atendemos a todos, incluindo crianças, jovens,
                                adultos e idosos da comunidade.
                            </p>
                        </div>

                        <div className="text-center p-6">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-full mb-4">
                                <Heart className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">
                                Nosso impacto
                            </h3>
                            <p className="text-gray-600">
                                Promovemos inclusão social, geração de renda e
                                qualidade de vida para toda a comunidade.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Equipe */}
            <section className="py-16 md:py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Nossa Equipe
                        </h2>
                        <p className="text-lg text-gray-600">
                            Profissionais dedicados que trabalham com amor e
                            comprometimento.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"></div>
                </div>
            </section>

            {/* Doações */}
            <section className="py-16 md:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                Como você pode ajudar
                            </h2>
                            <p className="text-lg text-gray-600 mb-6">
                                Sua doação faz a diferença! Com a sua ajuda,
                                conseguimos oferecer mais cursos, alimentos e
                                assistência para quem mais precisa.
                            </p>
                            <p className="text-gray-600 mb-8">
                                Qualquer valor é bem-vindo e será usado de forma
                                transparente para apoiar nossas ações e projetos
                                sociais.
                            </p>
                            <Button
                                asChild
                                size="lg"
                                className="bg-green-600 hover:bg-green-700 text-white"
                            >
                                <Link to="/doacoes">Fazer uma doação</Link>
                            </Button>
                        </div>
                        <div className="rounded-lg overflow-hidden shadow-lg">
                            <ImageWithFallback
                                src="https://images.unsplash.com/photo-1697665387559-253e7a645e96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb25hdGlvbiUyMGhlbHBpbmclMjBoYW5kc3xlbnwxfHx8fDE3NzMyNDk1NDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                                alt="Doações"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Contato CTA */}
            <section className="py-16 md:py-24 bg-green-600 text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <MessageCircle className="w-16 h-16 mx-auto mb-6" />
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Entre em contato
                    </h2>
                    <p className="text-lg mb-8 text-green-100">
                        Tem dúvidas ou quer conhecer melhor nosso trabalho?
                        Estamos aqui para conversar!
                    </p>
                    <Button
                        asChild
                        size="lg"
                        variant="outline"
                        className="bg-white text-green-600 hover:bg-gray-100"
                    >
                        <Link to="/contato">Fale conosco</Link>
                    </Button>
                </div>
            </section>
        </div>
    );
}
