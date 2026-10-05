export default function Student(props) {
    return (
    <div style={{ textAlign: 'center' , backgroundColor: 'lightblue' ,fontStyle: 'bold', padding: '20px', height: '220px', width: '500px',border: '2px solid black'}}>
      <h1>Name : {props.name}</h1>
      <h1>Age : 19</h1>
       <h1>Class : CSE 1</h1>
        <h1>Hobbies : Nothing </h1>
    </div>
  );
}