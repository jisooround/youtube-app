import { useEffect, useState } from "react";
import Header from "../../components/Header";
import { instance } from "../../api/api";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Search = () => {
  const [result, setResult] = useState<any>([]);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    fetchData();
  }, [id]);

  const fetchData = async () => {
    const response = await instance.get(
      `/search?part=snippet&maxResults=10&q=${id}`,
    );
    console.log(response);
    setResult(response.data.items);
  };

  return (
    <main>
      <Section>
        <Card>
          <div>
            {result.map((data: any) => {
              <img
                src={data.snippet.thumbnails.medium.url}
                alt="video"
                style={{ width: "300px", height: "200px" }}
              />;
            })}
          </div>
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
  height: 100%;
  padding: 1rem;
  color: #fff;
  font-size: 15px;
  letter-spacing: 0.2px;
`;

export default Search;
