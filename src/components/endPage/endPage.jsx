import React from "react";
import "./endPage.css";
import nxGenLogo from "../../assets/nxGenLogo.svg"

function EndPage({handleSubmit,name,setName,email,setEmail}) {
  return (
     
      <div className=" px-3">
        <div className=" mt-3 flex justify-center sticky">
        <img
          class="mx-10 mb-3 h-16 mt-3"
          src={nxGenLogo}
          alt="logo.svg"
        />
        </div>
        
          <div className="pb-16  m-auto md:max-w-[340px]">
            <div className="py-5 mb-9 mt-4 ">
             <p className="font-BiennaleBold text-center font-[620] text-xl md:text-2xl text-[maroon]">Congratulations on completing the assessment!  <div className="font-BiennaleBook text-[black] mt-4">Now claim your results</div> </p> 
            </div>
            <div className="flex flex-col overflow-hidden">
                <input type="text" placeholder="Your Name" className="w-[260px] h-[49px] mx-auto rounded-xl border-4 border-[#c0c0c065] md:w-[340px] md:h-[60px] pl-3" value={name} onChange={function(e){
                  setName(e.target.value)
                }}/>
                <input type="email" placeholder="Your Email" className="w-[260px] h-[49px] mx-auto mt-4 mb-10 rounded-xl border-4 border-[#c0c0c065] md:w-[340px] md:h-[60px] pl-3" value={email} onChange={function(e){
                  setEmail(e.target.value);
                }}/>

                <button className="font-BiennaleRegular w-[180px] h-[50px] mx-auto border-4 border-[#c0c0c065] bg-[#800000d0] rounded-xl  text-white md:w-[200px] md:h-[60px]" onClick={handleSubmit}>
                    Show Me My Results!
                </button>
                
            </div>
          </div>
        
      </div>
    
  );
}
export default EndPage;
