import { useEffect, useState } from "react";
import Header from "../../components/Header";
import { instance } from "../../api/api";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Search = () => {
  const [result, setResult] = useState<any>([]);
  const { id } = useParams();

  useEffect(() => {
    fetchData();
  }, [id]);

  const fetchData = async () => {
    const response = await instance.get(
      `/search?part=snippet&maxResults=10&q=${id}`,
    );
    setResult(response.data.items);
  };

  return (
    <main>
      <Section>
        <Card>
          <Video>
            {result.map((data: any) => {
              <img
                src={data.snippet.thumbnails.medium.url}
                alt="video"
                style={{ width: "300px", height: "200px" }}
              />;
            })}
          </Video>
        </Card>
      </Section>
    </main>
  );
};

const Section = styled.section`
  padding: 1.5rem 2rem;
`;

const Card = styled.div`
  max-width: 1000px;
  height: 184px;
  padding: 1rem;
  color: #fff;
  font-size: 15px;
  letter-spacing: 0.2px;
`;

const Video = styled.div`
  max-width: 360px;
  height: 100%;
  position: relative;
`;

export default Search;
