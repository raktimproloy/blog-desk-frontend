import React from 'react'
import settingStyle from "../style.module.css"
import {FaFacebookF} from 'react-icons/fa';
import {AiOutlineTwitter} from 'react-icons/ai';

const UserSetting = ({updateProfile, setUpdateProfile}) => {
  return (
        <>
            <form>
                <div>
                    <p>Full Name</p>
                    <input type="text" className={`inputStyle`} value={updateProfile?.fullName || ""} onChange={(e) => setUpdateProfile({...updateProfile, fullName: e.target.value})} />
                </div>
                <div>
                    <p>About Yourself</p>
                    <input type="text" className={`inputStyle`}  value={updateProfile?.about || ""} onChange={(e) => setUpdateProfile({...updateProfile, about: e.target.value})} />
                </div>
                {/* <div>
                    <div>
                        <p>Password</p>
                        <input type="text" className={`inputStyle`} />
                    </div>
                    <div>
                        <p>Confirm Password</p>
                        <input type="text" className={`inputStyle`} />
                    </div>
                </div> */}
                <div>
                    <p>Verify Your Id {"("}<span>Verified</span> <span>Not Verified</span>{")"}</p>
                    <button className={`bgColorLeftToRight px-4 py-1`}>Verify</button>
                </div>
                <p>Social Profile</p>
                <div className={`d-flex align-items-center`}>
                    <p><FaFacebookF/></p>
                    <input type="text" className={`inputStyle`}value={updateProfile?.facebook || ""} onChange={(e) => setUpdateProfile({...updateProfile, facebook: e.target.value})} />
                </div>
                <div className={`d-flex align-items-center`}>
                    <p><AiOutlineTwitter/></p>
                    <input type="text" className={`inputStyle`}value={updateProfile?.twitter || ""} onChange={(e) => setUpdateProfile({...updateProfile, twitter : e.target.value})} />
                </div>
            </form>
        </>
    )
}

export default UserSetting