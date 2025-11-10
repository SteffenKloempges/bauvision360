import Link from "next/link";

export default function Footer() {
    return <footer className="bg-primary text-white">
        <div className="max-w-7xl mx-auto px-5 py-16">
            <div className="grid md:grid-cols-3 gap-8 mb-16 md:place-items-center">
                <div>
                    <h3 className="text-xl font-bold mb-4">BAUVISION360</h3>
                    <p>Ihr verlässlicher Partner im Baugewerbe</p>
                </div>
                <div>
                    <h3 className="text-xl font-bold mb-4">Kontakt</h3>
                    <p>Gutenbergstraße 10<br />59174 Kamen<br />Tel: 0175 10 360 00<br />Email: info@bauvision360.de</p>
                </div>
                <div>
                    <h3 className="text-xl font-bold mb-4">Links</h3>
                    <ul className="space-y-2">
                        <li><Link href="/impressum" className="hover:text-secondary transition-colors">Impressum</Link></li>
                        <li><Link href="/datenschutz" className="hover:text-secondary transition-colors">Datenschutz</Link></li>
                    </ul>
                </div>
            </div>
            <div className="text-center pt-8 border-t border-white/10">
                <p>&copy; 2025 BAUVISION360. Alle Rechte vorbehalten.</p>
            </div>
        </div>
    </footer>;
}