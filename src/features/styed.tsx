export {}

export const Styed = ()=> {
    
    return (
      <div >
         <div className="flex bg-[#424549] !z-10 rounded-lg  justify-between p-2 items-center">
          <h2 className="text-2xl font-bold text-gray-200">Styco</h2>
          <button className="text-gray-200 hover:text-gray-300">
            <PanelTopCloseIcon className="h-6 w-6" />
          </button>
        </div>
      <div className="mt-2 rounded-lg !bg-[#282B30] pr-7 pl-2 pt-2 max-w-sm mx-auto max-h-[450px] overflow-auto scrollbar-thumb-rounded scrollbar scrollbar-thumb-[#CAD2E0] scrollbar-track-rounded scrollbar-track-[#89909C] scrollbar-thin">
       
        <div className=" text-[#DCDCDC]">
          <p className="select-text">
            It was either use Plasmo, or do everything in the vanilla extension way. The big thing we wanted from a
            solution like Plasmo was to not have so much tie-in and commitment to a specific platform [...] we realized
            that it was the right level of abstraction and commitment for us.
          </p>
        </div>
      </div>
      
      </div>
    )
  }
  
  function PanelTopCloseIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
        <line x1="3" x2="21" y1="9" y2="9" />
        <path d="m9 16 3-3 3 3" />
      </svg>
    )
  }
  