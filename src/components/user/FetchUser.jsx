import { useState } from "react";
import { useEffect } from "react";
import DisplayUser from "./DisplayUser";

const url = "https://randomuser.me/api/"

const FetchUser = () => {
    const [userData, setUserData] = useState([])
    const [refresh, setRefresh] = useState(0)    

    const handleRefreshButton = () => {
       setRefresh(refresh + 1)
    };

    useEffect(()=>{
        const fetchUserData = async () => {
            try{
                const result = await fetch(url);
                const data = await result.json()
                if (ignore){
                    setUserData(data.results)
                }
            } catch (error) {
                console.log(error.message)
            }
        }

        let ignore = true;
        fetchUserData();

        return () => ignore=false;
    },[refresh])

    return (
        <div>
            <DisplayUser userData={userData} />
            <button type="button" className="refresh-btn" onClick={handleRefreshButton}>
                NEW <i className="fa-solid fa-plus"></i>
            </button>
        </div>
    );
}
 
export default FetchUser;
