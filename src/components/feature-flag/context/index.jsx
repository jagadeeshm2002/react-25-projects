import { createContext, useEffect, useState } from "react";
import featureFlagsDataServiceCall from "../data";




export const FeatureFlagsContext = createContext(null);

export default function FeatureFlagGlobalState({children }){
    const[loading,setLoading] = useState(false);
    const[enabledFlags,setEnabledFlags] = useState({})

    async function fetchFeatureFlags(){
        try {
            setLoading(true)
            const res = await featureFlagsDataServiceCall()
            // const data = await res.json()
            console.log(res)
            setEnabledFlags(res)
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
            throw new Error(error)
        }
    }

    useEffect(()=>{
        fetchFeatureFlags();

    },[])

    return <FeatureFlagsContext.Provider value={{loading,enabledFlags}}> {children}</FeatureFlagsContext.Provider>
}