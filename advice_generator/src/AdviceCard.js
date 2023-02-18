
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

    <div className="advice-card bg-[#323A49] w-[90%] h-[80%] sm:w-[75%] sm:h-[400px] md:w-[75%] md:h-[400px] lg:w-[60%] lg:h-[400px] xl:w-[600px] xl:h-[400px] flex flex-col items-center justify-around rounded-[20px] relative drop-shadow-2xl">
        
        <p id="adviceNumber" className="advice-number text-[#52FFA8] font-Manrope tracking-[5px] text-[12px] font-bold mt-[1rem]"> ADVICE # {adviceID}  </p>
        
        <p className="advice-text text-[20px] md:text-[28px] max-w-[80%] text-center font-Manrope font-extrabold text-[#CEE3E9]">{adviceText}</p>

        <div className="separator mb-[3rem]">
            <svg xmlns="http://www.w3.org/2000/svg" className="sm:w-[444px] sm:h-[16px] w-[60%] h-[100%]" ><g fill="none" fill-rule="evenodd"><path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z"/><g transform="translate(212)" fill="#CEE3E9"><rect width="6" height="16" rx="3"/><rect x="14" width="6" height="16" rx="3"/></g></g></svg>
        </div>
        

        <button className="advice-fetch-button p-[20px] rounded-full bg-[#52FFA8] absolute bottom-[-30px]" onClick={fetchAdvice} >
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" fill="#202733"/></svg>
        </button>
        
    </div>
  )
}

export default AdviceCard