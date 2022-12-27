import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import "./App.css";

import _ from "lodash";
function App() {
    const [count, setCount] = useState(0);
    const [dataSearch, setDataSearch] = useState([]);
    const [keyword, setKeyword] = useState("");
    const [data, setData] = useState(null);
    const fetchApi = async () => {
        try {
            const res = await axios.get("http://localhost:3005/jokes/random");
            setData(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    const fetchData = async (e) => {
        try {
            const res = await axios.get(
                `https://restcountries.com/v3.1/name/${e}`
            );
            setDataSearch(res.data);
        } catch (error) {
            console.log(error);
        }
    };
    const functionDebounce = useCallback(
        _.debounce((nextValue) => fetchData(nextValue), 2000),
        []
    );
    const handleSearch = (e) => {
        setKeyword(e.target.value);
        functionDebounce(e.target.value);
    };

    return (
        <div>
            <div>
                <h1>id: {data?.id}</h1>
                <h2>type: {data?.type}</h2>
                <h3>setup: {data?.setup}</h3>
                <p>punchline: {data?.punchline}</p>
                <button onClick={fetchApi}>Get more joke</button>
            </div>
            <div>
                <input
                    type="text"
                    name=""
                    id=" "
                    value={keyword}
                    onChange={handleSearch}
                    placeholder="Search country"
                />
                {dataSearch?.length > 0 && (
                    <div>
                        <h2>Country: {dataSearch[0]?.name?.common}</h2>
                        <h3>Region: {dataSearch[0]?.region}</h3>
                    </div>
                )}
            </div>
        </div>
    );
}

export default App;
