import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import toas,{ Toaster } from "react-hot-toast";
import axios from "axios";
import ContactForm from "@/components/ui/formulario-contacto";

export default function ContactoPage() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Section */}
      <section className="w-full py-20 bg-gradient-to-r from-[#053c6d] to-[#1f749c] text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Contacto</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Estamos aquí para responder tus preguntas y ayudarte a transformar
            tu bienestar.
          </p>
        </div>
      </section>

      {/* Información de Contacto y Formulario */}
      <section className="py-20 bg-white w-full dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Información de Contacto */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-[#053c6d] dark:text-[#39a6cf]">
                Información de Contacto
              </h2>
              <div className="space-y-6">
                <Card className="bg-white dark:bg-gray-800 shadow-lg transition-all hover:shadow-xl">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-[#39a6cf] rounded-full p-3 text-white">
                        <Mail className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold mb-1 text-[#1f749c] dark:text-[#39a6cf]">
                          Correo Electrónico
                        </h3>
                        <p>quanticakryon@outlook.com</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-white dark:bg-gray-800 shadow-lg transition-all hover:shadow-xl">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-[#39a6cf] rounded-full p-3 text-white">
                        <Phone className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold mb-1 text-[#1f749c] dark:text-[#39a6cf]">
                          Teléfono
                        </h3>
                        <p>+52 (99) 3754 8276</p>
                        <div className="mt-2">
                          <Button
                            variant="outline"
                            className="text-[#1f749c] border-[#1f749c] dark:text-[#39a6cf] dark:border-[#39a6cf]"
                          >
                            <svg
                              className="h-5 w-5 mr-2"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.77-1.66-2.07-.174-.3-.019-.465.13-.615.136-.135.301-.345.451-.523.146-.181.194-.301.297-.496.1-.21.049-.375-.025-.524-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.172-.015-.371-.015-.571-.015-.2 0-.523.074-.797.359-.273.3-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.195 2.105 3.195 5.1 4.485.714.3 1.27.48 1.704.629.714.227 1.365.195 1.88.119.574-.091 1.767-.721 2.016-1.426.255-.705.255-1.29.18-1.425-.074-.135-.27-.21-.57-.345z" />
                            </svg>
                            <a href="https://wa.me/529937548276?text=%C2%A1Hola%20Kryon!%20Me%20gustar%C3%ADa%20obtener%20m%C3%A1s%20informaci%C3%B3n." target="_blank">
                            Contactar por WhatsApp
                            </a>
                            
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-white dark:bg-gray-800 shadow-lg transition-all hover:shadow-xl">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-[#39a6cf] rounded-full p-3 text-white">
                        <MapPin className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold mb-1 text-[#1f749c] dark:text-[#39a6cf]">
                          Ubicación
                        </h3>
                        <p className="mb-2">86190, Primero de Mayo</p>
                        <p>Villahermosa, Tab.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-white dark:bg-gray-800 shadow-lg transition-all hover:shadow-xl">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-[#39a6cf] rounded-full p-3 text-white">
                        <Clock className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold mb-1 text-[#1f749c] dark:text-[#39a6cf]">
                          Horarios de Atención
                        </h3>
                        <p className="mb-1">
                          Lunes a Viernes: 9:00 AM - 7:00 PM
                        </p>
                        <p>Sábados: 10:00 AM - 2:00 PM</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Formulario de Contacto */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-[#053c6d] dark:text-[#39a6cf]">
                Envíanos un Mensaje
              </h2>
                <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Mapa */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800 w-full">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#053c6d] dark:text-[#39a6cf]">
            Encuéntranos
          </h2>
          <div className="max-w-5xl mx-auto rounded-lg overflow-hidden shadow-lg">
            <div className="aspect-[16/9] relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d702.4089901847133!2d-92.94343294732047!3d17.97753160467639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85edd778b9ee1225%3A0x8b43a2168a6ee15e!2sGimnasio%20de%20Box!5e0!3m2!1ses!2smx!4v1744308193394!5m2!1ses!2smx"
                width="1200"
                height="600"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>

            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
