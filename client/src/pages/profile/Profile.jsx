import { useState, useEffect } from "react"
import axios from 'axios'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Topbar from '../../components/topbar/Topbar'
import { useParams } from "react-router"

import './profile.css'

export default function Profile() {

    const [user, setUser] = useState({})
    const username = useParams().username; 
    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get(`/users?username=${username}`)
            setUser(res.data)
        }
        fetchUser()
    }, [username])

    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    return (
        <>
            <Topbar />
            <div className="profile">
                <Sidebar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img className="profileCoverImg" src={user.coverPicure || PF+"person/default_cover.jpg"} alt="" />
                            <img className="profileUserImg" src={user.profilePicture || PF+"person/default_avatar.jpg"} alt="" />
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">{user.username}</h4>
                            <span className="profileInfoDecs">{user.bio}</span>

                        </div>
                    </div>
                    <div className="profileRightBotton">
                        <Feed username={username}/>
                        <Rightbar user={user}/>
                    </div>
                </div>
            </div>

        </>
    )
}
