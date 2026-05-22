import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Heart, Users, Target, Award } from "lucide-react";
import { actions } from "../data/actions";

export function About() {
    return (
        <div>
            {/* Header */}
            <section className="bg-green-600 text-white py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Sobre Nós
                    </h1>
                    <p className="text-lg md:text-xl text-green-100 max-w-3xl">
                        Conheça a história e o trabalho do Grupo Partilhar
                    </p>
                </div>
            </section>

            {/* Nossa História */}
            <section className="py-16 md:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                Nossa História
                            </h2>
                            <p className="text-lg text-gray-600 mb-4">
                                "Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla pariatur. Excepteur sint
                                occaecat cupidatat non proident, sunt in culpa
                                qui officia deserunt mollit anim id est
                                laborum."
                            </p>
                        </div>
                        <div className="rounded-lg overflow-hidden shadow-lg">
                            <ImageWithFallback
                                src="/equipePartilhar.jpeg"
                                alt="Nossa equipe"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Valores */}
            <section className="py-16 md:py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Nossos Valores
                        </h2>
                        <p className="text-lg text-gray-600">
                            Princípios que guiam nosso trabalho diário
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-full mb-4">
                                <Heart className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Amor</h3>
                            <p className="text-gray-600">
                                Tratamos cada pessoa com carinho, respeito e
                                dignidade.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-full mb-4">
                                <Users className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">
                                Ética
                            </h3>
                            <p className="text-gray-600">
                                Trabalhamos juntos para fortalecer os laços
                                sociais.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-full mb-4">
                                <Target className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">
                                Compromisso
                            </h3>
                            <p className="text-gray-600">
                                Dedicação total em cada projeto e iniciativa.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-full mb-4">
                                <Award className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">
                                Responsabilidade
                            </h3>
                            <p className="text-gray-600">
                                Prestamos contas de todas as nossas ações e
                                recursos.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* O que fazemos */}
            <section className="py-16 md:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            O que fazemos
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {actions.map((action) => (
                            <div
                                key={action.title}
                                className="group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
                            >
                                <div className="aspect-square overflow-hidden">
                                    <img
                                        src={action.image}
                                        alt={action.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-4 bg-white">
                                    <p className="text-gray-700 font-medium leading-snug">
                                        {action.title}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
