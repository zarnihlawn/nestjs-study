export const ajvSigninPayloadSchema = {
  type: 'object',
  required: ['username', 'password'], // Both fields are required
  additionalProperties: false, // No extra properties allowed
  properties: {
    username: {
      type: 'string', 
    },
    password: {
      type: 'string', 
    },
  },

  // Custom error messages
  errorMessage: {
    required: {
      username: `"username" is required`,
      password: `"password" is required`,
    },
    additionalProperties: `"No additional properties allowed. Only 'bedNo' and 'wardId' are valid.`,
    properties: {
      username: `"username" must be a string `,
      password: `"password" must be a string`,
    },
  },
};
