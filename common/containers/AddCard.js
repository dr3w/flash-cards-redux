import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import AddCard from '../components/AddCard'
import * as AddCardActions from '../actions/cards'

function mapStateToProps(state) {
  return {
    cards: state.cards
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(AddCardActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCard)
