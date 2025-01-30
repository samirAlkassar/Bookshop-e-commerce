import React from 'react'
import {FetchData} from "../api/api.js"
import { useState, createContext, useContext, useEffect } from "react";

const APIcontext = createContext();

export const useAPIcontext = () => {
    const context = useContext(APIcontext);
    if (!context) {
        throw new Error("APICONTEXT must be used within a APIcontextProvider");
    }
    return context;
};

export const APIcontextProvider = ({ children }) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
  
    useEffect(()=>{
      const FetchProducts = async () => {
        setLoading(true);
        try{
          const ProductsData = await FetchData();
          setData(ProductsData)
        } catch(err){
          console.error(err)
          setError(err)
        }finally{
          setLoading(false)
        }
      }
      FetchProducts()
    },[])

    const value = {
        data,
        loading,
        error
    }
    return (
        <APIcontext.Provider value={value}>
            {children}
        </APIcontext.Provider>
    );
}

