import React from 'react';

const page = (props) => {
  console.log(props);
  return <div>channle/{props.params.channelId}</div>;
};

export default page;
