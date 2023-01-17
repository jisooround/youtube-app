import styled from "styled-components";

const Description = () => {
  return (
    <DescContainer>
      <ProfileWrapper>
        <img
          src="https://lh3.googleusercontent.com/ogw/AOh-ky2z6siDURkpTMgZAMak3L9B1UrZ-DIs51_YPGiZq0E=s32-c-mo"
          alt="avatar"
        />
      </ProfileWrapper>
      <DescWrapper>
        <div>
          <h4>채널명</h4>
          <Follower>팔로워</Follower>
        </div>
        <Desc>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem sit
          nisi, incidunt error consequatur magnam quod. Veritatis quia repellat
          voluptas? Dolor natus unde aspernatur tenetur magnam consequuntur,
          nostrum dignissimos aperiam.
        </Desc>
      </DescWrapper>
    </DescContainer>
  );
};
export default Description;

const DescContainer = styled.section`
  display: flex;
  gap: 1rem;
  border-bottom: 1px solid gray;
  padding: 1.5rem;
`;

export const ProfileWrapper = styled.div`
  border-radius: 50%;
  width: 32px;
  height: 32px;
  overflow: hidden;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const DescWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h4 {
    font-weight: 600;
    line-height: 1.4;
  }
`;

const Follower = styled.p`
  font-size: 0.875rem;
  color: gray;
  margin-top: 0.25rem;
`;

const Desc = styled.p`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
