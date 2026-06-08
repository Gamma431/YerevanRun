import { Link } from "react-router"

export default function Nav() {
  return (
    <nav className="w-full h-[13.5%] p-[2%] px-[10%] flex justify-evenly  fixed top-0 z-10">
        {/* logo */}
        <div className="w-[15%] shadow-xl bg-white h-full rounded-[50px] p-[0.5%] flex justify-start items-center gap-[5%]">
          <img src="/public/YRlogo.jpg" alt="" className="h-full rounded-[100px]"/>
          <h1 className="font-bold text-[22px] text-shadow-lg "><Link to="/">YerevanRun</Link></h1>
        </div>
        {/* menu */}
        <div className="w-[30%] shadow-xl bg-white rounded-[100px] p-[1%] flex items-center justify-center gap-[5%]">
          <Link to='/programs'>Programs</Link>
          <Link to='/comunity'>Comunity</Link>
          <Link to='/events'>Events</Link>
        </div>
      
        {/* contactmodal */}

        <div className="bg-white shadow-xl w-[13%] rounded-[100px] p-[0.5%] flex items-center justify-between pl-[2%] gap-[1%]">
          <h2>Contact Us</h2>
          <div className="bg-blue-800 flex justify-center items-center p-[8%] h-full w-[32%] rounded-[100px]"><img src="/public/arrowupright.png" alt="" /></div>
        </div>

        {/* hamburger menu. */}
        <div className="w-[4.5%] shadow-xl h-full bg-white rounded-[100px] p-[1%]">
          <img src="/public/menu.png" alt="" />
        </div>
      </nav>
  )
}
