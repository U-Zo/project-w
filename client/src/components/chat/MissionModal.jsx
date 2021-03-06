import React from 'react';
import styled from 'styled-components';
import Modal from '../common/Modal';
import Mission1 from './missions/Mission1';
import Mission10 from './missions/Mission10';
import Mission11 from './missions/Mission11';
import Mission12 from './missions/Mission12';
import Mission2 from './missions/Mission2';
import Mission20 from './missions/Mission20';
import Mission21 from './missions/Mission21';
import Mission22 from './missions/Mission22';
import Mission3 from './missions/Mission3';
import Mission4 from './missions/Mission4';
import Mission5 from './missions/Mission5';
import Mission6 from './missions/Mission6';
import Mission7 from './missions/Mission7';
import Mission8 from './missions/Mission8';

const MissionModalBlock = styled(Modal)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 70rem;
  height: 50%;
  color: var(--color-green);
`;

const MissionModalCloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  border: 0.2rem solid var(--color-green);
  color: var(--color-green);
  background-color: inherit;
  outline: none;
  font-size: 2rem;
  padding: 1rem;
  cursor: pointer;
`;

const MissionModal = ({
  missionVisible,
  missionId,
  closeMissionModal,
  username,
  setMissionDone,
}) => {
  return (
    <MissionModalBlock visible={missionVisible}>
      {missionId === 1 && (
        <Mission1 onClose={closeMissionModal} setMissionDone={setMissionDone} />
      )}
      {missionId === 2 && (
        <Mission2 onClose={closeMissionModal} setMissionDone={setMissionDone} />
      )}
      {missionId === 3 && (
        <Mission3 onClose={closeMissionModal} setMissionDone={setMissionDone} />
      )}
      {missionId === 4 && (
        <Mission4 onClose={closeMissionModal} setMissionDone={setMissionDone} />
      )}
      {missionId === 5 && (
        <Mission5 onClose={closeMissionModal} setMissionDone={setMissionDone} />
      )}
      {missionId === 6 && (
        <Mission6 onClose={closeMissionModal} setMissionDone={setMissionDone} />
      )}
      {missionId === 7 && (
        <Mission7 onClose={closeMissionModal} setMissionDone={setMissionDone} />
      )}
      {missionId === 8 && (
        <Mission8
          onClose={closeMissionModal}
          username={username}
          setMissionDone={setMissionDone}
        />
      )}
      {missionId === 10 && (
        <Mission10
          onClose={closeMissionModal}
          setMissionDone={setMissionDone}
        />
      )}
      {missionId === 11 && (
        <Mission11
          onClose={closeMissionModal}
          setMissionDone={setMissionDone}
        />
      )}
      {missionId === 12 && (
        <Mission12
          onClose={closeMissionModal}
          setMissionDone={setMissionDone}
        />
      )}
      {missionId === 20 && (
        <Mission20
          onClose={closeMissionModal}
          setMissionDone={setMissionDone}
        />
      )}
      {missionId === 21 && (
        <Mission21
          onClose={closeMissionModal}
          setMissionDone={setMissionDone}
        />
      )}
      {missionId === 22 && (
        <Mission22
          onClose={closeMissionModal}
          username={username}
          setMissionDone={setMissionDone}
        />
      )}
      <MissionModalCloseButton onClick={closeMissionModal}>
        X
      </MissionModalCloseButton>
    </MissionModalBlock>
  );
};

export default MissionModal;
