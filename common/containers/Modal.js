import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Modal from '../components/Modal'
import * as CardActions from '../actions/cards'

function mapStateToProps(state) {
  return {
    cards: state.cards
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(CardActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal)
