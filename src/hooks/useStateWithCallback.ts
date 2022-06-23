import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

export const useStateWithCallback = (initialState: any) => {
  const [state, setState] = useState(initialState);

  // if i set null here - stupid TS linter says:
  // "This expression is not callable.

  // Type 'never' has no call signatures.ts(2349)"
  // so i paste anon func

  const callbackRef = useRef((s: any) => s);

  const updateState = useCallback((newState, callback) => {
    callbackRef.current = callback;

    setState((prevState: any) => (
      typeof newState === 'function' ? newState(prevState) : newState
    ));
  }, []);

  useEffect(() => {
    if (callbackRef.current) {
      callbackRef.current(state);
    }
  }, [state]);

  return [state, updateState];
};
