import { connect } from 'react-redux'
import Dashboard from '../components/Dashboard'
import { removeCar } from '../redux/actions'

const mapStateToProps = (state) => {
    return {
        user: state.user,
        cars: state.cars
    }
}

// add mapDispatchToProps function here
const mapDispatchStateToProps = (dispatch) => {
    return {
        removeCar: (index) => dispatch(removeCar(index))
    }
}

export default connect(mapStateToProps, mapDispatchStateToProps)(Dashboard)