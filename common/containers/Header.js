import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../components/Header'
import { routeActions } from 'react-router-redux'

function mapDispatchToProps(dispatch) {
  return bindActionCreators(routeActions, dispatch)
}

export default connect(null, mapDispatchToProps)(Header)
