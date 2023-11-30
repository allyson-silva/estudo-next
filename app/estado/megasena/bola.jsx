export default function bola({ numero }){

    const estiloBola = {  display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "200px",
    width: "200px",
    borderRadius: "100px",
    backgroundColor: "#222",
    color: "#fff",
    fontSize: "2rem",
    margin: "20px"}

    return (

      <div style={estiloBola}>

             { numero }
        </div>
    )
}