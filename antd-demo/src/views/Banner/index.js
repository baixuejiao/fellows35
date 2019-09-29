import React, { Component } from 'react';

import {Table} from 'antd'

class index extends Component {
  constructor(params) {
    super(params)
    this.state = {
      columns: [
        {
          title: 'ID',
          dataIndex: 'id',
          key: 'id',
        },
        {
          title: '姓名',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: '年龄',
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: '住址',
          dataIndex: 'address',
          key: 'address',
        },
      ]
    }
  }
  render() {
    const dataSource = [
      {
        id: '1',
        name: '胡彦斌',
        age: 32,
        address: '西湖区湖底公园1号',
      },
      {
        id: '2',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号',
      },
    ];
    
    return (
      <div>
        <Table dataSource={dataSource} columns={this.state.columns} />
      </div>
    );
  }
}

export default index;