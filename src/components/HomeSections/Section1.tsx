
export default function Section1() {
  return (
    <div className="w-full h-screen bg-[url('assets/araratsky.jpg')] bg-center bg-cover flex flex-col px-[10%] py-[4%] gap-[2%]">
        <div className="w-full h-[30%] flex justify-between items-center p-[1%]a ">
          <div className="w-[20%]  h-full  p-[1%] flex flex-col gap-[12%] justify-center">
            <div className="w-[40%] h-[20%] rounded-4xl bg-white/80 flex justify-center items-center gap-[6%]">
              <div className="w-2.5 h-2.5 rounded-2xl bg-blue-800"></div>
              <p>About Us</p>
            </div>
            <p className=" text-black/90 text-[20px]">Explore Passion,Fitness and Adventure with Us</p>
          </div>

          <div className="w-[40%] h-full p-[1%] rounded-3xl flex justify-center items-end flex-col">
            <p className="text-[58px]  font-bold">Running World </p>
            <p className="text-[66px]  font-bold">Welcome</p>
          </div>
        </div>
        <div className="w-full h-[70%] flex justify-center items-center gap-[1%]">
          <div className="w-[50%] h-full flex flex-col ">
            <div className="w-full h-[75%] bg-[url('assets/jumpingrunner.jpg')] bg-center bg-cover rounded-3xl">

            </div>
              
            <div className="w-full h-[22%] flex justify-start items-center p-[4%] gap-[2%]">
              <button className="p-[1%] h-full w-[11%] bg-none border border-black/70 backdrop-blur-2xl flex justify-center shadow-2xl items-center rounded-[100px]"><img src="https://img.icons8.com/?size=100&id=39944&format=png&color=000000" alt="" className="w-[70%]"/></button>
              <p className="text-[16px] ">01 <strong className="text-[26px]">/12</strong></p>
              <button className="p-[1%] h-full w-[11%] bg-blue-800 flex justify-center shadow-2xl items-center rounded-[100px]"><img src="https://img.icons8.com/?size=100&id=39969&format=png&color=000000" alt="" className="w-[70%]"/></button>
            </div>
          </div>
          <div className="w-[50%] h-full flex flex-col gap-[2%]">
            <div className="w-full h-[40%] flex justify-between items-center ">
              <div className="w-[49%] h-full rounded-3xl bg-taupe-300 flex flex-col p-[2%]">
                <div className="w-full h-[30%] flex justify-end items-center p-[1%]">
                   <button className="p-[1%] h-full w-[17%] bg-none border border-blue-800 backdrop-blur-2xl flex justify-center shadow-2xl items-center rounded-[100px]"><img src="https://img.icons8.com/?size=100&id=3220&format=png&color=224DB8" alt="" className="w-[70%]"/></button>
                </div>
                <div className="w-full h-[70%] flex justify-start items-end p-[3%]">
                  <p className="text-white bg-white/20 p-[5%] rounded-2xl text-[22px] text-shadow-lg shadow-lg">Give Us New<br />  Ideas</p>
                </div>
              </div>
              <div className="w-[49%] h-full rounded-3xl bg-[url('assets/beerunner.jpg')] flex flex-col bg-cover bg-center p-[2%]">
                <div className="w-full h-[30%] flex justify-end items-center p-[1%]">
                   <button className="p-[1%] h-full w-[17%] bg-none border border-white backdrop-blur-2xl flex justify-center shadow-2xl items-center rounded-[100px]"><img src="https://img.icons8.com/?size=100&id=3220&format=png&color=999999" alt="" className="w-[70%]"/></button>
                </div>
                <div className="w-full h-[70%] flex justify-start items-end p-[3%]">
                  <p className="text-white backdrop-blur-md p-[5%] rounded-2xl text-[22px] text-shadow-lg">Suggestions for <br /> New runners</p>
                </div>
              </div>


            </div>

            <div className="w-full px-[6%] h-[55%] backdrop-blur-lg flex flex-col justify-center items-start rounded-3xl">
              <p className="text-[40px] text-black/70">Running is one of the best ways to enjoy nature, stay healthy, and create new experience.</p>

              <div className="w-[20%] h-[14%] rounded-4xl bg-white/80 flex justify-center items-center gap-[6%]">
              <div className="w-2.5 h-2.5 rounded-2xl bg-blue-800"></div>
              <p>Read More</p>
            </div>
            </div>
          </div>
        </div>
    </div>
  ) 
}
