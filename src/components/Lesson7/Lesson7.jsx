const Lesson7 = (props) => {
  function myFunction() {
    console.log(">>> Function truyen thong");
  }

  (() => {
    console.log("FUnction vo danh");
  })();

  myFunction();

  return (
    <div style={{ padding: "50px" }}>
      <h3>Lesson 7 Anonymous Function:</h3>
    </div>
  );
};

export default Lesson7;
