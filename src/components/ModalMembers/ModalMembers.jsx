
import ModalMembersLayout from "./ModalMembersLayout";
import members from '../ModalMembers/members.json';
import MemberListMap from "./MemberListMap";


const ModalMembers = ({ open, handleClose}) => {
    
    
    return (
        <ModalMembersLayout title={'OUR TEAM'} open={open} handleClose={handleClose}>
     <MemberListMap members={members} />
       </ModalMembersLayout>
    )
}

export default ModalMembers;