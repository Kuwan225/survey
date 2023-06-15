const List = (props) => {
  return (
    <button
      className={`flex items-center ${props.bg}`}
      onClick={props.klik}
    >
      <button className={`rounded-full w-[30px] h-[35px] text-sm flex justify-center items-center ${props.bgHurup} mr-4`}>
        <span className="font-bold text-white">{props.label}</span>
      </button>
      <p>{props.desc}</p>
    </button>
  );
};

export default List;
