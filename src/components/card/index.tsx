import { Link } from "react-router-dom";
import {
  setArtistImageUrl,
  setArtistName,
} from "../../store/features/artist/fazlaSlice";
import { useDispatch } from "react-redux";

const Card = ({ artist }: any) => {
  const dispatch = useDispatch();

  const handleClick = (name_: string, imageUrl: string) => {
    dispatch(setArtistName(name_));
    dispatch(setArtistImageUrl(imageUrl));
  };
  return (
    <Link
      to='/singer-albums-tracks'
      className='micro-card-01'
      onClick={() => handleClick(artist?.name, artist.image[1]["#text"])}
    >
      <div className='c-item-01'>
        <img src={artist?.image[1]["#text"]} alt='phot0' />
      </div>
      <div className='c-item-02'>
        <p className='c-unit-01'>Artist</p>
        <hr className='c-unit-02' />
        <h6 className='c-unit-03'>{artist?.name}</h6>
      </div>
      <div className='c-item-03'>
        <span className='c-unit-01'>listeners:{artist?.listeners}</span>
        <span className='c-unit-01'>playcount:{artist?.playcount}</span>
      </div>
    </Link>
  );
};

export default Card;
