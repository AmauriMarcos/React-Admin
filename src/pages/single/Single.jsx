import React, {useEffect} from 'react';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import './single.scss';
import { getUserByID, selectAllUsers } from '../../features/users/usersSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import Chart from '../../components/chart/Chart';
import Table from '../../components/table/Table';

const Single = () => {
  let {userId} = useParams();
  const dispatch = useDispatch();
  const user = useSelector(selectAllUsers);

  useEffect(() => {
    dispatch(getUserByID(userId));
  }, [dispatch, userId]);

  

  return (
    <div className='single'>
       <Sidebar/>
       <div className='singleContainer'>
          <Navbar/>
          <div className="top">
            <div className="left">
                <h1 className="title">Information</h1>
                <button className="editButton">Edit</button>
                <div className="item">
                    <img src="https://classic.exame.com/wp-content/uploads/2021/05/WhatsApp-Image-2021-05-07-at-16.39.40.jpeg?quality=70&strip=info&w=1024" alt="" className="itemImage" />
                    <div className="details">
                      <h1 className="itemTitle">{user[0]?.name}</h1>
                      <div className="detailItem">
                        <span className="itemKey">Company:</span>
                        <span className='itemValue'>{user[0]?.company.name}</span>
                      </div>
                      <div className="detailItem">
                        <span className="itemKey">Email:</span>
                        <span className='itemValue'>{user[0]?.email}</span>
                      </div>
                      <div className="detailItem">
                        <span className="itemKey">Phone:</span>
                        <span className='itemValue'>{user[0]?.phone}</span>
                      </div>
                      <div className="detailItem">
                        <span className="itemKey">Username:</span>
                        <span className='itemValue'>{user[0]?.username}</span>
                      </div>
                      <div className="detailItem">
                        <span className="itemKey">Website:</span>
                        <span className='itemValue'>{user[0]?.website}</span>
                      </div>
                      <div className="detailItem">
                        <span className="itemKey">City:</span>
                        <span className='itemValue'>{user[0]?.address.city}</span>
                      </div>
                      <div className="detailItem">
                        <span className="itemKey">Street:</span>
                        <span className='itemValue'>{user[0]?.address.street}</span>
                      </div>
                    </div>
                </div>
            </div>
            <div className="right">
              <Chart aspect={3/1} title="User Spending (Last 6 Months)"/>
            </div>
          </div>
          <div className="bottom">
            <h1 className="bottomTitle">Latest Transactions</h1>
            <Table/>
          </div>
       </div>
    </div>
  )
}

export default Single