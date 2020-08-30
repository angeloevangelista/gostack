export function updateProfileRequest(profileData) {
  return {
    type: '@user/UPDATE_PROFILE_REQUEST',
    payload: { profileData },
  };
}

export function updateProfileSuccess(profile) {
  return {
    type: '@user/UPDATE_PROFILE_SUCCESS',
    payload: { profile },
  };
}

export function updateProfileFailure() {
  return {
    type: '@user/UPDATE_PROFILE_FAILURE',
  };
}
