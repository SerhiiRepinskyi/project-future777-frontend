import MemberListItem from "./MemberListItem";
import { MemberList } from "./ModalMembers.styled";

const MemberListMap = ({members}) => {
<MemberList >
           {members.map(({ photo, name, position, git}) => (
                <MemberListItem
                key={name}
                photo={photo}
                name={name}
                position={position}
                git={git} />
            ))}

            
     </MemberList>
}


export default MemberListMap;