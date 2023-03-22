import {
  getAlbumApi,
  getAlbumsApi,
  getSongApi,
  getSongsApi,
  LikedSongsApi,
} from ".";

export const getSongs = async (count = 5) => {
  try {
    const response = await getSongsApi(count);
    console.log(response);
    return response;
  } catch (err) {
    console.log(err);
    return err;
  }
};
export const getSong = async (id) => {
  try {
    const response = await getSongApi(id);
    console.log(response);
    return response;
  } catch (err) {
    console.log(err);
    return err;
  }
};
export const getAlbums = async (count) => {
  try {
    const response = await getAlbumsApi(count);
    console.log(response);
    return response;
  } catch (err) {
    console.log(err);
    return err;
  }
};
export const getAlbum = async (id) => {
  try {
    const response = await getAlbumApi(id);
    console.log(response);
    return response;
  } catch (err) {
    console.log(err);
    return err;
  }
};
export const getLikedSongs = async () => {
  try {
    const response = await LikedSongsApi();
    console.log(response);
    return response;
  } catch (err) {
    console.log(err);
    return err;
  }
};
