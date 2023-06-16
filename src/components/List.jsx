const List = (props) => {
  return (
    <button
      className={`flex items-center ${props.bg} px-4`}
      onClick={props.klik}
    >
      <span className={`rounded-full w-[35px] h-[35px] text-sm flex justify-center items-center ${props.bgHurup} mr-4`}>
        <span className="font-bold text-white">{props.label}</span>
      </span>
      <p>{props.desc}</p>
    </button>
  );
};

export default List;
