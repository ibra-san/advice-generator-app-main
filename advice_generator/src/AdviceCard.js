
function AdviceCard() {
  return (
    <div className="advice-card bg-[#323A49] w-[40%] min-h-[45%] flex flex-col items-center justify-around rounded-[20px] relative drop-shadow-2xl">
        <p id="adviceNumber" className="advice-number text-[#52FFA8] font-Manrope tracking-[5px] text-[12px] font-bold mt-[1rem]"> ADVICE #177</p>
        <p className="advice-text text-[28px] max-w-[80%] text-center font-Manrope font-extrabold text-[#CEE3E9]">"It is easy to sit up and take notice, what's difficult is getting up and taking action."</p>

        <div className="separator mb-[3rem]">
            <svg width="444" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z"/><g transform="translate(212)" fill="#CEE3E9"><rect width="6" height="16" rx="3"/><rect x="14" width="6" height="16" rx="3"/></g></g></svg>
        </div>
        

        <button className="advice-fetch-button p-[20px] rounded-full bg-[#52FFA8] absolute bottom-[-30px]">
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" fill="#202733"/></svg>
        </button>
        
    </div>
  )
}

export default AdviceCard