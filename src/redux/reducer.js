import { combineReducers } from 'redux'
import { SET_VISIT_NUMBER, SET_MESSAGE_NUMBER, SET_DOCUMENT_NUMBER, SET_GROUP_NUMBER, SET_TAB_KEY } from './actionTypes'

const innitVisitNumber = [512,511,32,25,54,50,53,18,35,83]
const innitMessageNumber = [2449,1810,85,79,190,168,189,20,65,243]
const innitDocumentNumber = [672,879,57,56,107,81,91,17,44,139]
const innitGroupNumber = [5,4,2,2,3,3,4,1,2,3]
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