import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Heart, Users, Target, Award } from "lucide-react";

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
                                src="https://images.unsplash.com/photo-1758873269317-51888e824b28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwbWVldGluZyUyMGRpdmVyc2UlMjBwZW9wbGV8ZW58MXx8fHwxNzczMjQ5NTQwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
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

                    <h1 className="text-2xl text-center md:text-3xl font-bold text-gray-800 mb-8">
                        Promover o bem-estar pessoal e coletivo através do
                        atendimento psicológico, identificando necessidades e
                        proporcionando oportunidades de desenvolvimento através
                        de uma rede multiprofissional.{" "}
                    </h1>
                </div>
            </section>
        </div>
    );
}
