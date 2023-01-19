import { AxiosError } from "axios";
import { instance } from ".";

// get comments
interface FetchFn {
  (
    id: string,
    setState: React.Dispatch<React.SetStateAction<any>>,
    setError: React.Dispatch<React.SetStateAction<string>>,
  ): void;
}

// get video detail

export const getComments: FetchFn = async (id, setState, setError) => {
  try {
    const res = await instance.get(
      `/commentThreads?part=snippet&videoId=${id}`,
    );

    if (res.status === 200) {
      // localStorage.setItem("comments", JSON.stringify(res.data.items));
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

export const getVideoDetail: FetchFn = async (id, setState, setError) => {
  try {
    const res = await instance.get(
      `/videos?part=snippet&part=contentDetails&part=player&part=statistics&id=${id}`,
    );
    if (res.status === 200) {
      localStorage.setItem("detail", JSON.stringify(res.data));
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

export const getRelated: FetchFn = async (id, setData, setError) => {
  try {
    const res = await instance.get(
      `/search?part=snippet&maxResults=10&relatedToVideoId=${id}&type=video`,
    );
    if (res.status === 200) {
      setData(res.data.items);
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
