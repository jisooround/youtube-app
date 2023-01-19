import { AxiosError } from "axios";
import { instance } from ".";

// get comments
type GetcommentsFn = {
  (
    videoId: string,
    setState: (value: React.SetStateAction<any>) => void,
    setError: (value: React.SetStateAction<string>) => void,
  ): void;
};
type FetchFn = {
  (
    id: string,
    setState: (value: React.SetStateAction<any>) => void,
    setError: (value: React.SetStateAction<string>) => void,
  ): void;
};

// get video detail
interface GetDetailFn {
  (videoId: string, setState: React.Dispatch<React.SetStateAction<any>>): void;
}

interface GetRelatedFnc {
  (videoId: string, setState: (value: React.SetStateAction<any>) => void): void;
}

export const getComments: GetcommentsFn = async (
  videoId,
  setState,
  setError,
) => {
  try {
    const res = await instance.get(
      `/commentThreads?part=snippet&videoId=${videoId}`,
    );

    if (res.status === 200) {
      localStorage.setItem("comments", JSON.stringify(res.data.items));
      setState(res.data.items);
    }
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error.message);
      setError(error.message);
    } else {
      throw error;
    }
  }
};

export const getDescription: FetchFn = async (id, setState, setError) => {
  try {
    const res = await instance(
      `/channels?part=snippet&part=statistics&part=contentDetails&id=${id}`,
    );

    if (res.status === 200) {
      localStorage.setItem("desc", JSON.stringify(res.data));
      setState(res.data);
    }
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error.message);
      setError(error.message);
    } else {
      throw error;
    }
  }
};

export const getVideoDetail: GetDetailFn = async (videoId, setState) => {
  try {
    const res = await instance.get(
      `/videos?part=snippet&part=contentDetails&part=player&part=statistics&id=${videoId}`,
    );
    if (res.status === 200) {
      setState(res.data);
    }
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error.message);
    } else {
      throw error;
    }
  }
};

export const getRelated: GetRelatedFnc = async (videoId, setData) => {
  try {
    const res = await instance.get(
      `/search?part=snippet&maxResults=10&relatedToVideoId=${videoId}&type=video`,
    );
    setData(res.data.items);
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error.message);
    } else {
      throw error;
    }
  }
};
