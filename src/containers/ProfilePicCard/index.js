import './style.css';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
export default function ProfilePicCard() {
    return (
        <div className="ProfilePicCard">
            <div className="ProfileImg">
                <Avatar shape="square" size={200} icon={<UserOutlined />} />
            </div>
            <div className="ProfileFooter">
                <div>Remove</div>
                <div>Upload</div>
            </div>

        </div>
    )
}
