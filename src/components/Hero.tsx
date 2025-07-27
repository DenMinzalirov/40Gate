const Hero = () => {
  return (
    <section className="w-full h-[844px] sm:h-[840px] relative flex justify-center">
      {/* Фоновый контейнер с изображением - мобильная версия */}
      <div 
        className="w-full h-full max-w-[1440px] absolute left-1/2 transform -translate-x-1/2 overflow-hidden bg-cover bg-center bg-no-repeat sm:hidden"
        style={{
          backgroundImage: 'url(/hero_mob.png)'
        }}
      />

      {/* Фоновый контейнер с изображением - десктопная версия */}
      <div 
        className="w-full h-full max-w-[1440px] absolute left-1/2 transform -translate-x-1/2 overflow-hidden bg-cover bg-center bg-no-repeat hidden sm:block"
        style={{
          backgroundImage: 'url(/hero.png)'
        }}
      />

      {/* Контент с ограничением максимальной ширины */}
      <div className="w-full h-full max-w-[1440px] mx-auto relative">
        <div className="absolute top-[123px] sm:top-[255px] left-[20px] sm:left-[40px] flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-9 sm:gap-[55px] z-10">
          {/* Контент с текстом */}
          <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[335px] sm:w-[685px] relative gap-9 sm:gap-[55px]">
            <h1 className="self-stretch flex-grow-0 flex-shrink-0 w-[335px] sm:w-[675px] text-[50px] sm:text-[90px] text-left text-[#1e1e1e] font-tinos leading-tight">
              <span className="flex-grow-0 flex-shrink-0 w-[335px] sm:w-[675px] text-[50px] sm:text-[90px] text-left text-[#1e1e1e]">
                Build bridges,{' '}
              </span>
              <br />
              <span className="flex-grow-0 flex-shrink-0 w-[335px] sm:w-[675px] text-[50px] sm:text-[90px] text-left text-[#1e1e1e]">
                not barriers — pay and grow
              </span>
            </h1>
            <p className="self-stretch flex-grow-0 flex-shrink-0 w-[335px] sm:w-[685px] opacity-80 text-xl sm:text-2xl text-left text-[#1e1e1e] font-instrument-sans">
              Over 300+ payments methods
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero 