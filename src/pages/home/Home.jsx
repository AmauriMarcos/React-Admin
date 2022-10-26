import React, {useEffect} from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import './home.scss';
import Navbar from '../../components/navbar/Navbar';
import Widget from '../../components/widget/Widget';
import Featured from '../../components/featuredChart/Featured';
import Chart from '../../components/chart/Chart';
import Table from '../../components/table/Table';

const Home = () => {
  
  return (
    <div className='home'>
        <Sidebar/>
        <div className="homeContainer">
          <Navbar/>
          <div className="widgets">
            <Widget type="user"/>
            <Widget type="order"/>
            <Widget type="earnings"/>
            <Widget type="balance"/>
          </div>
          <div className="charts">
            <Featured/>
            <Chart aspect={2/1} title="Last 6 months (Revenue)"/>
          </div>
          {/* <div className="listContainer">
              <h1 className="listTitle">Latest Transactions</h1>
              <Table/>
          </div> */}
        </div>
    </div>
  )
}

export default Home