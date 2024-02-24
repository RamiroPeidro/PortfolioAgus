import {Bars3Icon, Bars4Icon} from '@heroicons/react/20/solid'
import Principal from '../../../assets/agus2.jpg'



export default function Section1() {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-indigo-600">Creatividad sin límites</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Innovando en Diseño Gráfico y Experiencia de Usuario</h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
              Estudiante de Diseño Gráfico en la Universidad de Buenos Aires, apasionada por combinar la estética visual con la funcionalidad del diseño UX/UI.
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            className="w-[48rem] rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            src={Principal}
            alt="Agustina tazon"
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <p>
              Mi enfoque se centra en la creación de identidades visuales, diseño de interfaces y experiencias de usuario intuitivas. Exploro nuevas tendencias, técnicas y herramientas para ofrecer soluciones innovadoras.
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <Bars3Icon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Diseño Gráfico.</strong> Desde logos hasta branding completo, desarrollo conceptos visuales que narran historias y definen marcas.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <Bars3Icon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Diseño UX/UI.</strong> Diseño interfaces centradas en el usuario, mejorando la usabilidad y la experiencia en aplicaciones móviles y sitios web.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <Bars3Icon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Educación Continua.</strong> Comprometida con el aprendizaje constante, participo activamente en workshops y cursos para estar al día con las últimas tendencias en diseño.
                  </span>
                </li>
              </ul>
              <p className="mt-8">
              Cada proyecto es una oportunidad para experimentar con colores, tipografías y patrones, buscando siempre la armonía entre el contenido y el diseño. Mi objetivo es crear soluciones visuales que no solo sean atractivas, sino también funcionales y accesibles.
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Pasión por el diseño.</h2>
              <p className="mt-6">
              El diseño no es solo mi carrera; es mi forma de interactuar con el mundo. Estoy aquí para ayudarte a llevar tu proyecto al siguiente nivel, transformando ideas en realidades visuales impactantes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
