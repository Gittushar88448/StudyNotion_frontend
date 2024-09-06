import { useEffect } from "react"


const useOnClickOutside = (ref , setOpen) => {

    useEffect(()=>{
        let handler = (e) =>{

            // it means click outside the dropdown
            if(!ref.current || !ref.current.contains(e.target)){
                setOpen(false);
            }
        }
        document.addEventListener("mousedown", handler);
        document.addEventListener("touchstart",handler);

        return () =>{
            document.removeEventListener("mousedown", handler);
            document.removeEventListener("touchstart", handler);
        }

    }, [ref , setOpen])


}

export default useOnClickOutside