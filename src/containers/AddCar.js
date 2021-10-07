import { connect } from 'react-redux'
import AddCar from '../components/AddCar'
import { addCar } from '../redux/actions'

// const mapStateToProps = (state) => {
//     return {
//         cars: state.cars
//     }
// }

const mapDispatchStateToProps = (dispatch) => {
  return {
    addCar: (car) => dispatch(addCar(car))
  }
}

export default connect(null, mapDispatchStateToProps)(AddCar)