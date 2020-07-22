import { combineReducers } from 'redux'
import { SET_VISIT_NUMBER, SET_MESSAGE_NUMBER, SET_DOCUMENT_NUMBER, SET_GROUP_NUMBER, SET_TAB_KEY } from './actionTypes'

const innitVisitNumber = [1,2,3,4]
const innitMessageNumber = [10,20,30,40]
const innitDocumentNumber = [100,200,300,400]
const innitGroupNumber = [1000,2000,3000,4000]
const innitTabKey = 1
function visitNumber(state=innitVisitNumber, action) {
  switch (action.type) {
    case SET_VISIT_NUMBER:
      return action.data
    default: 
      return state
  }
}

function messageNumber(state=innitMessageNumber, action) {
  switch (action.type) {
    case SET_MESSAGE_NUMBER:
      return action.data
    default: 
      return state
  }
}

function documentNumber(state=innitDocumentNumber, action) {
  switch (action.type) {
    case SET_DOCUMENT_NUMBER:
      return action.data
    default: 
      return state
  }
}

function groupNumber(state=innitGroupNumber, action) {
  switch (action.type) {
    case SET_GROUP_NUMBER:
      return action.data
    default: 
      return state
  }
}

function tabKey(state=innitTabKey, action) {
  switch (action.type) {
    case SET_TAB_KEY:
      return action.data
    default: 
      return state
  }
}

export default combineReducers({
  visitNumber,
  messageNumber,
  documentNumber,
  groupNumber,
  tabKey
})