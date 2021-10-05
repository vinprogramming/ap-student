/**
 * @param object - which contains @title ,@subcardData, @downloadPanelData and @setpsData
 * Written By : Tejas Ladhani
 */

import { Typography } from 'antd';
import { Subcard, ApplicationDownloadPanel, ApplicationSteps } from '../../components';
import './style.css';

export default function ApplicationCard({ title, subCardData, downloadPanelData, setpsData }) {
    return (
        <div className="ApplicationCard">
            <div className="ApplicationCard_inner">
                <div className="ApplicationCard_Title">
                    <Typography.Title level={4}>{title}</Typography.Title>
                </div>
                <div className="ApplicationCard_Details_SubCards_Container">
                    {
                        subCardData.map((data) => <Subcard data={data} />)
                    }
                </div>

                <div className="ApplicationCard_Details_DownloadPanel">
                    <ApplicationDownloadPanel />
                </div>

                <div className="ApplicationCard_stepsContainer">
                    {/* <hr/> */}
                    <ApplicationSteps />
                </div>
            </div>
        </div>
    )
}
