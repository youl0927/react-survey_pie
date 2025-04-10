import TextInput from "../TextInput";

function Body({ type, answer, setAnswer }) {
  let InputComponet = null;

  if (type === "select") {
    // InputComponet === Sele
  } else if (type === "text") {
    InputComponet = TextInput;
  } else if (type === "textarea") {
  }
  return (
    <>
      <InputComponet answer={answer} setAnswer={setAnswer} />
    </>
  );
}

export default Body;
