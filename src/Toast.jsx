import React, { useEffect, useState } from 'react';
import './Toast.css';
const Toast = ({toastData}) => {
    const IMGURL = import.meta.env.BASE_URL;
    const [toast, setToast] = useState([]);
    const [toastDetails, setToastDetails] = useState({
        success: {icon: "success.png", title: "Success:"},
        error: {icon: "error.png", title: "Error:"},
        warning: {icon: "warning.png", title: "Warning:"}
    });
    useEffect(()=>{
        if(!toastData.type)
            return;
        setToast([...toast, toastData]);
        setTimeout(() => {
            closeToast(toastData.id);
        }, 5000);
    },[toastData]);
    function closeToast(id){
        setToast((toast)=>toast.filter((ele)=>ele.id !== id));
    }
    return (
        <ul className='toast'>
            {toast.map((ele)=>(
                <li key={ele.id} className={ele.type}>
                    <label onClick={()=>closeToast(ele.id)}>&times;</label>
                    <div>
                        <img src={IMGURL + toastDetails[ele.type].icon} alt=''/>
                        <span>{toastDetails[ele.type].title} {ele.message}</span>
                    </div>
                </li>
            ))}
        </ul>
    );
}
export default Toast;