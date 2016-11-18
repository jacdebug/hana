import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import NutsAdd from '../components/NutsAdd.jsx'
import { getnuts } from '../reducers/nuts'
import { saveNut } from '../actions'

const mapStateToProps = store => ({})

export default connect(mapStateToProps, { saveNut })(NutsAdd)
