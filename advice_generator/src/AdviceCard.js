
import axios from "axios";
import {useEffect, useState} from "react"; 

function AdviceCard() {

  const [adviceID, setAdviceID] = useState([]);
  const [adviceText, setAdviceText] = useState([]); 

 
  
  useEffect ( () => { 
    fetchAdvice();
  }, [])

  const fetchAdvice = async () => { 

    try { 
      const response = await axios.get("https://api.adviceslip.com/advice"); 
      
      setAdviceID(response.data.slip.id); 
      setAdviceText(response.data.slip.advice);
      
    } catch (error) { 
      console.error (error); 
    }
    

  }


  

  return (

    <div className="advice-card bg-[#323A49] w-[90%] h-[60%] sm:w-[90%] sm:h-[250px] md:w-[600px] md:h-[350px] flex flex-col gap-1 items-center justify-around rounded-[20px] relative drop-shadow-2xl">
        
        <p id="adviceNumber" className="advice-number text-[#52FFA8] h-[15%] font-Manrope tracking-[5px] text-[12px] font-bold flex items-center "> ADVICE # {adviceID}  </p>
        
        <p className="advice-text  text-[25px] md:text-[28px] max-w-[80%] max-h-[90%] md:max-h-[50%] text-center font-Manrope font-extrabold text-[#CEE3E9] p-3"> " {adviceText} "</p>

        <div className="separator_desktop mb-[3rem] sm:block hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="sm:w-[444px] sm:h-[16px] w-[60%] h-[100%]" ><g fill="none" fill-rule="evenodd"><path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z"/><g transform="translate(212)" fill="#CEE3E9"><rect width="6" height="16" rx="3"/><rect x="14" width="6" height="16" rx="3"/></g></g></svg>
        </div>

        <div className="separator_mobile mb-[3rem] sm:hidden block">
            <svg width="295" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path fill="#4F5D74" d="M0 8h122v1H0zM173 8h122v1H173z"/><g transform="translate(138)" fill="#CEE3E9"><rect width="6" height="16" rx="3"/><rect x="14" width="6" height="16" rx="3"/></g></g></svg>
        </div>
        

        <button className="advice-fetch-button p-[20px] rounded-full bg-[#52FFA8] absolute bottom-[-30px]" onClick={fetchAdvice} >
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" fill="#202733"/></svg>
        </button>
        
    </div>
  )
}

export default AdviceCard