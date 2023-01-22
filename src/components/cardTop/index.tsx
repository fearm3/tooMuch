const CardTop = ({ item }: any) => {
  return (
    <div className='micro-card-02'>
      <div className='c-item-01'>
        <img src={item?.image[1]["#text"]} alt='medium' />
      </div>
      <div className='c-item-02'>
        <p className='c-unit-01'>{item?.name}</p>
        <h6 className='c-unit-03'>{item?.artist?.name}</h6>
      </div>
      <div className='c-item-03'>
        {item?.listeners && (
          <span className='c-unit-01'>{item.listeners} listeners</span>
        )}

        {item?.playcount && (
          <span className='c-unit-01'>{item.playcount} play</span>
        )}
      </div>
    </div>
  );
};

export default CardTop;
