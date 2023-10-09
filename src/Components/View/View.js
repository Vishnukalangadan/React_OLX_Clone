import { collection, getDocs, query, where } from 'firebase/firestore';
import React, { useContext, useEffect, useState } from 'react';
import { db } from '../../firebase/config';
import { PostContext } from '../../store/PostContext';

import './View.css';
import { useNavigate } from 'react-router-dom';
function View() {
  const [userDetails, setUserDetails] = useState()
  const { postDetails } = useContext(PostContext)
  const navigate=useNavigate();
  useEffect(() => {
    const { userId } = postDetails
    const userRef = collection(db, "users")
    const q = query(userRef, where('id', '==', userId))
    getDocs(q).then((res) => {
      res.forEach(doc => {
        setUserDetails(doc.data())
      });
    })
  })
  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={postDetails.url}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postDetails.price} </p>
          <span>{postDetails.name}</span>
          <p>{postDetails.category}</p>
          <span>{postDetails.createdAt}</span>
        </div>
        {userDetails && <div className="contactDetails">
          <p>Seller details</p>
          <p>{userDetails.username}</p>
          <p>{userDetails.phone}</p>
        </div>}
      </div>
      
    </div>
  );
}
export default View;
