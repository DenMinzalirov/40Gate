const MerchantsSection = () => {
  return (
    <section className="w-full pt-[120px] sm:pt-[200px] px-5 sm:px-10">
      <div className="w-full max-w-[1440px] mx-auto">
        {/* Единая структура с адаптивными классами */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end self-stretch flex-grow-0 flex-shrink-0 relative gap-6 sm:gap-0">
          <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-full sm:max-w-[925px] gap-6 sm:gap-[30px]">
            <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-3">
              {/* SVG иконка - адаптивная */}
              <svg
                width="13"
                height="14"
                viewBox="0 0 13 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 sm:w-[14px] sm:h-[14px]"
                preserveAspectRatio="none"
              >
                <circle cx="6.25" cy="7" r="6.25" fill="#6044FF" />
              </svg>
              <p className="flex-grow-0 flex-shrink-0 text-xl sm:text-2xl text-left text-[#1e1e1e] font-instrument-sans">
                For merchants
              </p>
            </div>
            <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-3.5">
              <p className="self-stretch flex-grow-0 flex-shrink-0 w-full sm:max-w-[1067px] text-3xl sm:text-[55px] text-left text-[#1e1e1e] font-tinos leading-tight">
                AI-powered tools to scale your business — from smart cascading to chargeback prevention.
                Modern payment infrastructure built with machine learning created for global growth.
              </p>
            </div>
          </div>
          {/* Номер - только для десктопа */}
          <p className="hidden sm:block flex-grow-0 flex-shrink-0 text-[55px] text-left text-[#6044ff] font-tinos">
            (01)
          </p>
        </div>
      </div>
    </section>
  )
}

export default MerchantsSection 