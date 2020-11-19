import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';
import Room from '../../components/chat/Room';

import {
  changeField,
  initialField,
  logMessage,
  initializeMessageLog,
} from '../../modules/messages';
import { exitRoom, loadRoom } from '../../modules/room';

const sockJS = new SockJS('http://localhost:8080/ws-stomp'); // 서버의 웹 소켓 주소
const stompClient = (Stomp.Client = Stomp.over(sockJS)); //stomp Client 생성
stompClient.connect(); // 서버에 접속

//방 누르면 서버오 ㅏ통신하여 방 코드를 요청 보냄 방코드를 받아오면 useEffect를통해 방접속할 수 있도록
const RoomContainer = ({ match, history }) => {
  const { roomId } = match.params;
  // server에서 전달받은 상태를 받아 redux에 저장된 room 정보를 가져다 room에 접근 / 불가
  const dispatch = useDispatch();

  const { username, message, messageLog, room } = useSelector(
    ({ user, messages, room }) => ({
      username: user.username,
      message: messages.message,
      messageLog: messages.messageLog,
      room: room.room,
    })
  );

  const onChange = (e) => {
    const value = e.target.value;
    dispatch(changeField(value)); //message에 저장
  };

  const sendMessage = (e) => {
    e.preventDefault();

    //서버에 정보 전달
    //dispatch로유저 정보를 저장한다.
    // dispatch(logMessage(username, message));
    stompClient.send(
      '/pub/socket/message',
      {},
      JSON.stringify({
        type: 'ROOM',
        roomCode: roomId,
        userInfo: {
          // userInfo,
        },
        message: message,
      })
    );
    dispatch(initialField());
  };
  const exit = () => {
    dispatch(exitRoom());
  };

  // 서버로부터 메세지를 받아옴
  // 접속했을 때 구독

  const stompSubscribe = () =>
    stompClient.subscribe(`/sub/socket/room/${roomId}`, (data) => {
      // 서버로부터 데이터를 받음
      const serverMesg = JSON.parse(data.body); // 받아온 메세지를 json형태로 parsing
      console.log(serverMesg);
      dispatch(loadRoom({ roomId }));

      const userInfo = serverMesg.userInfo;
      console.log(userInfo);
      // setUserinfo(userInfo);
      // room에다가 넘기기

      // const message = serverMesg.message;

      //메세지 정보 받기
      dispatch(logMessage(username, serverMesg.message));
    });

  useEffect(() => {
    if (!stompClient.connected) {
      stompClient.connect({}, stompSubscribe); //{}서버주소
    } else {
      stompSubscribe();
    }
    dispatch(loadRoom({ roomId }));
    stompClient.send(
      '/pub/socket/message',
      {},
      JSON.stringify({
        type: 'JOIN',
        roomCode: roomId,
        userInfo: { username: username },
        message: message,
      })
    );
    return () => {
      //컴포넌트 끝
      stompClient.send(
        '/pub/socket/message',
        {},
        JSON.stringify({
          type: 'EXIT',
          roomCode: roomId,
          // userInfo,
          message: message,
        })
      );
      stompClient.unsubscribe();
      dispatch(initializeMessageLog());
    };
  }, [roomId]); // roomId가 바뀌면 새로운 접속
  useEffect(() => {
    if (room === null) {
      history.push(`/lobby`); //room의 정보가 null이면(exit), lobby로 이동
    }
  }, [room, history]);
  return (
    <Room
      onSubmit={sendMessage}
      onChange={onChange}
      username={username}
      message={message}
      messageLog={messageLog}
      exit={exit}
    />
  );
};

export default withRouter(RoomContainer);