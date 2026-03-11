import { Link } from "react-router";
import {
    Heart,
    Mail,
    Phone,
    Facebook,
    Instagram,
    Linkedin,
    Pin,
    Locate,
    LocateIcon,
    Map,
} from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-gray-50 border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Logo e Descrição */}
                    <div>
                        <div className="flex items-center gap-2 text-green-600 mb-4">
                            <Heart className="w-8 h-8" fill="currentColor" />
                            <span className="text-xl font-semibold">
                                Grupo Partilhar
                            </span>
                        </div>
                        <p className="text-gray-600 text-sm">
                            Transformando vidas e construindo um futuro melhor
                            para nossa comunidade.
                        </p>
                    </div>

                    {/* Links Rápidos */}
                    <div>
                        <h3 className="font-semibold mb-4">Links Rápidos</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    to="/"
                                    className="text-gray-600 text-sm hover:text-green-600 transition-colors"
                                >
                                    Início
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/sobre"
                                    className="text-gray-600 text-sm hover:text-green-600 transition-colors"
                                >
                                    Sobre
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/doacoes"
                                    className="text-gray-600 text-sm hover:text-green-600 transition-colors"
                                >
                                    Doações
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/loja"
                                    className="text-gray-600 text-sm hover:text-green-600 transition-colors"
                                >
                                    Loja
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/contato"
                                    className="text-gray-600 text-sm hover:text-green-600 transition-colors"
                                >
                                    Contato
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contato */}
                    <div>
                        <h3 className="font-semibold mb-4">Contato</h3>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-2 text-gray-600 text-sm">
                                <Phone className="w-4 h-4" />
                                <a
                                    href="https://wa.me/5581988009404"
                                    className="hover:text-green-600 transition-colors"
                                >
                                    (81) 98800-9404
                                </a>
                            </li>
                            <li className="flex items-center gap-2 text-gray-600 text-sm">
                                <Mail className="w-4 h-4" />
                                <a
                                    href="mailto:grupopartilhar@gmail.com"
                                    className="hover:text-green-600 transition-colors"
                                >
                                    grupopartilhar@gmail.com
                                </a>
                            </li>
                            <li className="flex items-center gap-2 text-gray-600 text-sm">
                                <Map className="w-4 h-4" />
                                <a
                                    href="https://maps.google.com/?q=Rua+Estevão+de+Oliveira,+40+-+Recife/PE"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-green-600 transition-colors"
                                >
                                    Rua Estevão de Oliveira, 40 - Recife/PE
                                </a>
                            </li>
                        </ul>
                        <div className="flex gap-4 mt-4">
                            <a
                                href="https://web.facebook.com/grupopartilhar/?ref=NONE_xav_ig_profile_page_web#"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-600 hover:text-green-600 transition-colors"
                                aria-label="Facebook"
                            >
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a
                                href="https://www.instagram.com/grupopartilhar"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-600 hover:text-green-600 transition-colors"
                                aria-label="Instagram"
                            >
                                <Instagram className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-600 text-sm">
                    <p>
                        &copy; {new Date().getFullYear()} Grupo Partilhar. Todos
                        os direitos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
}
