import { IconGit, MemberGit, MemberImage, MemberItem, MemberName, MemberPosition } from "./ModalMembers.styled";
import sprite from '../../assets/images/sprite.svg';

const MemberListItem = ({ photo, name, position, git }) => {
    return (
        <MemberItem>
                <MemberImage src={photo} alt={name}  loading="lazy" />
                <MemberName>{name}</MemberName>
                <MemberPosition>{position}</MemberPosition>
                <MemberGit>{<a href={git} ><IconGit width="32px" height="32px"><use href={`${sprite}#icon-icons8-github`} /></IconGit></a>}</MemberGit>
      </MemberItem>
    );
}

export default MemberListItem;