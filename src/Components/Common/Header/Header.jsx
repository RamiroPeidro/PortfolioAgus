import Principal from '../../../assets/agusdisenando.svg'
import TypedText from '../../utils/TypedText'

export default function Example() {

  return (
    <div className="bg-slate-100">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu rounded-full overflow-hidden blur-3xl sm:-top-20"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        
        <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 sm:py-32 lg:px-8 lg:-mt-36">
          <div className="flex flex-col-reverse lg:flex-row lg:items-center">
            {/* Imagen */}
            <div className="lg:w-1/2">
              <img
                className="mx-auto w-full max-w-md lg:max-w-lg"
                src={Principal}
                alt="A tu mesa"
              />
            </div>

            {/* Texto */}
            <div className="mt-10 lg:mt-0 lg:w-1/2 lg:pl-8">
              <h1 className="text-6xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              <TypedText
                strings={['Agustina Tazón.^1000<br>Diseñadora gráfica.']}
                startDelay={500}
                typeSpeed={50}
                backSpeed={30}
                loop={false}
                showCursor={true}
                cursorChar={'|'}
                />
              </h1>
              {/* <p className="mt-6 text-lg leading-8 text-gray-600">
                Optimizá tu servicio con nosotros, donde la comodidad se une con la eficiencia para revolucionar la experiencia de tus clientes.
              </p> */}
              <div className="mt-10 flex flex-col items-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-6 lg:justify-start">
                <a
                  href="#"
                  className="rounded-md bg-black px-4 py-2 text-sm font-semibold text-white shadow hover:bg-slate-400"
                >
                  Trabajemos
                </a>
                {/* <a href="#" className="text-sm font-semibold text-indigo-600 hover:text-indigo-500">
                  Más info <span aria-hidden="true">→</span>
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}