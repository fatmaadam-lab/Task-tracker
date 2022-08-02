import PropTypes from 'prop-types'

const Header = (props) => {
    const onClick = () =>{
        console.log('click')
    }
  return (
    <header className='header'>
        <h1>Task Tracker { props.title }</h1>
        <button  onClick={onClick} className='btn'> Add </button>
    </header>
  )
}

// define defualt props 
Header.defaultProps = {
    title: 'Task1'
}


// Example of define PropType we need to import 
// IMP ==> import PropTypes from 'prop-types'
//
//
// Header.propTypes = {
//     title: PropTypes.string,
// }

//Example of CSS in JS 
//
//
// const HeadingStyle = {
//     color: 'red',
// }
export default Header