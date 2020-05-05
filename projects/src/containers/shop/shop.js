import React, {Component} from 'react'
import {connect} from 'react-redux'
import {buyCake} from '../../actions/cake'


class Shop extends Component {
  render() {
    return(
      <div>
        <h3>No of cakes - {this.props.numOfCake}</h3>
        <button onClick={this.props.buyCake}>Buy Cake</button>
      </div>
    )
  }
}

const mapStateToprops = state => {
  return {
    numOfCake: state.numOfCake
  }
}

const mapDispatchToProps = dispatch => {
  return {
    buyCake: () => dispatch(buyCake())
  }
}
export default connect(
  mapStateToprops,
  mapDispatchToProps)(Shop)