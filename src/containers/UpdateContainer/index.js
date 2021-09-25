import './style.css';
import { Updates } from '../../components';
export default function UpdateContainer() {
    const items=[1,2,3,4,5,6,7,8,9,10,11,12,13];
    return (
        <div className='UpdateContainer'>
            {
                items.map((item)=><Updates/>)
            }
        </div>
    )
}
