import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white flex justify-center pt-16">
      {/* Основной контейнер с центрированием и максимальной шириной */}
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-10">
        {/* Заголовок */}
        <div className="py-8 text-center">
          <h1 className="text-2xl font-bold text-gray-900">
            Growth Radin
          </h1>
          <p className="text-gray-600 mt-4">
            Добро пожаловать на наш сайт
          </p>
        </div>
        
        {/* Блоки будут добавляться здесь */}
        <div className="space-y-16">
          {/* Блок 1 */}
          <section className="py-8 text-center">
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Блок 1
              </h2>
              <p className="text-gray-600">
                Здесь будет содержимое первого блока
              </p>
            </div>
          </section>

          {/* Блок 2 */}
          <section className="py-8 text-center">
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Блок 2
              </h2>
              <p className="text-gray-600">
                Здесь будет содержимое второго блока
              </p>
            </div>
          </section>

          {/* Блок 3 */}
          <section className="py-8 text-center">
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Блок 3
              </h2>
              <p className="text-gray-600">
                Здесь будет содержимое третьего блока
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
