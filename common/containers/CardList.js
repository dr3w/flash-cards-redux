import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import CardList from '../components/CardList'
import * as CardListActions from '../actions/cards'

function mapStateToProps(state) {
  return {
    cards: state.cards
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(CardListActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CardList)
