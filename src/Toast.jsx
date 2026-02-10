import React, { useEffect, useState } from 'react';
import './Toast.css';
const Toast = ({toastData}) => {
    const IMGURL = import.meta.env.BASE_URL;
    const [toast, setToast] = useState([]);

    useEffect(()=>{
        if(!toastData.type)
            return;
        setToast([...toast, toastData]);
    },[toastData]);

    return (
        <ul className='toast'>
            {toast.map((t)=>(
                <li>
                    <label>&times;</label>
                    <div>
                        <img src={IMGURL + "success.png"} alt=''/>
                        <span>Success: Test Message</span>
                    </div>
                </li>
            ))}
        </ul>
    );
}

export default Toast;
