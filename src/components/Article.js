import React from 'react';
import { List } from 'antd';


const Articles = (props) => {
  return (
  <List
    itemLayout="vertical"
    size="large"
    pagination={{
      onChange: page => {
        console.log(page);
      },
      pageSize: 3,
    }}
    dataSource={props.data}
    footer={
      <div>
        <b>ant design</b> footer part
      </div>
    }
    renderItem={item => (
      <List.Item
        key={item.title}
      >
        <List.Item.Meta
          title={<a href={`/articles/${item.id}`}>{item.title}</a>}
          description={item.description}
        />
      {item.text}
      </List.Item>
    )}
  />
  );
}


export default Articles;
