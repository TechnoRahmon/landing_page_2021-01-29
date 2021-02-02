import React, { useReducer } from "react";
import axios from "axios"; // dealing with rest full API
import Context from "./Context";
import {Reducer } from '../context/Reducer'


const State = ({children})=>{

    const initialState = {
        isLoading: true,
        success:false,
        error: null,
  
      };
    const [state, dispacth] = useReducer(Reducer, initialState);


      // send application
      const ApplyNow = async (student)=>{
        const config = {
            headers: {
              "Content-Type": "application/json",
            },};
            try {
            //const response = await axios.post("/api/send", student, config);
            const response = await axios.post("https://usqvi14deg.execute-api.eu-north-1.amazonaws.com/CCLandingPageStudents", student, config);
            //console.log(response.data.success)
            dispacth({
                type: 'Apply',
                success:response.data.success, // updated 
                });
                    
            } catch (error) {
                 //console.log('err : ',error.response.data.success );
                dispacth({ type: 'Error', 
                    payload: error.response.data.msg ,    
                    success:error.response.data.success, //updated 
          });
            }
      }



      const ClearError = ()=>{
        state.error = null;
   }






    return (
        <Context.Provider
          value={{
            
            error: state.error,
            success:state.success,
            ApplyNow,ClearError

          }}
        >
          {children}
        </Context.Provider>
      );
}

export default State ; 