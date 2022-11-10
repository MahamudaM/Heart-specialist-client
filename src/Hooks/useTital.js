import { useEffect } from "react"

const useTital = title=>{
    useEffect(()=>{
        document.title=`${title}-Heart Care`;
    },[title])
};
export default useTital;