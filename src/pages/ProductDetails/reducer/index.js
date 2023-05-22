import { SET_PROFILE_STATE, LOG_OUT, UPDATE_PROFILE } from "../action";

const initState = {
  profile: null,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_PROFILE_STATE:
      return {
        ...state,
        ...action.state,
      };

    case UPDATE_PROFILE:
      return {
        ...state,
        profile: { ...state.profile, ...action.updates },
      };

    case LOG_OUT:
      return {
        ...state,
        profile: null,
      };

    default:
      return state;
  }
};

export default authReducer;
