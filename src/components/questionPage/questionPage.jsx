import { useState } from "react";
import { useNavigate } from "react-router-dom"
import questions from "../../assets/questions";
import axios from "axios";
import EndPage from "../endPage/endPage";
import FilledCircle from "../../assets/loader.png";
import EmptyCirle from "../../assets/radiusLoader.png";
import BackButton from "../../assets/backButton.png";
import LogoRipple from "../../assets/logoAnimated.gif";
import nxGenLogo from "../../assets/nxGenLogo.svg"

export default function QuestionPage(props) {
    const navigate = useNavigate();
    const [qno, setQno] = useState(props.index);
    const [selectedAnswers, setAnswers] = useState(new Map());
    const [results, setResults] = useState([]);
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const mainUrl = "https://lsbackend.onrender.com";
    const testUrl = "http://localhost:3000";

    const handleSubmit = (e) => {
        console.log(results);



        const body = {
            "name": name,
            "email": email,
            "results": results
        }

        console.log(body);

        axios.post(mainUrl + "/assess", body)
            .then(resp => {
                console.log(resp);
            })
            .catch(err => {
                console.log(err);
            });
    }

    const handleClick = (e) => {
        const val = { "select": e.target.innerText, "pts": e.target.id };

        setResults([]);
        selectedAnswers.set(qno, val);
        selectedAnswers.forEach((value, ques) => {
            setResults((prev) => [...prev, { ques, value }])
        })
        const ele = document.querySelector("#fade-in");
        ele.classList.toggle("show");
        setTimeout(() => {
            ele.classList.toggle("show");
            setQno(prev => prev + 1);
        }, 900);



    }
    const getBack = (e) => {
        if (qno === 0) {
            navigate("/")
        }
        if (qno > 0) {
            const ele = document.querySelector("#fade-in");
            ele.classList.toggle("show");
            setTimeout(() => {
                ele.classList.toggle("show");
                setQno(prev => prev - 1);
            }, 900)

        }

    }




    return (
        <div >
            <div className="px-3">
                <div className="max-w-[95%] max-h-fit rounded md:rounded-full m-auto md:my-9  md:max-w-[85%]">
                    <div className='qCard'>
                        <nav class="flex justify-center  pt-3  top-0">

                            <img
                                class="mx-10 mb-3 h-20"
                                src={nxGenLogo}
                                alt="logo.svg"
                            />
                        </nav>


                        {qno < questions.length && qno >= 0 ? (
                            <div className=" text-center max-w-[300px] m-auto flex-col overflow-hidden flex-wrap  md:max-w-fit justify-center  show mb-10" id="fade-in">

                                <div className="flex justify-center">
                                    <div className="w-[20%] cursor-pointer " onClick={getBack}>

                                        <img
                                            width="17px"
                                            color="#800000"
                                            src={BackButton}
                                            alt="logo.svg"
                                            className="my-10 pt-1 "

                                        />
                                    </div>
                                    <div className="w-[80%] flex ml-[20%] md:ml-[21%] md:-mr-[10%]">
                                        {questions.map((val, idx) => {
                                            if (idx < qno) {
                                                return (<>
                                                    <img
                                                        width="15px"
                                                        height="15px"
                                                        color="#800000"
                                                        src={FilledCircle}
                                                        alt="logo.svg"
                                                        className="my-11 ml-1 md:ml-4"
                                                    />
                                                </>)
                                            }
                                            else {
                                                return (
                                                    <>
                                                        <img
                                                            width="15px"
                                                            height="15px"
                                                            color="#800000"
                                                            src={EmptyCirle}
                                                            alt="radiusLoader.svg"
                                                            className="my-11 ml-1 md:ml-4"
                                                        />
                                                    </>
                                                )
                                            }
                                        })}
                                    </div>


                                </div>
                                <div className="flex justify-center">
                                    <img
                                        width="80px"
                                        color="#800000"
                                        src={LogoRipple}
                                        alt="radiusLoader.svg"
                                        className="mb-6"
                                    />
                                </div>
                                <h3 className="font-BiennaleBold text-lg md:max-w-[650px] pt-5 mb-10 md:text-2xl text-[#800000] md:whitespace-pre-line">{questions[qno].question}</h3>
                                {questions[qno].options.map(opt => {

                                    return (
                                        <div className="font-BiennaleMedium h-[75px] max-w-[290px] px-[15px] shadow-md  bg-white  mb-5 mx-auto rounded-xl text-sm  md:h-[90px] md:max-w-[400px] md:px-[15px]   md:text-lg border-2 border-[#c0c0c065] hover:border-[#762a2a] hover:text-white hover:bg-[#800000d0]  cursor-pointer flex items-center justify-center md:whitespace-pre-line" onClick={handleClick} id={opt.pts} >
                                            {opt.option}
                                        </div>)
                                })}

                            </div>
                        ) :
                            (<>
                                <EndPage handleSubmit={handleSubmit} name={name} setName={setName} email={email} setEmail={setEmail} />
                            </>)
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}


