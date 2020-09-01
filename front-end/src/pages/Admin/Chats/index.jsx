import React, { useState, useEffect } from "react";

import Menu from '../Menu';
import Chat from './Chat';

import "./style.css";
import { getData } from "../../../services/Request";


const Chats = () => {
  const [chats, setChats] = useState([]);
  useEffect(() => {
    getData('http://localhost:3001/messages')
      .then(({ data }) => {
        if (data) setChats(data.messages)
      })
  }, []);

  return (
    <div className="chats_admin">
      <Menu />
      <div className="container">
        <div className="header">
          <p>Conversas</p>
        </div>
        <div className="chats_container">
          {chats.map(({ _id: id, ...chat }) => (
            <Chat key={id} chat={chat} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Chats;
