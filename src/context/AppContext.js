import { createContext, useState } from "react";
import {baseUrl } from "../baseUrl";

export const AppContext=createContext();

export default function AppContextProvider({children}){
    const [loading, setLoading]=useState(false);
    const [posts,setPosts]=useState([]);
    const [page,setPage]=useState(1);
    const [totalPages,setTotalPages]= useState(null);


    // data filling 
    async function fetchBlogPost(page=1){
        setLoading(true);
        let url=`${baseUrl}?page=${page}`;
        try{
            const result=await fetch(url);
            const data=await result.json();
            console.log(data);
            setPage(data.page);
            setTotalPages(data.totalPages);
            setPosts(data.posts);
        }catch(error){
            console.log("Error in API call");
            setPage(1);
            setPosts([]);
            setTotalPages([]);
        }
        setLoading(false);
    }

    function handlePageChange(page){
        setPage(page);
        fetchBlogPost(page); 
    }
    const value={
        posts,
        setPosts,
        loading,
        setLoading,
        page,
        setPage,
        totalPages,
        setTotalPages,
        fetchBlogPost,
        handlePageChange
    };


    return <AppContext.Provider 
    value={value}>{children}
    </AppContext.Provider>
}