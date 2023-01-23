import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

const apiKey = "26a81b39c319b65656d7858f3c50b416";

//!artist.getTopAlbums
//
export const getArtistTopAlbums = createAsyncThunk(
  "fazla/getTopTags",
  async (artistName: string) => {
    const topAlbumsUrl = `https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${artistName}&api_key=${apiKey}&format=json`;
    const topAlbums = await axios.get(topAlbumsUrl);
    return topAlbums;
  }
);

//!artist.getTopTracks

export const getArtistTopTracks = createAsyncThunk(
  "fazla/getTopTracks",
  async (artistName: string) => {
    const topTracksUrl = `https://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=${artistName}&api_key=${apiKey}&format=json`;
    const topTracks = await axios.get(topTracksUrl);
    return topTracks;
  }
);

const fazlaSlice = createSlice({
  name: "fazla",
  initialState: {
    artists: {
      loading: true,
      items: [],
      page: 1,
    },
    albums: {
      loading: true,
      items: [],
    },
    tracks: {
      loading: true,
      items: [],
    },
  },
  reducers: {
    setArtistName(state, action) {
      window.localStorage?.setItem(
        "artistName",
        JSON.stringify(action?.payload)
      );
    },
    setArtistImageUrl(state, action) {
      window.localStorage?.setItem("imageUrl", JSON.stringify(action?.payload));
    },
    setIcreasePage(state, action) {
      state.artists.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    //!albums
    builder.addCase(
      getArtistTopAlbums.pending || getArtistTopAlbums.rejected,
      (state) => {
        state.albums.loading = true;
      }
    );

    builder.addCase(
      getArtistTopAlbums.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.albums.items = action?.payload?.data?.topalbums?.album;
        state.albums.loading = false;
      }
    );

    //!tracks
    builder.addCase(
      getArtistTopTracks.pending || getArtistTopTracks.rejected,
      (state) => {
        state.tracks.loading = true;
      }
    );

    builder.addCase(
      getArtistTopTracks.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.tracks.items = action?.payload?.data?.toptracks?.track;
        state.tracks.loading = false;
      }
    );
  },
});
export const { setArtistName, setArtistImageUrl, setIcreasePage } =
  fazlaSlice.actions;

export default fazlaSlice.reducer;
