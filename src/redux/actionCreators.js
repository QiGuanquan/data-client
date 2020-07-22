import { SET_VISIT_NUMBER, SET_MESSAGE_NUMBER, SET_DOCUMENT_NUMBER, SET_GROUP_NUMBER, SET_TAB_KEY } from './actionTypes'
export const setVisitNumber = (visitNumber) => ({type: SET_VISIT_NUMBER, data: visitNumber})

export const setMessageNumber = (messageNumber) => ({type: SET_MESSAGE_NUMBER, data: messageNumber})

export const setDocumentNumber = (documentNumber) => ({type: SET_DOCUMENT_NUMBER, data: documentNumber})

export const setGroupNumber = (groupNumber) => ({type: SET_GROUP_NUMBER, data: groupNumber})

export const setTabKey = (tabKey) => ({type: SET_TAB_KEY, data: tabKey})