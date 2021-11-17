import { FormWithStep } from '../../../containers';
import { Layout, Typography } from 'antd'
import './style.css';
import { useContext, useEffect,useState } from 'react';
import { UserContext } from '../../../contexts/user';
import { useHistory } from 'react-router';
export default function Application() {
    const history = useHistory();
    const [applicationdetails, ] = useContext(UserContext);
    const [finaldata, setfinaldata] = useState();
    const id = history.location.pathname.split('/')[3];
    // console.log("ID : ", id);
    // console.log(applicationdetails);
    useEffect(() => {
        applicationdetails.map(item => {
            if(item.ApplicationID == id && item.ApplicationID !=undefined)
            setfinaldata(item);
        });
        console.log(finaldata);
    }, [])
    return (
               <div className="Application" >

            <Layout style={{ padding: '2em' }}>
                <Typography.Title level={3}>
                    Application
                </Typography.Title>
                {finaldata!=undefined&&<FormWithStep application={finaldata}/>}
            </Layout>

        </div>
    )
}
