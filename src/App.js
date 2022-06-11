import Location from "./components/Location";
import NavBar from "./components/NavBar";
import "./styles.css";

function App() {
    // const [locationName, setlocationName] = useState("");
    // const [suggestions, setSuggestions] = useState([]);

    // 

    // const [showModal, setShowModal] = useState(true)
    // const closeModal= ()=> setShowModal(false)
// useEffect(() => {
    //     if (locationName) {
    //         axios
    //             .get(`https://rickandmortyapi.com/api/location?name=${locationName}`)
    //             .then((res) => setSuggestions(res.data));
    //     } else {
    //         setSuggestions([]);
    //     }
    // }, [locationName]);
    return (
        <div className="App">
            <NavBar />
            
            {/* {showModal && <Modal closeModal ={closeModal}/>}

            <input onChange={e => setlocationName(e.target.value)} value={locationName} />
            {suggestions.results?.map((suggestion) => (
                <div >{suggestion.name}</div>
            ))} */}
            <Location />
        </div>
    );
}

export default App;
