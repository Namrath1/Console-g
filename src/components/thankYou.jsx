import React from "react";
import nxGenLogo from "../assets/nxGenLogo.svg";

function ThankYou() {
    
    return (

        <div className=" px-3">
            <div className=" my-3 flex justify-center sticky mt-9">
                <nav class="flex justify-center  pt-3  top-0">
                    <img
                        class="mx-10 mb-3 h-20"
                        src={nxGenLogo}
                        alt="logo.svg"
                    />
                </nav>
            </div>

            <div className="pb-16  m-auto md:max-w-[500px] flex flex-col justify-center">
                <div className="pt-5  mb-7 mt-4 ">
                    <p className="font-BiennaleBold text-center font-[620] text-xl md:text-4xl text-[maroon]">You did it!<div className="font-BiennaleBook text-[black] mt-4 text-lg">You’ll recieve your results in the next 5 minutes <br />
                        to the email provided. </div> </p>
                </div>
                <div className="font-BiennaleRegular text-center mt-6 text-lg">Don’t hesitate to reach out to <span className="text-[maroon]">connect@nxgencoachnetwork.com</span>  if you’d like to explore how we can help further your leadership journey.</div>
            </div>

        </div>

    );
}
export default ThankYou;
