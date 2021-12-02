import './rightbar.css'
import { Users } from '../../dummyData'
import Online from '../online/Online'
export default function Rightbar({ profile }) {

    const RightbarHomePage = () => {
        return (
            <>
                <div className="birthdayContainer">
                    <img className="birthdayImg" src="assets/gift.png" alt="" />
                    <span className="birthdayText">
                        <b>Pola Foster</b> and <b>3 other friends</b> have a birthday today
                    </span>
                </div>
                <img className="rightbarAd" src="assets/ad.png" alt="" />
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendList">
                    {Users.map(u => (
                        <Online key={u.id} user={u} />
                    ))}
                </ul>
            </>
        )
    }

    const RightbarProfile = () => {
        return (
            <>
                <h4 className="rightbarTitle">User Information</h4>
                <div className="rightbarInfo">
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">City:</span>
                        <span className="rightbarInfoValue">Binh Thuan</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">From:</span>
                        <span className="rightbarInfoValue">La Ngau</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">Relationship:</span>
                        <span className="rightbarInfoValue">Single</span>
                    </div>
                </div>
                <h4 className="rightTitle">User's friends</h4>
                <div className="rightbarFollowings">
                    <div className="rightbarFollowing">
                        <img src="assets/person/18.jpg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">
                            John Carter
                        </span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="assets/person/19.jpg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">
                            John Carter
                        </span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="assets/person/20.jpg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">
                            John Carter
                        </span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="assets/person/15.jpg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">
                            John Carter
                        </span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="assets/person/3.jpeg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">
                            John Carter
                        </span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="assets/person/4.jpeg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">
                            John Carter
                        </span>
                    </div>
                </div>
            </>

        )
    }

    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                {profile ? <RightbarProfile /> : <RightbarHomePage></RightbarHomePage>}
            </div>
        </div>
    )
}
