import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import AddCard from '../components/AddCard'
import * as CardActions from '../actions/cards'

function mapStateToProps(state) {
  return {
    cards: state.cards
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(CardActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCard)
