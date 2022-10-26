import React, {useEffect} from 'react';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import './single.scss';
import { getUserByID} from '../../features/users/usersSlice';
import { getSelectedProperty } from '../../features/propertiesSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import Chart from '../../components/chart/Chart';
import Table from '../../components/table/Table';

const Single = ({info}) => {
  let {userId} = useParams();
  let {productId} = useParams();

  const dispatch = useDispatch();
  const user = useSelector((state) => state.users.users);
  const property = useSelector((state) => state.property.selectedProperty);


  useEffect(() => {
    if(info === 'userInfo'){
      dispatch(getUserByID(userId));
    }else{
      dispatch(getSelectedProperty(productId));
    }
  }, [dispatch, userId, productId, info]);
  
  console.log(property[0]?.propertyName);

  return (
    <div className='single'>
       <Sidebar/>
       <div className='singleContainer'>
          <Navbar/>
          <div className="top">
            <div className="left">
                <h1 className="title">Information</h1>
                <button className="editButton">Edit</button>
                {info === 'userInfo' ? <div className="item">
                    <img src="https://classic.exame.com/wp-content/uploads/2021/05/WhatsApp-Image-2021-05-07-at-16.39.40.jpeg?quality=70&strip=info&w=1024" alt="" className="itemImage" />
                    <div className="details">
                      <div className="detailItem">
                        <span className="itemKey">Email:</span>
                        <span className='itemValue'>{user[0]?.email}</span>
                      </div>
                      <div className="detailItem">
                        <span className="itemKey">Status:</span>
                        <span className='itemValue'>{user[0]?.isAdmin === 1 ? 'Admin' : 'User'}</span>
                      </div>
                      <div className="detailItem">
                        <span className="itemKey">Username:</span>
                        <span className='itemValue'>{user[0]?.username}</span>
                      </div>
                    </div>
                </div> : <div className="item">
                    <img src={property[0]?.propertyURL} alt="" className="itemImage" />
                    <div className="details">
                      <div className="detailItem">
                        <span className="itemKey">Property:</span>
                        <span className='itemValue'>{property[0]?.propertyName}</span>
                      </div>
                      <div className="detailItem">
                        <span className="itemKey">Type:</span>
                        <span className='itemValue'>{property[0]?.propertyType}</span>
                      </div>
                      <div className="detailItem">
                        <span className="itemKey">Location:</span>
                        <span className='itemValue'>{property[0]?.location}</span>
                      </div>
                      <div className="detailItem">
                        <span className="itemKey">Address:</span>
                        <span className='itemValue'>{property[0]?.address}</span>
                      </div>
                      <div className="detailItem">
                        <span className="itemKey">Room:</span>
                        <span className='itemValue'>{property[0]?.roomDescription}</span>
                      </div>
                    </div>
                </div>}
            </div>
            <div className="right">
              <Chart aspect={3/1} title="User Spending (Last 6 Months)"/>
            </div>
          </div>
          {info !== 'userInfo' && (
          <div className="bottom">
            <h1 className="bottomTitle">{property[0]?.propertyName}'s rooms</h1>
            <Table propertyId={productId}/>
          </div>)}
       </div>
    </div>
  )
}

export default Single