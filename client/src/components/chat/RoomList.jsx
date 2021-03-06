import React from 'react';
import Modal from '../common/Modal';
import styled, { keyframes } from 'styled-components';
import { BiRefresh } from 'react-icons/bi';

const Block = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LobbyBlock = styled.div`
  /* position: relative; */
  margin: 0 auto;
  margin-top: 1rem;
  width: 970px;
  height: 720px;
  border: 3px solid var(--color-green);
  /* display: flex; */
  justify-content: center;
  align-items: center;
  background-color: var(--color-background);
`;
const NicknameBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5rem;
`;

const RoomListBox = styled.div`
  margin: 0 auto;
  border: 3px solid var(--color-green);
  width: 50rem;
  height: 40rem;
  margin-top: 3rem;
  overflow-x: hidden;
  overflow-y: auto;
  ::-webkit-scrollbar {
    // 투명 스크롤바
    display: none;
  }
`;

const RoomBox = styled.ul`
  list-style-type: none;
`;

const RoomLi = styled.li`
  margin: 0 auto;
  margin-top: 1.5rem;
  font-size: 3rem;
  text-align: center;
  border: 3px solid var(--color-green);
  height: 4.3rem;
  width: 45rem;
`;

const RoomLink = styled.div`
  li {
    color: var(--color-green);
    text-decoration: none;
    font-size: 2rem;
    cursor: pointer;
  }
`;

const InputNickname = styled.input`
  display: block;
  text-align: center;
  font-size: 2rem;
  background-color: var(--color-background);
  width: 40rem;
  height: 5rem;
  border: 3px solid var(--color-green);
  color: var(--color-green);
  ::placeholder {
    color: var(--color-green);
    font-size: 2em;
  }
  :focus {
    ::placeholder {
      color: transparent;
    }
  }
  :focus {
    outline: none;
  }
`;

const CountSpan = styled.span`
  float: right;
  margin-right: 2rem;
  &#full {
    color: var(--color-red);
  }
`;

const ButtonStyle = styled.button`
  position: relative;
  margin-bottom: 3rem;
  background-color: var(--color-background);
  color: var(--color-green);
  border: 3px solid var(--color-green);
  width: 20rem;
  height: 5rem;
  font-size: 2rem;
  padding: 1rem;
  float: right;
  margin-right: 25rem;
  top: 7rem;
  :focus {
    outline: none;
  }
  :hover {
    font-weight: bold;
  }
`;

const CodeInputStyle = styled.input`
  position: relative;
  text-align: center;
  background-color: var(--color-background);
  color: var(--color-green);
  border: 3px solid var(--color-green);
  width: 20rem;
  height: 5rem;
  /* padding: 1rem; */
  float: left;
  margin-left: 25rem;
  top: 7rem;
  ::placeholder {
    color: var(--color-green);
    font-size: 2em;
  }
  :focus {
    ::placeholder {
      color: transparent;
    }
  }
  :focus {
    outline: none;
  }
`;

const ModalInput = styled.input`
  text-align: center;
  font-size: 2rem;
  background-color: var(--color-background);
  width: 32rem;
  height: 4rem;
  border: 3px solid var(--color-green);
  color: var(--color-green);
  :-webkit-autofill {
    -webkit-text-fill-color: var(--color-green);
  }
  :-webkit-autofill,
  :-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
  }
  ::placeholder {
    color: var(--color-green);
    font-size: 2rem;
  }
  :focus {
    ::placeholder {
      color: transparent;
    }
  }
  :focus {
    outline: none;
  }
`;

const Buttons = styled.div`
  /* position: absolute; */
  /* left: 20%; */
  margin-top: 4rem;
`;

const MakeRoomButton = styled.button`
  background-color: var(--color-background);
  display: inline-block;
  text-align: center;
  color: var(--color-green);
  border: 2px solid var(--color-green);

  width: 15rem;
  height: 3.5rem;

  :focus {
    outline: none;
  }
  :hover {
    font-weight: bold;
  }
`;

const CancelButton = styled.button`
  background-color: var(--color-background);
  margin-left: 5%;
  text-align: center;
  color: var(--color-green);
  border: 2px solid var(--color-green);
  display: inline-block;
  width: 15rem;
  height: 3.5rem;
  :focus {
    outline: none;
  }
  :hover {
    font-weight: bold;
  }
`;

const ErrorBox = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  transform: translate(-50%, -50%);
  color: var(--color-red);
  &#닉네임 {
    top: 12%;
    left: 50%;
  }
  &#인원 {
    top: 30%;
    left: 50%;
    font-size: 2.5rem;
    width: 100%;
    text-align: center;
  }
  &#방제목 {
    top: 19%;
    left: 50%;
  }
`;

const rotateRefresh = keyframes`
  from{
    transform:rotate(0deg);
    }
  to{
    transform:rotate(90deg);
    }
`;

const Refresh = styled.div`
  position: relative;
  display: inline-block;
  vertical-align: middle;
  color: var(--color-green);
  transform: translate(-50%, -50%);
  top: -3%;
  left: 75%;
  cursor: pointer;
  #refresh {
    font-size: 3rem;
    &:hover {
      animation: ${rotateRefresh} 0.5s steps(3, start);
      transform: rotate(90deg);
    }
  }
`;

const Room = React.memo(({ name, count, onClick }) => {
  return (
    <RoomLi onClick={onClick}>
      <span>{name}</span>
      {/* 수정 */}
      {count === 6 ? (
        <CountSpan id="full">{count}/6</CountSpan>
      ) : (
        <CountSpan>{count}/6</CountSpan>
      )}
    </RoomLi>
  );
});

const RoomList = ({
  error,
  userInfo,
  loading,
  roomList,
  roomError,
  changeUsername,
  onClick,
  visible,
  makeRoom,
  onChangeRoomName,
  onJoin,
  onRefresh,
  type,
}) => {
  if (roomError) {
    return <div>에러가 발생했습니다.</div>;
  }

  return (
    <Block>
      <LobbyBlock>
        {type === '닉네임' ? <ErrorBox id={type}>{error}</ErrorBox> : null}
        <NicknameBox>
          <InputNickname
            maxLength="8"
            type="text"
            value={userInfo && userInfo.username}
            onChange={changeUsername}
            placeholder="NICKNAME"
          />
        </NicknameBox>

        <Refresh>
          <BiRefresh id="refresh" size="3rem" onClick={onRefresh} />
        </Refresh>
        <RoomListBox>
          <RoomBox>
            {!loading &&
              roomList &&
              roomList.map(
                (room) =>
                  !room.start && (
                    <RoomLink>
                      <Room
                        onClick={() => onJoin(room.roomCode)}
                        name={room.roomName}
                        count={room.count}
                      />
                    </RoomLink>
                  )
              )}
          </RoomBox>
        </RoomListBox>
        {/* modal */}

        <CodeInputStyle type="text" placeholder="CODE" />
        <ButtonStyle onClick={onClick}>방만들기</ButtonStyle>
        {type === '인원' ? (
          <Modal visible={visible} onClick={onClick}>
            <ErrorBox id={type}>{error}</ErrorBox>
            <Buttons>
              <CancelButton onClick={onClick}>닫기</CancelButton>
            </Buttons>
          </Modal>
        ) : (
          <Modal visible={visible} onClick={onClick}>
            <div>
              <form onSubmit={makeRoom} autoComplete="off">
                {type === '방제목' ? (
                  <ErrorBox id={type}>{error}</ErrorBox>
                ) : null}
                <ModalInput
                  onChange={onChangeRoomName}
                  type="text"
                  name="roomName"
                  placeholder="방 제목을 입력하세요."
                />
                <br></br>
                <div>
                  <Buttons>
                    <MakeRoomButton>방만들기</MakeRoomButton>
                    <CancelButton onClick={onClick}>취소</CancelButton>
                  </Buttons>
                </div>
              </form>
            </div>
          </Modal>
        )}
      </LobbyBlock>
    </Block>
  );
};

export default RoomList;
