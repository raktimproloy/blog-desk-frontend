import React, { useContext, useState } from 'react'
import settingStyle from "../style.module.css"
import { BsTwitter } from 'react-icons/bs';
import { FiFacebook, FiLinkedin, FiInstagram} from 'react-icons/fi';
import { useLocation } from 'react-router-dom';
import ContextApi from "../../../../ContextApi/ContextApi";
import axios from "axios"

const UserSetting = ({updateProfile, setUpdateProfile, setPopup}) => {
    const [userData, setUserData] = useState([])

    const {databaseApi} = useContext(ContextApi)
    
    const {search} = useLocation()
    const queryParams = new URLSearchParams(search)
    const userId = queryParams.get("userId")

    const handleVerify = (e) => {
        e.preventDefault()

        const send = {"forClick": "send", "email": updateProfile.email}
        setPopup(true)

        axios.put(`${databaseApi}/users/verify/${userId}`, send)
        .then(res => {
            if(res.data.message === "Email sent successful"){
            }else{
            }
        })
        .catch(err => {
            console.log(err);
        })
    }

    
  return (
        <>
            
            <form>
                <div className='mb-4'>
                    <p className='mb-2'>Verify Your Id {"("}{updateProfile.isVerified ? <span>Verified</span> : <span>Not Verified</span>}{")"}</p>
                    {!updateProfile?.isVerified ? <button className={`bgColorLeftToRight px-4 py-1`} onClick={handleVerify}>Verify</button> :
                    <button className={`px-4 py-1 ${settingStyle.verifiedButton}`} onClick={handleVerify}>Verified</button>}
                </div>
                
                <div>
                    <p>Full Name</p>
                    <input type="text" className={`inputStyle mb-4`} value={updateProfile?.fullName || ""} onChange={(e) => setUpdateProfile({...updateProfile, fullName: e.target.value})} />
                </div>
                <div>
                    <p>About Yourself</p>
                    <input type="text" className={`inputStyle mb-4`}  value={updateProfile?.about || ""} onChange={(e) => setUpdateProfile({...updateProfile, about: e.target.value})} />
                </div>
                <p>Social Profile</p>
                <div className={`d-flex align-items-center`}>
                    <p className={`${settingStyle.linkInputIcon}`}><FiFacebook/></p>
                    <input type="text" className={`inputStyle ${settingStyle.linkInputField}`}value={updateProfile?.facebook || ""} onChange={(e) => setUpdateProfile({...updateProfile, facebook: e.target.value})} />
                </div>
                <div className={`d-flex align-items-center`}>
                    <p className={`${settingStyle.linkInputIcon}`}><BsTwitter/></p>
                    <input type="text" className={`inputStyle ${settingStyle.linkInputField}`}value={updateProfile?.twitter || ""} onChange={(e) => setUpdateProfile({...updateProfile, twitter : e.target.value})} />
                </div>
                <div className={`d-flex align-items-center`}>
                    <p className={`${settingStyle.linkInputIcon}`}><FiLinkedin/></p>
                    <input type="text" className={`inputStyle ${settingStyle.linkInputField}`}value={updateProfile?.twitter || ""} onChange={(e) => setUpdateProfile({...updateProfile, twitter : e.target.value})} />
                </div>
                <div className={`d-flex align-items-center`}>
                    <p className={`${settingStyle.linkInputIcon}`}><FiInstagram/></p>
                    <input type="text" className={`inputStyle ${settingStyle.linkInputField}`}value={updateProfile?.twitter || ""} onChange={(e) => setUpdateProfile({...updateProfile, twitter : e.target.value})} />
                </div>
            </form>
        </>
    )
}

export default UserSetting