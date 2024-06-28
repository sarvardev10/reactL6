import React, { useEffect, useState } from "react";
import { useUsersProps } from "./users.props";
import { hoc } from "../../utils/hoc";
import { Table } from "antd";
import { request } from "../../utils/request";
const Users = hoc(useUsersProps, () => {
  const columns = [
  
  ];

  const [values, setValues] = useState([]);
  const getUsers = async () => {
    try {
      const { data } = await request("users");
      console.log(data);
      setValues(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div>
      <Table columns={columns} dataSource={values || []} />
    </div>
  );
});

export default Users;
