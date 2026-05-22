import { Button } from "../components/ui/button";
import {
    Heart,
    CreditCard,
    Banknote,
    Copy,
    ExternalLink,
    Check,
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useState } from "react";

export function Donations() {
    const [copied, setCopied] = useState(false);

    const cnpj = "17.320.824/0001-41";
    const vaquinhaUrl =
        "https://www.vakinha.com.br/vaquinha/ajude-o-grupo-partilhar-a-iluminar";

    const handleCopy = () => {
        navigator.clipboard.writeText(cnpj);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div>
            {/* Header */}
            <section className="bg-green-600 text-white py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <Heart
                            className="w-16 h-16 mx-auto mb-6"
                            fill="currentColor"
                        />
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            Faça uma Doação
                        </h1>
                        <p className="text-lg md:text-xl text-green-100 max-w-3xl mx-auto">
                            Sua generosidade transforma vidas. Cada contribuição
                            faz a diferença!
                        </p>
                    </div>
                </div>
            </section>

            {/* Como sua doação ajuda */}
            <section className="py-16 md:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="rounded-lg overflow-hidden shadow-lg">
                            <ImageWithFallback
                                src="https://images.unsplash.com/photo-1697665387559-253e7a645e96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb25hdGlvbiUyMGhlbHBpbmclMjBoYW5kc3xlbnwxfHx8fDE3NzMyNDk1NDF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                                alt="Doações"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                Como sua doação ajuda
                            </h2>
                            <p className="text-lg text-gray-600 mb-6">
                                Cada contribuição é utilizada de forma
                                transparente para apoiar nossos programas e
                                projetos sociais.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Doação principal */}
            <section className="py-16 md:py-24 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Como doar
                        </h2>
                        <p className="text-lg text-gray-600">
                            Escolha a forma mais fácil para você contribuir
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Card CNPJ / PIX */}
                        <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center">
                            <div className="inline-flex items-center justify-center w-14 h-14 bg-green-100 text-green-600 rounded-full mb-5">
                                <Banknote className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">
                                PIX / Transferência
                            </h3>
                            <p className="text-gray-500 text-sm mb-6">
                                Use nosso CNPJ como chave PIX ou para TED/DOC. O
                                nome da instituição aparecerá para confirmação.
                            </p>
                            <div className="w-full bg-green-50 border border-green-200 rounded-xl px-5 py-4 flex items-center justify-between gap-3 mb-4">
                                <span className="text-green-800 font-mono text-lg font-semibold tracking-wider">
                                    {cnpj}
                                </span>
                                <button
                                    onClick={handleCopy}
                                    className="flex-shrink-0 flex items-center gap-1.5 text-sm font-medium text-green-700 hover:text-green-900 transition-colors"
                                >
                                    {copied ? (
                                        <>
                                            <Check className="w-4 h-4" />{" "}
                                            Copiado!
                                        </>
                                    ) : (
                                        <>
                                            <Copy className="w-4 h-4" /> Copiar
                                        </>
                                    )}
                                </button>
                            </div>
                            <p className="text-xs text-gray-400">
                                Grupo Partilhar · CNPJ {cnpj}
                            </p>
                        </div>

                        {/* Card QR Code / Vaquinha */}
                        <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center">
                            <div className="inline-flex items-center justify-center w-14 h-14 bg-green-100 text-green-600 rounded-full mb-5">
                                <Heart className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">
                                Doe pela Vaquinha Online
                            </h3>
                            <p className="text-gray-500 text-sm mb-6">
                                Escaneie o QR code com a câmera do celular ou
                                clique no botão abaixo para acessar nossa
                                campanha.
                            </p>

                            {/* QR Code placeholder */}
                            <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-xl p-4 mb-5 w-44 h-44 flex flex-col items-center justify-center gap-2">
                                <div>
                                    <img
                                        src="/qrcode.jpeg"
                                        className=""
                                        alt=""
                                    />
                                </div>
                            </div>

                            <a
                                href={vaquinhaUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors w-full justify-center"
                            >
                                <ExternalLink className="w-4 h-4" />
                                Acessar a vaquinha
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Outras formas de ajudar */}
            <section className="py-16 md:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Outras formas de ajudar
                        </h2>
                        <p className="text-lg text-gray-600">
                            Existem várias maneiras de contribuir com nosso
                            trabalho
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-gray-50 p-8 rounded-lg text-center">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-full mb-4">
                                <CreditCard className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">
                                Doação recorrente
                            </h3>
                            <p className="text-gray-600">
                                Contribua mensalmente e nos ajude a planejar
                                melhor nossos projetos.
                            </p>
                        </div>
                        <div className="bg-gray-50 p-8 rounded-lg text-center">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-full mb-4">
                                <Banknote className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">
                                Doação única
                            </h3>
                            <p className="text-gray-600">
                                Faça uma doação pontual no valor que desejar.
                            </p>
                        </div>
                        <div className="bg-gray-50 p-8 rounded-lg text-center">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-full mb-4">
                                <Heart className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">
                                Seja voluntário
                            </h3>
                            <p className="text-gray-600">
                                Doe seu tempo e conhecimento para ajudar nossa
                                comunidade.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Transparência */}
            <section className="py-16 md:py-24 bg-green-600 text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Transparência e Prestação de Contas
                    </h2>
                    <p className="text-lg text-green-100 mb-8">
                        Somos comprometidos com a transparência. Todas as
                        doações são registradas e utilizadas exclusivamente para
                        os projetos sociais do Grupo Partilhar.
                    </p>
                    <p className="text-green-100">CNPJ: {cnpj}</p>
                </div>
            </section>
        </div>
    );
}
