/**
 * This component is nothting but the Navbar (Appbar) which will be on the Top section.
 * Being Utilised by the main.js (outermost layout)
 * 
 * Written By : tejas Ladhani
 */
import React from 'react'
import {
  LogoutOutlined,
} from '@ant-design/icons';
import { Layout } from 'antd';

function AppHeader() {
  const { Header } = Layout;

  return (
    <Header className="site-layout-background Header" >
      <div  className='logo' style={{display:'flex',justifyContent:'space-between'}} >
        <h2 style={{color:'white'}}>Handle My Admissions</h2>
        <img style={{height:'50px', width:'50px'}} src='/computer.png'/>
        {/* <LogoutOutlined /> */}
      </div>
    </Header>
  )
}

export default AppHeader;
