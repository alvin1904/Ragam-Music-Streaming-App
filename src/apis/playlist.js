import { createPlaylistsApi, getAllPlaylistsApi, deletePlaylistsApi, getFromPlaylistsApi } from ".";

export const createPlaylist = async (data) => {
  try {
    data.songsId = [];
    const response = await createPlaylistsApi(data);
    return response;
  } catch (err) {
    return err;
  }
};

export const deletePlaylist = async (id) => {
  try {
    const response = await deletePlaylistsApi(id);
    return response;
  } catch (err) {
    return err;
  }
};

export const getAllPlaylists = async () => {
  try {
    const response = await getAllPlaylistsApi();
    return response;
  } catch (err) {
    return err;
  }
};

export const getPlayListDetails = async (id) => {
  try {
    const response = await getFromPlaylistsApi(id);
    return response;
  } catch (err) {
    return err;
  }
};
