import React ,{useState ,useEffect}from 'react'
import axios  from  "axios"
import "./Activ.module.css"

// import { get } from 'mongoose'

export default function Activities({Token}) {

const [activArr, setActivArr] = useState([])


useEffect(() => {
    const getData =async()=>{
    try { 
      const response= await axios.get("https://khaked-project-backend.herokuapp.com/Activitie" );
      setActivArr(response.data)
      console.log(response.data);;
    }catch (error) {
      console.log(error.response.data)
    }
  }
  getData()
  }, [])



  const addTic= async(walaa)=>{
    console.log("cliiiiiiiick");
    const res=await axios.post("https://khaked-project-backend.herokuapp.com/oneEvent",{
      walaa:walaa
    } , {   headers: {authorization: `Bearer ${Token}`}}  )
    
    console.log(res.data);



  }

    return (
        <div class="container mt-3">
           <div className="row">
        {activArr.map((ele)=>{
          console.log(ele);
            return <div className="col-md-4" >
<div className="item text-center">
              
                <h2>{ele.title}</h2>
                <p style={{padding:"10px"}}>{ele.des}</p>
                <p>{ele.deta}</p>
                <img style={{width:"100%" ,height:"420px",borderRadius:"10px "}}  src={ele.img}/>
                {/* <img style={{width:"100%" ,height:"420px",borderRadius:"10px "}} src={ele.tic} onClick={()=>{addTic(ele._id)}}/> */}
                < img style={{width:"100px" ,height:"100px",borderRadius:"10px ", padding:"10px"}}  src={ele.tic}  onClick={()=>{addTic(ele._id)}} alt="not found" />
    </div>
            </div>


        })}
        </div>
        </div>
    )
}


{/* <div>
        <video style={{backgroundColor:"#ffd"}} className="App" width="100%" height="500px" controls autoplay playsInline >
                    <source src={Myvideo} type="video/mp4"/>
                    not found
            </video>
        </div>
        <div class="container mt-3">
            <div className="row">
                    {myData.map((item) =>
                        <div className="col-md-4">
                            <div className="item text-center">
                                    <img style={{width:"100%" ,height:"420px",borderRadius:"10px "}} src={item.srcimg} alt="not found" />
                                <button  className="btn btn-danger mb-2 w-25 m-auto">
                                    <i class="fas fa-clipboard-check"></i>
                                </button>
                            </div>
                            </div>
                    )}
            </div>
            </div> */}