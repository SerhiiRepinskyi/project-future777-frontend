import ModalLayout from 'components/ModalLayout/ModalLayout';
import MemberListItem from './MemberListItem';
import teamArray from './members';
import { MemberList } from './ModalMembers.styled';

const ModalMembers = ({ title, open, handleClose }) => {
  return (
    <>
      <ModalLayout title={title} open={open} handleClose={handleClose}>
        <MemberList>
          {teamArray.map(({ photo, name, position, git }) => (
            <MemberListItem
              key={name}
              photo={photo}
              name={name}
              position={position}
              git={git}
            />
          ))}
        </MemberList>
      </ModalLayout>
    </>
  );
};

export default ModalMembers;
