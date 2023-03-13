import jwt_decode from "jwt-decode";
import { Cookies } from "react-cookie";

function AuthVerification (){
    const cookies = new Cookies()
    const token = cookies.get("blogDeskToken")
    if(token !== undefined){
        const decode = jwt_decode(token)
            if(decode.exp * 1000 < Date.now()){
                return {
                    isExp : false,
                    userId: "",
                    fullName: "",
                    email: ""
                };
            }else{
                return {
                    isExp : true,
                    userId: decode.userId,
                    fullName: decode.userFullName,
                    email: decode.email
                }
            }
        }else{
            return {
                isExp : false,
                userId: "",
                fullName: "",
                email: ""
            };
        }
    }

export default AuthVerification;