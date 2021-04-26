import React, {useState, useEffect} from 'react';
import axios from 'axios';

const GetUser = () => {

    const [users, getUsers] = useState([]);

    useEffect(() => {
      const getUsers = async () => {
        const result = await axios.get("https://livehallbergmichael.okta.com/api/v1/users")
          .then(res => {
            users = res.data;
    
          })
      } 
      getUsers();
    }, [])


return (
    <div>{users}</div>        
    )
}

export default GetUser;
