interface Props {
  setPage: (page: string) => void;
}

function Navigation(props: Props) {
  return (
    <div>
      <button onClick={() => props.setPage("start")}>Startsida</button>
      <button onClick={() => props.setPage("listoftemperature")}>
        Lista av temperatur värden
      </button>
    </div>
  );
}

export default Navigation;
