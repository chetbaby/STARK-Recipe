import React, { Component } from "react";
import { connect } from 'react-redux';
import RecipeItem from "./RecipeItem.jsx"
import Collapsible from "react-collapsible";


const mapStateToProps = (store) => ({
  shoppingCartArr:store.main.shoppingCartArr
})

class ShoppingList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const cartItemsArr = this.props.shoppingCartArr.map(function(el){
      return <RecipeItem item={el} />
    })
    return (
      <div>
        <Collapsible trigger={<button className="rightMenuBtn">SHOPPING LIST</button>} transitionTime={200}>
          <div className="favBar">
            {cartItemsArr}
          </div>
        </Collapsible>
      </div>
    );
  }
}

export default connect(mapStateToProps, null)(ShoppingList)
