import {
  IconGit,
  IconGitWrap,
  MemberImage,
  MemberItem,
  MemberLink,
  MemberName,
  MemberPosition,
} from './ModalMembers.styled';
import sprite from '../../assets/images/sprite.svg';

const MemberListItem = ({ photo, name, position, git }) => {
  return (
    <MemberItem>
      <MemberLink href={git} target="_blank" rel="noreferrer">
        <MemberImage src={photo} alt={name} loading="lazy" />
        <div style={{ paddingTop: '6px', paddingBottom: '6px' }}>
          <MemberName>{name}</MemberName>
          <MemberPosition>{position}</MemberPosition>
          <IconGitWrap
          
          >
            <IconGit>
              <use href={`${sprite}#icon-github`} />
            </IconGit>
          </IconGitWrap>
        </div>
      </MemberLink>
    </MemberItem>
  );
};

export default MemberListItem;
