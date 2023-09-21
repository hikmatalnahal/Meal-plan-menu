import { Container } from "react-bootstrap";
import NavBar from "./Components/NavBar";
import Header from "./Components/Header";
import ItemsList from "./Components/ItemsList";
import Category from "./Components/Category ";
import { items } from "./data"
import { useState } from "react";
function App() {
  const [itemsData, setItemsData] = useState(items);

  //get all cat uniqe
  const allCategory = ['الكل', ...new Set(items.map((i) => i.category))]

  //filter by category
  const filterbyCategory = (cat) => {
    if (cat === "الكل") {
      setItemsData(items)
    } else {
      const newArr = items.filter((item) => item.category === cat)
      setItemsData(newArr)
    }
  }

  //filter by search form
  const filterbySearch = (word) => {
    if (word !== "") {
      const newArr = items.filter((item) => item.title === word)
      setItemsData(newArr)
    }
  }

  return (
    <div className="color-body font">
      <NavBar filterbySearch={filterbySearch} />
      <Container>
        <Header />
        <Category filterbyCategory={filterbyCategory} allCategory={allCategory} />
        <ItemsList itemsData={itemsData} />

      </Container>

    </div>
  );
}

export default App;
