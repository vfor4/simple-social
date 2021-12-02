import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Topbar from '../../components/topbar/Topbar'
import './profile.css'

export default function profile() {
    return (
        <>
            <Topbar />
            <div className="profile">
                <Sidebar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img className="profileCoverImg" src="assets/person/16.jpg" alt="" />
                            <img className="profileUserImg" src="assets/person/19.jpg" alt="" />
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">Tran Dang Vu</h4>
                            <span className="profileInfoDecs">No bio</span>

                        </div>
                    </div>
                    <div className="profileRightBotton">
                        <Feed />
                        <Rightbar profile/>
                    </div>
                </div>
            </div>

        </>
    )
}
