const CarouselCard = ({ data }: any) => {
  return (
    <div className='flex justify-center pt-[23px] bg-slate-300'>
      <img
        className='h-80 w-[1040px] pb-[26px]'
        src={data.thumbnail}
        alt='thumnail'
      />
    </div>
  );
};

export default CarouselCard;
