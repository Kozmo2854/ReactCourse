import reactImg from '../assets/react-core-concepts.png';

const reactDecsription = ["Fundamental","Crucial","Essential","Core"];

function generateRandomInt(max){
    return Math.floor(Math.random() * max);
}

function Header(){
  let description = reactDecsription[generateRandomInt(reactDecsription.length)];
    return (
      <header>
        <img src={reactImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {description} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
    );
  }

export default Header;