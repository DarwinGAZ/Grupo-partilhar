import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import {
    Mail,
    Phone,
    MapPin,
    Facebook,
    Instagram,
    Linkedin,
} from "lucide-react";
import { useState } from "react";

export function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simula o envio do formulário
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
            setFormData({ name: "", email: "", message: "" });

            // Reseta a mensagem de sucesso após 5 segundos
            setTimeout(() => {
                setIsSubmitted(false);
            }, 5000);
        }, 1000);
    };

    return (
        <div>
            {/* Header */}
            <section className="bg-green-600 text-white py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <Mail className="w-16 h-16 mx-auto mb-6" />
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            Entre em Contato
                        </h1>
                        <p className="text-lg md:text-xl text-green-100 max-w-3xl mx-auto">
                            Estamos aqui para conversar. Envie sua mensagem!
                        </p>
                    </div>
                </div>
            </section>

            {/* Formulário e Informações */}
            <section className="py-16 md:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Formulário */}
                        <div>
                            <h2 className="text-3xl font-bold mb-6">
                                Envie uma mensagem
                            </h2>
                            <p className="text-gray-600 mb-8">
                                Preencha o formulário abaixo e entraremos em
                                contato o mais breve possível.
                            </p>

                            {isSubmitted && (
                                <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg mb-6">
                                    <p className="font-medium">
                                        Mensagem enviada com sucesso!
                                    </p>
                                    <p className="text-sm">
                                        Entraremos em contato em breve.
                                    </p>
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <Label htmlFor="name">Nome completo</Label>
                                    <Input
                                        id="name"
                                        type="text"
                                        placeholder="Digite seu nome"
                                        value={formData.name}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                name: e.target.value,
                                            })
                                        }
                                        required
                                        className="mt-1"
                                    />
                                </div>

                                <div>
                                    <Label htmlFor="email">E-mail</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="seu@email.com"
                                        value={formData.email}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                email: e.target.value,
                                            })
                                        }
                                        required
                                        className="mt-1"
                                    />
                                </div>

                                <div>
                                    <Label htmlFor="message">Mensagem</Label>
                                    <Textarea
                                        id="message"
                                        placeholder="Digite sua mensagem..."
                                        value={formData.message}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                message: e.target.value,
                                            })
                                        }
                                        required
                                        rows={6}
                                        className="mt-1"
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    size="lg"
                                    className="w-full bg-green-600 hover:bg-green-700 text-white"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting
                                        ? "Enviando..."
                                        : "Enviar mensagem"}
                                </Button>
                            </form>
                        </div>

                        {/* Informações de Contato */}
                        <div>
                            <h2 className="text-3xl font-bold mb-6">
                                Informações de contato
                            </h2>
                            <p className="text-gray-600 mb-8">
                                Você também pode entrar em contato conosco
                                através dos canais abaixo:
                            </p>

                            <div className="space-y-6 mb-8">
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold mb-1">
                                            WhatsApp
                                        </h3>
                                        <a
                                            href="https://wa.me/5581988009404"
                                            className="text-gray-600 hover:text-green-600 transition-colors"
                                        >
                                            (81) 98800-9404
                                        </a>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold mb-1">
                                            E-mail
                                        </h3>
                                        <a
                                            href="mailto:grupopartilhar@gmail.com"
                                            className="text-gray-600 hover:text-green-600 transition-colors"
                                        >
                                            grupopartilhar@gmail.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold mb-1">
                                            Endereço
                                        </h3>
                                        <p className="text-gray-600">
                                            Rua Estevão de Oliveira, 40 -
                                            Recife/PE
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Redes Sociais */}
                            <div>
                                <h3 className="font-semibold mb-4">
                                    Siga-nos nas redes sociais
                                </h3>
                                <div className="flex gap-4">
                                    <a
                                        href="https://web.facebook.com/grupopartilhar/?ref=NONE_xav_ig_profile_page_web#"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 bg-gray-100 hover:bg-green-100 text-gray-600 hover:text-green-600 rounded-full flex items-center justify-center transition-colors"
                                        aria-label="Facebook"
                                    >
                                        <Facebook className="w-6 h-6" />
                                    </a>
                                    <a
                                        href="https://www.instagram.com/grupopartilhar"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 bg-gray-100 hover:bg-green-100 text-gray-600 hover:text-green-600 rounded-full flex items-center justify-center transition-colors"
                                        aria-label="Instagram"
                                    >
                                        <Instagram className="w-6 h-6" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mapa (Placeholder) */}
            <section className="bg-gray-100">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.492785247301!2d-34.89162432499225!3d-8.05110989197621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab18ec0eb761af%3A0x88824e84299f238e!2sR.%20Estev%C3%A3o%20de%20Oliveira%2C%2040%20-%20Santo%20Amaro%2C%20Recife%20-%20PE%2C%2050050-160!5e0!3m2!1spt-BR!2sbr!4v1773258411641!5m2!1spt-BR!2sbr"
                    width="100%"
                    height="300px"
                    loading="lazy"
                ></iframe>
            </section>

            {/* FAQ */}
            <section className="py-16 md:py-24 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">
                            Perguntas Frequentes
                        </h2>
                        <p className="text-lg text-gray-600">
                            Respostas para as dúvidas mais comuns
                        </p>
                    </div>

                    <div className="space-y-6">
                        <div className="bg-gray-50 p-6 rounded-lg">
                            <h3 className="font-semibold text-lg mb-2">
                                Como posso ser voluntário?
                            </h3>
                            <p className="text-gray-600">
                                Entre em contato conosco através do WhatsApp ou
                                e-mail. Teremos prazer em conversar sobre as
                                oportunidades de voluntariado disponíveis.
                            </p>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-lg">
                            <h3 className="font-semibold text-lg mb-2">
                                Como são usadas as doações?
                            </h3>
                            <p className="text-gray-600">
                                Todas as doações são utilizadas nos nossos
                                programas e projetos sociais.
                            </p>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-lg">
                            <h3 className="font-semibold text-lg mb-2">
                                A ONG atende qual região?
                            </h3>
                            <p className="text-gray-600">
                                Atendemos principalmente a região central de
                                Recife e comunidades próximas. Consulte-nos para
                                mais informações sobre cobertura.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
