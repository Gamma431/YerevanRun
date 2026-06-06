
export default function Hero() {
  return (
    <div className="w-full h-screen rounded-bl-[60px] bg-[url('assets/Hero.jpg')] bg-center bg-cover bg-no-repeat flex flex-col p-[1%] pt-[10%] px-[5%] items-center ">
      <div className="w-full h-[80vh] flex justify-center">
        {/* left side */}
        <div className="w-[45%] h-full flex justify-center items-end px-[6%]">
          <div className="backdrop-blur-2xl w-full h-[48%] rounded-3xl shadow-xl p-[3%] pb-[7%] ">
             <div className="w-full h-full bg-white/90 rounded-3xl  shadow-2xl ">
              <div className="w-full h-[33%] flex justify-between items-center px-[7%] text-[25px] font-bold text-black/80">
                <p>394 Cal</p>
                <p>157 bpm</p>
              </div>
              <div className="w-full h-[33%] flex justify-between items-center px-[7%] text-[25px] font-bold text-black/80">
                <p>7.78 km</p>
                <div className="w-[30%] h-[60%] bg-blue-800 justify-center items-center rounded-3xl flex flex-col">
                  <p className="text-[15px] text-white/80">moving time</p>
                  <p className="text-[20px] text-white/80">45:56</p>
                </div>
                <p>5:54 /km</p>
              </div>
              <div className="w-full h-[33%] flex gap-[1%] items-center px-[7%] py-[3%] text-[25px] font-bold text-black/80">
                <div className="w-[2%] h-full rounded-4xl bg-blue-800"></div>
                <div className="w-[2%] h-full rounded-4xl bg-blue-800"></div>
                <div className="w-[2%] h-full rounded-4xl bg-blue-800"></div>
                <div className="w-[2%] h-full rounded-4xl bg-blue-800"></div>
                <div className="w-[2%] h-full rounded-4xl bg-blue-800"></div>
                <div className="w-[2%] h-full rounded-4xl bg-blue-800"></div>
                <div className="w-[2%] h-full rounded-4xl bg-blue-800"></div>
                <div className="w-[2%] h-full rounded-4xl bg-blue-800"></div>
                <div className="w-[2%] h-full rounded-4xl bg-blue-800"></div>
                <div className="w-[2%] h-full rounded-4xl bg-blue-800"></div>
                <div className="w-[2%] h-full rounded-4xl bg-blue-800"></div>
                <div className="w-[2%] h-full rounded-4xl bg-blue-800"></div>
                <div className="w-[2%] h-full rounded-4xl bg-blue-800"></div>
                <div className="w-[2%] h-full rounded-4xl bg-blue-800"></div>
                <div className="w-[2%] h-full rounded-4xl bg-blue-800"></div>
                <div className="w-[2%] h-full rounded-4xl bg-blue-800"></div>
                <div className="w-[2%] h-full rounded-4xl bg-blue-800"></div>
                <div className="w-[2%] h-full rounded-4xl bg-blue-800"></div>
                <div className="w-[2%] h-full rounded-4xl bg-blue-800"></div>
                <div className="w-[2%] h-full rounded-4xl bg-blue-800"></div>
                <div className="w-[2%] h-full rounded-4xl bg-blue-800"></div>
                <div className="w-[2%] h-full rounded-4xl bg-blue-800"></div>
                <div className="w-[2%] h-full rounded-4xl bg-blue-800"></div>
                <div className="w-[2%] h-full rounded-4xl bg-gray-300"></div>
                <div className="w-[2%] h-full rounded-4xl bg-gray-300"></div>
                <div className="w-[2%] h-full rounded-4xl bg-gray-300"></div>
                <div className="w-[2%] h-full rounded-4xl bg-gray-300"></div>
                <div className="w-[2%] h-full rounded-4xl bg-gray-300"></div>
                <div className="w-[2%] h-full rounded-4xl bg-gray-300"></div>
                <div className="w-[2%] h-full rounded-4xl bg-gray-300"></div>
                <div className="w-[2%] h-full rounded-4xl bg-gray-300"></div>
                <div className="w-[2%] h-full rounded-4xl bg-gray-300"></div>
                <div className="w-[2%] h-full rounded-4xl bg-gray-300"></div>
                <div className="w-[2%] h-full rounded-4xl bg-gray-300"></div>
              </div>
              <div className="w-[90%] h-[8%] bg-white/55 mx-[5%] rounded-b-2xl">

              </div>
           </div>
          </div>
        </div>

        {/* right side */}
        <div className=" w-[45%] h-full flex flex-col items-center justify pt-[10%]">
          <p className="backdrop-blur-xl p-[1%] w-[45%] h-[5%] flex justify-center items-center rounded-2xl bg-white/5 text-white/70 shadow-md text-shadow-md">Get fit while running with us</p>

          <h1 className="text-[55px] text-white/80  font-bold">Defy Limits,<br />Grow</h1>

          <div className="flex w-full gap-[2%] justify-center items-center ">
            <button className="btn-primary">Get Started</button>
             <button className="btn-secondary">Learn more</button>
          </div>

          <div className=" w-full h-[20%] mt-[30%] flex justify-center items-center ">
            <div className="w-[40%] h-full">

            </div>

            <div className="w-[50%] h-full flex flex-col justify-center items-center">
              <p className="text-white font-bold"><span className="text-blue-800 ">1k +</span> Membership</p>
              <p className="text-white/50">enjoy our Routes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
