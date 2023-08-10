import React from "react"

const Displaycomp=({listdata,setListdata})=>{

    function removefunc (e,index) {
     console.log("hi",index);
        let newlist =listdata.filter((ele,ind)=>{return (index!==ind)})
        setListdata([...newlist])
    }

    return(<>
        {listdata.map((elem,index)=>{ return (<div key={index}>
            <span>{elem}</span> <span><button onClick={(e)=>{removefunc(e,index)}}>Delete</button></span>
            </div>)})}
        </>)
}

export default Displaycomp;