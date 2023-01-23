import { Link } from "react-router-dom";
import CardTop from "../components/cardTop";
import { useAppSelector } from "../store";
import { useEffect } from "react";
import {
  getArtistTopAlbums,
  getArtistTopTracks,
} from "../store/features/artist/fazlaSlice";
import { useDispatch } from "react-redux";
import Spinner from "../components/spinner/Spinner";

const SingerTopAlbumsAndTopTracks = () => {
  const { albums, tracks } = useAppSelector((state) => state.fazla);
  const dispatch = useDispatch();

  //!coming from localStorage..
  const name = window.localStorage.getItem("artistName");
  const artistName = name && JSON.parse(name);

  const image = window.localStorage.getItem("imageUrl");
  const imageUrl = image && JSON.parse(image);

  useEffect(() => {
    if (artistName) {
      dispatch(getArtistTopAlbums(artistName));
      dispatch(getArtistTopTracks(artistName));
    }
  }, [artistName, dispatch]);

  return (
    <>
      {albums?.loading && tracks?.loading ? (
        <Spinner />
      ) : (
        <div className='singers-albums-tracks-page' id='albums-tracks'>
          <Link className='c-go-home' to='/'>
            <svg
              className='c-item-home-icon'
              width='21'
              height='21'
              viewBox='0 0 21 21'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M7.5 20V12.6C7.5 12.04 7.5 11.7599 7.60899 11.546C7.70487 11.3579 7.85785 11.2049 8.04601 11.109C8.25992 11 8.53995 11 9.1 11H11.9C12.4601 11 12.7401 11 12.954 11.109C13.1422 11.2049 13.2951 11.3579 13.391 11.546C13.5 11.7599 13.5 12.04 13.5 12.6V20M9.5177 1.76403L2.73539 7.03916C2.28202 7.39178 2.05534 7.56809 1.89203 7.78889C1.74737 7.98447 1.6396 8.20481 1.57403 8.43908C1.5 8.70355 1.5 8.99073 1.5 9.56508V16.8C1.5 17.9201 1.5 18.4802 1.71799 18.908C1.90973 19.2843 2.21569 19.5903 2.59202 19.782C3.01984 20 3.57989 20 4.7 20H16.3C17.4201 20 17.9802 20 18.408 19.782C18.7843 19.5903 19.0903 19.2843 19.282 18.908C19.5 18.4802 19.5 17.9201 19.5 16.8V9.56508C19.5 8.99073 19.5 8.70355 19.426 8.43908C19.3604 8.20481 19.2526 7.98447 19.108 7.78889C18.9447 7.56809 18.718 7.39178 18.2646 7.03916L11.4823 1.76403C11.131 1.49078 10.9553 1.35415 10.7613 1.30163C10.5902 1.25529 10.4098 1.25529 10.2387 1.30163C10.0447 1.35415 9.86902 1.49078 9.5177 1.76403Z'
                stroke='#202020'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
            <svg
              className='c-item-home-arrow'
              width='13'
              height='21'
              viewBox='0 0 13 21'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M12 1L2 10.5L12 20'
                stroke='black'
                strokeWidth='1.5'
                strokeLinecap='round'
              />
            </svg>

            <span className='c-item-title'>Back to Home Page</span>
          </Link>
          <div className='c-singer-title'>
            <img className='c-item-01' src={imageUrl && imageUrl} alt='phot0' />
            <h6 className='c-item-02'>{artistName}</h6>
          </div>

          <div className='c-albums-tracks-group-container'>
            <div className='c-item-01'>
              <h6 className='c-unit-01'>Top Albums</h6>
              <hr className='c-unit-02' />

              {!albums?.loading &&
                albums?.items?.map((item) => (
                  <CardTop item={item} key={"card-top - " + item} />
                ))}
            </div>
            <div className='c-item-01'>
              <h6 className='c-unit-01'>Top Tracks</h6>
              <hr className='c-unit-02' />
              {!tracks?.loading &&
                tracks?.items?.map((item) => (
                  <CardTop item={item} key={"card-top - " + item} />
                ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SingerTopAlbumsAndTopTracks;
