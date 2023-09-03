import { IconGit, MemberGit, MemberImage, MemberItem, MemberList, MemberName, MemberPosition } from "./ModalMembers.styled";
import ModalMembersLayout from "./ModalMembersLayout";
import sprite from '../../assets/images/sprite.svg';

const ModalMembers = ({ open, handleClose }) => {
    
    
    return (
        <ModalMembersLayout title={'OUR TEAM'} open={open} handleClose={handleClose}>
     <MemberList >
     <MemberItem>
                <MemberImage src={"https://serhiirepinskyi.github.io/filmoteka-team-project/developer-1.792fd224.jpg"}  loading="lazy" />
                <MemberName>{'Serhii Repinskyi'}</MemberName>
                <MemberPosition>{'team-leader'}</MemberPosition>
                <MemberGit>{<a href="https://github.com/SerhiiRepinskyi" ><IconGit width="32px" height="32px"><use href={`${sprite}#icon-icons8-github`} /></IconGit></a>}</MemberGit>
      </MemberItem>

      <MemberItem>
                <MemberImage src={"https://serhiirepinskyi.github.io/filmoteka-team-project/developer-2.1a97dcb1.jpg"}  loading="lazy" />
                <MemberName>{'Yuliya Maslyanenko'}</MemberName>
                <MemberPosition>{'scrum-master'}</MemberPosition>
                <MemberGit>{<a href="https://github.com/YuliyaITmas" ><IconGit width="32px" height="32px"><use href={`${sprite}#icon-icons8-github`} /></IconGit></a>}</MemberGit>
      </MemberItem>

      <MemberItem>
                <MemberImage src={"	https://serhiirepinskyi.github.io/filmoteka-team-project/developer-4.af2e609b.jpg"}  loading="lazy" />
                <MemberName>{'Ihor Vinnik'}</MemberName>
                <MemberPosition>{'developer'}</MemberPosition>
                <MemberGit>{<a href="https://github.com/IgorVinnik85" ><IconGit width="32px" height="32px"><use href={`${sprite}#icon-icons8-github`} /></IconGit></a>}</MemberGit>
      </MemberItem>

      <MemberItem>
                <MemberImage src={"	https://serhiirepinskyi.github.io/filmoteka-team-project/developer-5.a5de3fc7.jpg"}  loading="lazy" />
                <MemberName>{'Maksym Farmaha'}</MemberName>
                <MemberPosition>{'developer'}</MemberPosition>
                <MemberGit>{<a href="https://github.com/M-Farmaha" ><IconGit width="32px" height="32px"><use href={`${sprite}#icon-icons8-github`} /></IconGit></a>}</MemberGit>
      </MemberItem>

      <MemberItem>
                <MemberImage src={"https://serhiirepinskyi.github.io/filmoteka-team-project/developer-7.bd92903b.jpg"}  loading="lazy" />
                <MemberName>{'Volodymyr Merunka'}</MemberName>
                <MemberPosition>{'developer'}</MemberPosition>
                <MemberGit>{<a href="https://github.com/VolodyMer23" ><IconGit width="32px" height="32px"><use href={`${sprite}#icon-icons8-github`} /></IconGit></a>}</MemberGit>
      </MemberItem>

      <MemberItem>
                <MemberImage src={"	https://serhiirepinskyi.github.io/filmoteka-team-project/developer-8.d2b3e959.jpg"}  loading="lazy" />
                <MemberName>{'Oleksii Volynets'}</MemberName>
                <MemberPosition>{'developer'}</MemberPosition>
                <MemberGit>{<a href="https://github.com/VolynetsOleksii" ><IconGit width="32px" height="32px"><use href={`${sprite}#icon-icons8-github`} /></IconGit></a>}</MemberGit>
      </MemberItem>

      <MemberItem>
                <MemberImage src={"	https://serhiirepinskyi.github.io/filmoteka-team-project/developer-10.0b4cc6b3.jpg"}  loading="lazy" />
                <MemberName>{'Kostiantyn Khymera'}</MemberName>
                <MemberPosition>{'developer'}</MemberPosition>
                <MemberGit>{<a href="https://github.com/Kostiantyn1303" ><IconGit width="32px" height="32px"><use href={`${sprite}#icon-icons8-github`} /></IconGit></a>}</MemberGit>
      </MemberItem>

      <MemberItem>
                <MemberImage src={"https://avatars.githubusercontent.com/u/115547708?v=4"}  loading="lazy" />
                <MemberName>{'Nadiia Olifirova'}</MemberName>
                <MemberPosition>{'developer'}</MemberPosition>
                <MemberGit>{<a href="https://github.com/NadiaOl" ><IconGit width="32px" height="32px"><use href={`${sprite}#icon-icons8-github`} /></IconGit></a>}</MemberGit>
      </MemberItem>

      <MemberItem>
                <MemberImage src={"https://samokhvalova-nata.github.io/filmoteka/osha.f263ca40.jpg"}  loading="lazy" />
                <MemberName>{'Olga Dmytrenko'}</MemberName>
                <MemberPosition>{'developer'}</MemberPosition>
                <MemberGit>{<a href="https://github.com/oshaleyko59" ><IconGit width="32px" height="32px"><use href={`${sprite}#icon-icons8-github`} /></IconGit></a>}</MemberGit>
      </MemberItem>

      <MemberItem>
                <MemberImage src={"https://samokhvalova-nata.github.io/filmoteka/olex_l.5f705d1a.jpg"}  loading="lazy" />
                <MemberName>{'Oleksii Lykov'}</MemberName>
                <MemberPosition>{'developer'}</MemberPosition>
                <MemberGit>{<a href="https://github.com/lukovjr" ><IconGit width="32px" height="32px"><use href={`${sprite}#icon-icons8-github`} /></IconGit></a>}</MemberGit>
      </MemberItem>

      <MemberItem>
                <MemberImage src={"#"} loading="lazy" />
                <MemberName>{'Hanna Shvabovska'}</MemberName>
                <MemberPosition>{'developer'}</MemberPosition>
                <MemberGit>{<a href="https://github.com/AShvab" ><IconGit width="32px" height="32px"><use href={`${sprite}#icon-icons8-github`} /></IconGit></a>}</MemberGit>
      </MemberItem>

      <MemberItem>
                <MemberImage src={"https://avatars.githubusercontent.com/u/115174523?v=4"}  loading="lazy" />
                <MemberName>{'Anna Hryhorovych'}</MemberName>
                <MemberPosition>{'developer'}</MemberPosition>
                <MemberGit>{<a href="https://github.com/Anna-Grigorovich" ><IconGit width="32px" height="32px"><use href={`${sprite}#icon-icons8-github`} /></IconGit></a>}</MemberGit>
      </MemberItem>

      <MemberItem>
                <MemberImage src={"https://avatars.githubusercontent.com/u/115736687?v=4"}  loading="lazy" />
                <MemberName>{'Valeria Sizykh'}</MemberName>
                <MemberPosition>{'developer'}</MemberPosition>
                <MemberGit>{<a href="https://github.com/Vallyblink" ><IconGit width="32px" height="32px"><use href={`${sprite}#icon-icons8-github`} /></IconGit></a>}</MemberGit>
      </MemberItem>

      <MemberItem>
                <MemberImage src={"https://avatars.githubusercontent.com/u/114296789?v=4"}  loading="lazy" />
                <MemberName>{'Denys Filipchuk'}</MemberName>
                <MemberPosition>{'developer'}</MemberPosition>
                <MemberGit>{<a href="https://github.com/filipchukdv" ><IconGit width="32px" height="32px"><use href={`${sprite}#icon-icons8-github`} /></IconGit></a>}</MemberGit>
      </MemberItem>

      
     </MemberList>
       </ModalMembersLayout>
    )
}

export default ModalMembers;