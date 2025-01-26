/* eslint-disable react/prop-types */
function Buttoner({ text = "clickMe!", color, fontSize }) {
  const style = {
    color: color,
    fontSize: fontSize + "px",
  };

  return <button onClick={handleClick} style={style}>{text}</button>;
}

export default function MakeButton() {
    let handleClick = ()=>{
        window.location.href = "https://google.com"
    }
  return (
    <div>
      <Buttoner onClick={handleClick} color="blue" fontSize={12} />
      <Buttoner text="Don't Click Me!" color="red" fontSize={12} />
      <Buttoner color="yellow" fontSize={12} />
    </div>
  );
}
