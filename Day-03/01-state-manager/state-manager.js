const StateManager = (() => {
    let _currentState = undefined,
        _callbacks = [],
        _reducer = undefined,
        __init_action = { type : '@@INIT/ACTION' }

    function getState(){
        return _currentState;
    }

    function subscribe(callbackFn){
        _callbacks.push(callbackFn)
    }

    //private utility function
    function _notifyChange(){
        _callbacks.forEach(cb => cb())
    }

    function dispatch(action){
        const newState = _reducer(_currentState, action)
        if (newState === _currentState) return ; // no state changes
        _currentState = newState
        _notifyChange()
    }

    function createStore(reducer){
        if (typeof reducer !== 'function' )
            throw new Error('invalid reducer')
        _reducer = reducer;
        _currentState = _reducer(_currentState /* undefined */, __init_action)
        const store = {
            getState,
            subscribe,
            dispatch
        }
        return store;
    }

    function bindActionCreators(actionCreators, dispatch) {
        let actionDispatchers = {}
        for (let methodName in actionCreators) {
            actionDispatchers[methodName] = function (...args) {
                const action = actionCreators[methodName](...args)
                dispatch(action)
            }
        }
        return actionDispatchers;
    }

    return {
        createStore,
        bindActionCreators
    };

})()