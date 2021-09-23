import './style.css';
export default function DashBoardCard({item}) {
    return (
        <div className="card">
            <div className="firstDiv">
                <div style={{fontWeight:'2em',fontSize:'1.5em'}}> {item.number}</div>
                <div> {item.title} </div>
            </div>
            <div className="secondDiv" >
                {item.logo}
            </div>
        </div>

    )
}
