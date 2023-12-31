import './App.css';
import React, {useState} from "react";
import axios from "axios";
import NavigationBar from "./Navbar";

function Visualize(){
    const kommuniccate = ((d, m) => {
        var kommunicateSettings =
          { "appId": "365423f5538062fede68e6d8d5cd92f1f", "popupWidget": true, "automaticChatOpenOnNavigation": true };
        var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
        s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
        var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
        window.kommunicate = m; m._globals = kommunicateSettings;
      })(document, window.kommunicate || {});

      const visualFunc =async(event)=>{
        event.preventDefault();
          axios.post(
            "https://us-central1-csci5410-project-370006.cloudfunctions.net/visualisation",
            ).then((res)=>{
              alert("Data updated, please refresh the browser page")
              console.log(res);
            console.log(res.data);
          }).catch((error)=>{
            console.log(error);
          })
        } 
  
    return (
      
        <div>
            <NavigationBar />
            <iframe src="https://datastudio.google.com/embed/reporting/e4740db1-caf6-4d84-ac2a-e2c4acac7d27/page/3GW9C" height="650px" width="1350px" frameBorder={0} style={{ marginLeft:"35px",marginTop:"35px", border: "2.5px solid black"}} allowFullScreen></iframe>
            {/* <iframe src="https://datastudio.google.com/embed/u/0/reporting/dddfc57f-08fd-49cd-8d37-b1d98f135fb5/page/kk88C" height="600" width="450" frameBorder={0} style={{ margin:8}} allowFullScreen></iframe> */}
        <button onClick={visualFunc} style={{backgroundColor:"#ED595C", marginLeft:"35px"}}>Refresh Data</button>
        </div>
    );
}
    export default Visualize;