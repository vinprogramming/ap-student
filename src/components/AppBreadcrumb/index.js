import {Breadcrumb} from 'antd';
export default function AppBreadcrumb({keys}){
    const bc=keys.map((Item)=><Breadcrumb.Item>{Item}</Breadcrumb.Item>)
    return(
        <Breadcrumb style={{ margin: '16px 0' }}>
            {bc}
        </Breadcrumb>
    )
}