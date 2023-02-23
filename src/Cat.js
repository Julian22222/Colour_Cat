import { useState } from "react";

const Cat = () => {
  const [image, setImage] = useState(
    "https://www.rd.com/wp-content/uploads/2021/01/GettyImages-1175550351.jpg"
  );

  const hadleClick = () => {
    fetcHandler();
    // setImage();
    // console.log(data);
  };

  //   useEffect(() => {
  //     fetch("http://aws.random.cat//meow")
  //       .then((data) => {
  //         data.json();
  //       })
  //       .then((Cat) => {
  //         setImage(Cat);
  //       });
  //   }, []);

  async function fetcHandler() {
    try {
      // async request to the server
      const response = await fetch("//aws.random.cat//meow");
      //  data -> parsing response
      const data = await response.json();

      setImage(data.file);

      //   console.log(data.file);
    } catch (err) {
      console.log(err);
    }
    // return data;
  }

  //   fetcHandler();

  return (
    <div class="container">
      <h2>Colourful cats</h2>
      <div class="card">
        <img
          src={image}
          alt="Cat"
          class="img"
          // width={600}
        ></img>
      </div>
      <button onClick={hadleClick} class="btn" type="button">
        Random Cat
      </button>
    </div>
  );
};

export default Cat;
