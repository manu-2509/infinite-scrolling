import {useState} from "react";
import "./App.css"
import InfiniteScroll from "react-infinite-scroll-component";

const style = {
  height: 30,
  margin: 6,
  padding: 8,
  textAlign: "center"
};

const App=()=>{
  const [state,setState] =useState({
    items: Array.from({ length: 20 })
  });

  const fetchMoreData = () => {
      setState({
        items: state.items.concat(Array.from({ length: 25 }))
      });
  };


    return (
      <div className="App">
        <InfiniteScroll
          dataLength={state.items.length}
          next={fetchMoreData}
          hasMore={true}
          loader={<h4>Loading...</h4>}
        >
          {state.items.map((i, index) => (
            <h1 style={style} key={index}>Masai Students{" "}{index+1}</h1>
          ))}
        </InfiniteScroll>
      </div>
    );
  }


export default App;