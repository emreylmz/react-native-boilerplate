export type LoginPayload = {
  username: string;
  password: string;
};

export type SuccessLoginPayload = {
  user: any;
};

export type SuccessLoadUserPayload = {
  user: any;
};

export type FailLoginPayload = {
  errorMessage: string;
};

export type SetUserPermissionsPayload = {
  permissions: string[];
};
