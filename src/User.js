export const User = (props) => {
    console.log(props);
  return (
    <div> 
      {props.name} 
      {props.age} 
    </div>
  );
}