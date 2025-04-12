import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

const productos = [
  {
    id: "pulsera",
    title: "Pulsera Cuántica",
    description: "Alineación energética continua para tu día a día.",
    price: "$500 MXN",
    image: "/Pulsera-Cuantica.webp?height=300&width=500",
    link: "/productos/pulsera",
    link_compra: "https://wa.me/529937548276?text=%C2%A1Hola%20Kryon!%20Me%20gustar%C3%ADa%20adquirir%20una%20Pulsera%20Cu%C3%A1ntica.",
  },
  {
    id: "gel",
    title: "Gel Cuántico",
    description: "Activación bioenergética localizada para zonas específicas.",
    price: "$500 MXN",
    image: "/Gel-Cuantico.webp?height=300&width=500",
    link: "/productos/gel",
    link_compra: "https://wa.me/529937548276?text=%C2%A1Hola%20Kryon!%20Me%20gustar%C3%ADa%20adquirir%20el%20Gel%20Cu%C3%A1ntico.",
  },
  {
    id: "stickers",
    title: "Stickers Cuánticos",
    description: "Tecnología para armonizar las frecuencias electromagneticas.",
    price: "$100 MXN cada uno",
    image: "/placeholder.svg?height=300&width=500",
    link: "/productos/stickers",
    link_compra: "https://wa.me/529937548276?text=%C2%A1Hola%20Kryon!%20Me%20gustar%C3%ADa%20adquirir%20los%20Stickers%20Cu%C3%A1nticos.",
  },
  {
    id: "botella",
    title: "Termo Estructurador de Energia Cuantica",
    description: "Revitalización estructural de agua para una hidratación óptima.",
    price: "$1,500 MXN",
    image: "/placeholder.svg?height=300&width=500",
    link: "/productos/estructurador",
    link_compra: "https://wa.me/529937548276?text=%C2%A1Hola%20Kryon!%20Me%20gustar%C3%ADa%20adquirir%20el%20Termo%20Estructurador%20de%20Energia%20Cuantica.",
  },
  {
    id: "personalizado",
    title: "Mercancia Personalizada",
    description: "Personaliza tu producto con tu nombre o logo.",
    price: "A cotizar",
    image: "/placeholder.svg?height=300&width=500",
    link: "/productos/personalizado",
    link_compra: "https://wa.me/529937548276?text=%C2%A1Hola%20Kryon!%20Me%20gustar%C3%ADa%20adquirir%20mercancia%20personalizada.",
  },
]

export default function ProductosPage() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Section */}
      <section className="w-full py-20 bg-gradient-to-r from-[#053c6d] to-[#1f749c] text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Productos Cuánticos</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Lleva la tecnología cuántica contigo a donde vayas con nuestra línea de productos especializados.
          </p>
        </div>
      </section>

      {/* Productos Grid */}
      <section className="py-20 bg-white w-full">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#053c6d]">
            Nuestra Línea de Productos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {productos.map((producto) => (
              <Card key={producto.id} className="overflow-hidden transition-all duration-300 hover:shadow-lg">
                <div className="h-48 overflow-hidden">
                  <Image
                    src={producto.image || "/placeholder.svg"}
                    alt={producto.title}
                    width={500}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-[#1f749c]">{producto.title}</CardTitle>
                  <CardDescription className="text-base">{producto.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-bold text-[#053c6d]">{producto.price}</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-23 mr-2 bg-[#054891] hover:bg-[#053c6d]">
                    <Link href={producto.link_compra} target="_blank">Comprar en WhatsApp </Link>
                    </Button>
                  <Button className="w-20 bg-[#054891] hover:bg-[#053c6d]">
                    <Link href={producto.link}>Ver más </Link>
                    </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Información de Productos */}
      <section className="py-20 bg-gray-50 w-full">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-[#053c6d]">Sobre Nuestros Productos</h2>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <p className="text-lg mb-6">
                Todos nuestros productos están diseñados con tecnología cuántica avanzada, desarrollada por el Coaching
                Ricardo Gaytán después de años de investigación en el campo de la energía cuántica.
              </p>
              <p className="text-lg mb-6">
                Cada producto ha sido cuidadosamente calibrado para proporcionar beneficios específicos, ayudándote a
                mantener un equilibrio energético óptimo en tu día a día.
              </p>
              <p className="text-lg mb-6">
                La tecnología cuántica incorporada en nuestros productos trabaja en armonía con tu campo energético
                natural, potenciando tu bienestar sin efectos secundarios.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="flex items-start gap-3">
                  <div className="bg-[#39a6cf] rounded-full p-2 mt-1 flex-shrink-0">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p>Materiales de alta calidad</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-[#39a6cf] rounded-full p-2 mt-1 flex-shrink-0">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p>Tecnología cuántica avanzada</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-[#39a6cf] rounded-full p-2 mt-1 flex-shrink-0">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p>Resultados comprobados</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-[#39a6cf] rounded-full p-2 mt-1 flex-shrink-0">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p>Garantía de satisfacción</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
