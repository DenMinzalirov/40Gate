const Hero = () => {
  const heroImages = [
    { src: '/hero-1.png', left: '-15%', top: '-350px' },
    { src: '/hero-2.png', left: '17%', top: '-180px' },
    { src: '/hero-3.png', left: '17%', top: '650px' },
    { src: '/hero-4.png', right: '-10%', top: '-300px' },
    { src: '/hero-5.png', top: '651px', right: '-14%' }
  ]

  return (
    <section
      style={{
        background: 'url(/hero-v2.png)',
        backgroundSize: 'cover',
      }}
      className="w-full h-[844px] sm:h-[840px] relative flex justify-center overflow-hidden">
      {/* Фоновый контейнер с изображением - мобильная версия */}
      <div
        className="w-full h-full max-w-[1440px] absolute left-1/2 transform -translate-x-1/2 overflow-hidden bg-cover bg-center bg-no-repeat sm:hidden"
        style={{
          backgroundImage: 'url(/hero_mob.png)'
        }}
      />

      {/* Планшет/десктоп картинка (640px-1279px) */}
      <div
        className="w-full h-full max-w-[1440px] absolute left-1/2 transform -translate-x-1/2 overflow-hidden bg-cover bg-center bg-no-repeat hidden sm:block xl:hidden"
        style={{
          backgroundImage: 'url(/hero-tablet.png)',
          backgroundSize: 'cover'
        }}
      />

      {/* Контент с ограничением максимальной ширины */}
      <div className="w-full h-full mx-auto relative">
        <div className="absolute top-[123px] xl:top-[255px] left-[20px] xl:left-[40px] flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-9 xl:gap-[55px] z-10">
          {/* Контент с текстом */}
          <div className="flex flex-col justify-start items-start relative gap-9 xl:gap-[55px]">
            <h1 className="self-stretch flex-grow-0 flex-shrink-0 w-[335px] sm:w-[584px] xl:w-[675px] text-[50px] xl:text-[90px] text-left text-[#1e1e1e] font-tinos leading-tight">
              {/* <span className="flex-grow-0 flex-shrink-0 w-[335px] xl:w-[675px] text-[50px] xl:text-[90px] text-left text-[#1e1e1e]"> */}
                Build bridges, not barriers — pay and grow
              {/* </span> */}
              {/* <br className="hidden sm:block xl:hidden" /> */}
              {/* <span className="flex-grow-0 flex-shrink-0 w-[335px] xl:w-[675px] text-[50px] xl:text-[90px] text-left text-[#1e1e1e]">
                not barriers — pay and grow
              </span> */}
            </h1>
            <p className="self-stretch flex-grow-0 flex-shrink-0 w-[335px] xl:w-[685px] opacity-80 text-xl xl:text-2xl text-left text-[#1e1e1e] font-instrument-sans">
              Over 300+ payments methods
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero 