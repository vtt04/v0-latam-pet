import { Check } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFF9E9]">
      {/* Logo e Header */}
      <div className="bg-[#FFF9E9] px-4 py-8 text-center">
        <div className="mx-auto mb-6 w-32 h-32">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%2012%20de%20nov.%20de%202025%2C%2018_49_20-Photoroom-JyTk7Dnsd3mDLGDjbPU4xFROttlqXw.png"
            alt="Pet Nutrición Natural Logo"
            className="w-full h-full object-contain"
          />
        </div>

        <h1 className="text-balance mx-auto max-w-4xl text-xl font-bold leading-snug text-[#2E7D32] md:text-2xl">
          DESCUBRA CÓMO TRANSFORMAR LA ALIMENTACIÓN DE SU MASCOTA CON RECETAS CASERAS 100 % NATURALES, NUTRITIVAS E
          IRRESISTIBLES QUE AUMENTAN LA SALUD, LA ENERGÍA Y EL BIENESTAR DE SU MEJOR AMIGO
        </h1>
      </div>

      {/* DOBRA 1 - Video Section */}
      <section className="bg-[#FFF9E9] px-4 pb-12">
        <div className="mx-auto max-w-3xl">
          <p className="text-pretty mx-auto mb-8 max-w-2xl text-center text-base text-gray-700 leading-relaxed">
            Además de ofrecer más salud y bienestar, descubrirás una forma práctica y amorosa de cuidar a tu mascota con
            tus propias manos, creando comidas que fortalecen el vínculo entre ustedes.
          </p>

          {/* Video Placeholder */}
          <div className="aspect-video w-full rounded-2xl border-8 border-[#2E7D32] bg-gray-200 flex items-center justify-center">
            <div className="text-center">
              <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-red-600 flex items-center justify-center">
                <div className="h-0 w-0 border-l-8 border-l-white border-t-6 border-t-transparent border-b-6 border-b-transparent ml-1"></div>
              </div>
              <p className="text-gray-600 font-medium">Espacio para video de YouTube</p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <button className="animate-pulse-visible relative rounded-lg bg-[#F57C00] px-12 py-4 text-base font-extrabold text-black shadow-[0_0_0_4px_#DAF9E4] transition-transform">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs">🐾</span>
              QUIERO QUE MI MASCOTA ESTÉ MÁS SALUDABLE
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs">🐾</span>
            </button>
          </div>
        </div>
      </section>

      <section className="bg-[#FFF9E9] px-4 py-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-balance text-center text-2xl font-bold text-[#2E7D32] md:text-3xl mb-6">
            ¿Sabías que 8 de cada 10 enfermedades graves en perros y gatos están directamente relacionadas con una mala
            alimentación?
          </h2>

          <div className="mx-auto max-w-3xl space-y-4 text-center text-gray-700 leading-relaxed mb-8">
            <p>
              La verdad es que el cuerpo de nuestros mejores amigos no está hecho para sobrevivir con piensos
              industriales, llenos de conservantes, aditivos químicos e ingredientes de baja calidad. Lo que realmente
              necesitan es una nutrición natural, fresca y casera, capaz de fortalecer su inmunidad, aumentar su energía
              y prevenir enfermedades que acortan su vida.
            </p>
            <p className="font-semibold">
              👉 Imagínate ver a tu mascota más sana, con un pelaje brillante, más activa y viviendo muchos años a tu
              lado, todo ello gracias a comidas sencillas y naturales que puedes preparar en casa.
            </p>
            <p>
              Si tú también crees que tu mascota se merece algo más que pienso, entonces este programa está hecho a la
              medida para ti, que amas cuidar a tu compañero de cuatro patas desde el corazón
            </p>
          </div>

          <div className="flex justify-center mb-1">
            <div className="w-24 h-24">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%2012%20de%20nov.%20de%202025%2C%2018_49_20-Photoroom-JyTk7Dnsd3mDLGDjbPU4xFROttlqXw.png"
                alt="Pet Nutrición Natural Logo"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#FFF9E9] px-4 py-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-balance text-center text-2xl font-bold text-[#2E7D32] md:text-3xl mb-8">
            ¿QUÉ APRENDERÁS?
          </h2>

          <div className="mx-auto max-w-3xl space-y-4">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-[#FFF9E9] text-[#2E7D32] font-bold text-lg">
                ✔️
              </div>
              <p className="text-gray-700 pt-1">
                Prepare recetas de pastelería para perros y gatos, desarrolladas en sus proporciones exactas y
                aprobadas.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-[#FFF9E9] text-[#2E7D32] font-bold text-lg">
                ✔️
              </div>
              <p className="text-gray-700 pt-1">
                Seleccione y utilice ingredientes que tenga en casa para preparar bocadillos nutritivos y saludables
                para sus mascotas.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-[#FFF9E9] text-[#2E7D32] font-bold text-lg">
                ✔️
              </div>
              <p className="text-gray-700 pt-1">
                Conozca qué ingredientes se pueden utilizar y cuáles pueden perjudicar mucho la vida de sus peludos.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-[#FFF9E9] text-[#2E7D32] font-bold text-lg">
                ✔️
              </div>
              <p className="text-gray-700 pt-1">Mejore la alimentación diaria de perros y gatos.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#FFF9E9] px-4 py-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-balance text-center text-2xl font-bold text-gray-900 md:text-3xl mb-10">RECIBIRÁS:</h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl bg-[#2E7D32] p-6 text-white">
              <div className="mb-4 aspect-[4/5] w-full rounded-lg bg-gray-200"></div>
              <h3 className="mb-2 text-base font-bold">Golosinas para tu gato</h3>
              <p className="text-sm leading-relaxed opacity-90">
                Descubrirás, paso a paso, cómo preparar golosinas irresistibles, incluso sin tener experiencia. ¡A tu
                gatito le encantarán!
              </p>
            </div>

            <div className="rounded-2xl bg-[#2E7D32] p-6 text-white">
              <div className="mb-4 aspect-[4/5] w-full rounded-lg bg-gray-200"></div>
              <h3 className="mb-2 text-base font-bold">Recetas de bocadillos para mascotas</h3>
              <p className="text-sm leading-relaxed opacity-90">
                Descubre recetas sencillas, prácticas y deliciosas, con instrucciones paso a paso, incluso si nunca
                antes has cocinado nada para mascotas.
              </p>
            </div>

            <div className="rounded-2xl bg-[#2E7D32] p-6 text-white">
              <div className="mb-4 aspect-[4/5] w-full rounded-lg bg-gray-200"></div>
              <h3 className="mb-2 text-base font-bold">Alimentos y medicamentos prohibidos</h3>
              <p className="text-sm leading-relaxed opacity-90">
                Conozca qué ingredientes y medicamentos esconden riesgos graves para la salud de las mascotas y pueden
                causar enfermedades graves a lo largo de su vida.
              </p>
            </div>

            <div className="rounded-2xl bg-[#2E7D32] p-6 text-white">
              <div className="mb-4 aspect-[4/5] w-full rounded-lg bg-gray-200"></div>
              <h3 className="mb-2 text-base font-bold">Alimentos caseros para animales</h3>
              <p className="text-sm leading-relaxed opacity-90">
                Descubra tudo o que você precisa para preparar comida caseira para animais de estimação.
              </p>
            </div>

            <div className="rounded-2xl bg-[#2E7D32] p-6 text-white">
              <div className="mb-4 aspect-[4/5] w-full rounded-lg bg-gray-200"></div>
              <h3 className="mb-2 text-base font-bold">
                La importancia de una alimentación saludable para las mascotas
              </h3>
              <p className="text-sm leading-relaxed opacity-90">
                Te mostraremos cómo prolongar aún más la vida de tus queridas mascotas con una alimentación rica,
                equilibrada y transformadora.
              </p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <button className="animate-pulse-visible relative rounded-lg bg-[#F57C00] px-12 py-4 text-base font-extrabold text-black shadow-[0_0_0_4px_#DAF9E4] transition-transform">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs">🐾</span>
              QUIERO EMPEZAR AHORA MISMO
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs">🐾</span>
            </button>
          </div>
        </div>
      </section>

      {/* DOBRA 8 - Garantía Section */}
      <section className="bg-[#FFF9E9] px-4 py-12">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-balance text-center text-2xl font-bold text-gray-900 md:text-3xl mb-4">
            Y NO ES TODO...
          </h2>
          <p className="text-center text-xl text-gray-700 mb-10">
            ¡Queremos que te conviertas en el mejor tutor posible!
          </p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl bg-[#DBCCB3] p-6 text-gray-900">
              <div className="mb-4 aspect-[3/4] w-full rounded-lg bg-gray-300"></div>
              <h3 className="mb-2 text-base font-bold">Cómo entrenar a tu gato</h3>
              <p className="text-sm leading-relaxed opacity-90">
                ¡Descubre cómo entrenar a tu gatito de una manera increíblemente sencilla y rápida, convirtiéndolo en un
                compañero obediente en un tiempo récord!
              </p>
              <p className="mt-3 text-sm">
                De <span className="line-through text-red-600 font-semibold">19 USD</span> a{" "}
                <span className="text-[#2E7D32] font-bold">GRATIS</span>
              </p>
            </div>

            <div className="rounded-2xl bg-[#DBCCB3] p-6 text-gray-900">
              <div className="mb-4 aspect-[3/4] w-full rounded-lg bg-gray-300"></div>
              <h3 className="mb-2 text-base font-bold">Adiestramiento básico de perros</h3>
              <p className="text-sm leading-relaxed opacity-90">
                Domina la técnica más fácil y eficaz para adiestrar a tu perrito, incluso sin experiencia previa, ¡y
                sorpréndete con los resultados!
              </p>
              <p className="mt-3 text-sm">
                De <span className="line-through text-red-600 font-semibold">19 USD</span> a{" "}
                <span className="text-[#2E7D32] font-bold">GRATIS</span>
              </p>
            </div>

            <div className="rounded-2xl bg-[#DBCCB3] p-6 text-gray-900">
              <div className="mb-4 aspect-[3/4] w-full rounded-lg bg-gray-300"></div>
              <h3 className="mb-2 text-base font-bold">La salud de tu perro al descubierto</h3>
              <p className="text-sm leading-relaxed opacity-90">
                ¡Descubre los secretos esenciales para garantizar la salud y la longevidad de tu perro, manteniéndolo
                siempre feliz y lleno de energía!
              </p>
              <p className="mt-3 text-sm">
                De <span className="line-through text-red-600 font-semibold">19 USD</span> a{" "}
                <span className="text-[#2E7D32] font-bold">GRATIS</span>
              </p>
            </div>

            <div className="rounded-2xl bg-[#DBCCB3] p-6 text-gray-900">
              <div className="mb-4 aspect-[3/4] w-full rounded-lg bg-gray-300"></div>
              <h3 className="mb-2 text-base font-bold">Cuidado del perro para principiantes</h3>
              <p className="text-sm leading-relaxed opacity-90">
                ¡Ser tutor por primera vez nunca fue tan fácil! Hemos desarrollado un manual práctico con los cuidados
                indispensables para que usted acierte de pleno en la crianza de su mascota.
              </p>
              <p className="mt-3 text-sm">
                De <span className="line-through text-red-600 font-semibold">19 USD</span> a{" "}
                <span className="text-[#2E7D32] font-bold">GRATIS</span>
              </p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <button className="animate-pulse-visible relative rounded-lg bg-[#F57C00] px-12 py-4 text-base font-extrabold text-black shadow-[0_0_0_4px_#DAF9E4] transition-transform">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs">🐾</span>
              QUIERO RECIBIR LOS BONOS AHORA
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs">🐾</span>
            </button>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="bg-[#FFF9E9] px-4 py-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-balance text-center text-2xl font-bold text-gray-900 md:text-3xl mb-10">
            VEA EL TESTIMONIO DE QUIEN YA HA APROBADO:
          </h2>

          <div className="max-w-3xl mx-auto">
            <div className="rounded-2xl bg-white p-6 shadow-lg border-2 border-[#2E7D32]">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#2E7D32] to-[#4CAF50] flex-shrink-0 flex items-center justify-center text-white font-bold text-xl">
                  MG
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold text-gray-900">María G.</span>
                    <span className="text-sm text-gray-500">México</span>
                  </div>
                  <div className="flex gap-1 text-lg">⭐⭐⭐⭐⭐</div>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed italic">
                "Mi perro dejó de tener alergias y su energía cambió por completo."
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#FFF9E9] px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-balance text-center text-3xl font-bold text-gray-900 md:text-4xl mb-10">
            COMPRANDO HOY, TE LLEVAS:
          </h2>

          <div className="max-w-2xl mx-auto space-y-4 mb-8">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 text-[#2E7D32] text-xl font-bold">✔️</div>
              <p className="text-gray-900 text-lg pt-0.5">Recetas de bocadillos para mascotas</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 text-[#2E7D32] text-xl font-bold">✔️</div>
              <p className="text-gray-900 text-lg pt-0.5">Postres para mascotas</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 text-[#2E7D32] text-xl font-bold">✔️</div>
              <p className="text-gray-900 text-lg pt-0.5">Alimentos y medicamentos prohibidos</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 text-[#2E7D32] text-xl font-bold">✔️</div>
              <p className="text-gray-900 text-lg pt-0.5">
                La importancia de una alimentación saludable para las mascotas
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 text-[#2E7D32] text-xl font-bold">✔️</div>
              <p className="text-gray-900 text-lg pt-0.5">Alimentos caseros para animales</p>
            </div>
          </div>

          <div className="text-center mb-8">
            <p className="text-gray-600 text-lg mb-2">DE</p>
            <p className="text-4xl font-bold text-gray-400 line-through mb-2">47 USD</p>
            <p className="text-gray-600 text-lg mb-2">POR SOLO:</p>
            <p className="text-5xl md:text-6xl font-black text-[#2E7D32]">9,90 USD</p>
          </div>

          <div className="text-center">
            <button className="animate-pulse-visible relative rounded-lg bg-[#F57C00] px-12 py-4 text-base font-extrabold text-black shadow-[0_0_0_4px_#DAF9E4] transition-transform">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs">🐾</span>
              QUIERO COMPRAR AHORA MISMO
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs">🐾</span>
            </button>
          </div>
        </div>
      </section>

      <section className="bg-[#FFF9E9] px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-balance text-center text-3xl font-bold text-gray-900 md:text-4xl mb-6">
            ¡NOSOTROS ASUMIMOS LOS RIESGOS!
          </h2>

          <div className="max-w-2xl mx-auto text-center">
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Si no te gusta el contenido del libro electrónico, te devolveremos todo tu dinero. Tendrás 7 días de
              garantía para probar y aprobar el contenido.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed font-semibold">
              Sin embargo, estamos convencidos de que no será necesario, ya que sabemos toda la transformación que las
              recetas pueden aportar a la vida de las mascotas.
            </p>
          </div>

          <div className="mt-10 text-center">
            <button className="animate-pulse-visible relative rounded-lg bg-[#F57C00] px-12 py-4 text-base font-extrabold text-black shadow-[0_0_0_4px_#DAF9E4] transition-transform">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs">🐾</span>
              QUIERO APROVECHAR LA GARANTÍA
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs">🐾</span>
            </button>
          </div>
        </div>
      </section>

      <section className="bg-[#FFF9E9] px-4 py-12">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-balance text-center text-2xl font-bold text-gray-900 md:text-3xl mb-4">
            PREGUNTAS FRECUENTES
          </h2>

          <div className="space-y-4 mb-8">
            <div className="rounded-xl bg-white p-6 shadow-sm border border-gray-200">
              <h3 className="mb-2 font-bold text-gray-900">Después de la compra, ¿cómo puedo acceder al contenido?</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Inmediatamente después de realizar el pago, recibirás en tu correo electrónico todas las instrucciones
                de acceso. ¡Es muy fácil!
              </p>
            </div>

            <div className="rounded-xl bg-white p-6 shadow-sm border border-gray-200">
              <h3 className="mb-2 font-bold text-gray-900">¿Tendré alguna garantía?</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Por supuesto que sí. Asumimos todos los riesgos, ya que conocemos la calidad de nuestro producto. Si aún
                así desea que le devolvamos todo su dinero, puede solicitarlo en los primeros 7 días después del pago.
              </p>
            </div>

            <div className="rounded-xl bg-white p-6 shadow-sm border border-gray-200">
              <h3 className="mb-2 font-bold text-gray-900">
                No entiendo nada (o casi nada) de cocina. ¿Podré preparar las recetas?
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Por supuesto. Nuestras recetas son muy fáciles y te ofrecemos instrucciones paso a paso para
                prepararlas.
              </p>
            </div>

            <div className="rounded-xl bg-white p-6 shadow-sm border border-gray-200">
              <h3 className="mb-2 font-bold text-gray-900">¿Durante cuánto tiempo tendré acceso al guía?</h3>
              <p className="text-sm text-gray-700 leading-relaxed">Una vez comprado, el guía será tuyo para siempre.</p>
            </div>
          </div>

          <div className="text-center">
            <p className="mb-4 text-sm text-gray-600">Después de la compra, revise siempre su correo electrónico:</p>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#2E7D32] px-6 py-3">
              <div className="h-8 w-8 rounded bg-white flex items-center justify-center">
                <Check className="h-5 w-5 text-[#2E7D32]" />
              </div>
              <span className="font-bold text-white">SITE BLINDADO</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#FFF9E9] px-4 py-8 text-center text-xs text-gray-500 border-t border-gray-200">
        <p className="mb-2">Copyright © 2025 PET NUTRIÇÃO NATURAL - Todos los derechos reservados.</p>
        <p>
          Este sitio web no forma parte del sitio web de Facebook ni de Facebook Inc. Además, este sitio web NO está
          aprobado por Facebook de ninguna manera. Facebook es una marca registrada de FACEBOOK, Inc.
        </p>
      </footer>
    </main>
  )
}
