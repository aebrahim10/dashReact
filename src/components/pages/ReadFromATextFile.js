import React , {useState} from "react";
import axios from 'axios';



const ContactUs = () => {
  const [sFile, setsFile]=useState("");
  const getFileUsingAxios= async()=>{
    const fileUrl = `${process.env.REACT_APP_PUBLIC_SLIDINGTTEXTFILENAME}`;
    console.log('processEnvFilename:',`${process.env.REACT_APP_PUBLIC_SLIDINGTTEXTFILENAME}`);
    console.log('filename = ', fileUrl);
    let resp = await axios.get(fileUrl);
    let data = resp.data;
    console.log("data======",data);
  }
  const getFile=()=>{
        const reader = new FileReader();
      //  const filename='./'+`${process.env.REACT_APP_SLIDINGTTEXTFILENAME}`
        console.log('processEnvFilename:',`${process.env.REACT_APP_SLIDINGTTEXTFILENAME}`)
        const filename='slidingText.txt';

        var arr=[];
        if(filename.length>0){
          console.log('filename ->>>>>>>>>>>>-----',filename);
            var file = new File(arr,filename);

            console.log("file is uiuiuieuiuwoeiwuoei",file);
            if (file){ 
              console.log('file +++++ is defined');
              reader.readAsText(file);
                reader.onprogress=((data)=>{
                  console.log('chunck',data)
                })
                reader.onload=()=>{
                    var fileContent= reader.result;
                    console.log('filename =========',fileContent);
                    console.log('arrrrrr ',arr);
                    setsFile(fileContent);
                }
                reader.onerror=()=>{
                    console.log("reader error",reader.error)
                }
          }
        }
    }
    if (sFile===''){
        getFileUsingAxios();
    }
  
  return (
   
    <div style={{bgcolor:'grey', color:'red'}}>{sFile}</div>
  );
};
export default ContactUs;


