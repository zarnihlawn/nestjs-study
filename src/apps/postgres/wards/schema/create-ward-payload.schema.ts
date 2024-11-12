export const ajvCreateWardPayloadSchema = {
  type: 'object',
  properties: {
    wardName: { type: 'string', minLength: 3, maxLength: 24 },
    // location: { type: 'string' },
    // active: { type: 'string' },
  },
  required: ['wardName'],
  additionalProperties: false,

  errorMessage: {
    required: {
      wardName: `"wardName" is required`,
    },
    additionalProperties: 'No additional properties are allowed',
    properties: {
      wardName:
        'Ward name must be a string with a minimum length of 3 and a maximum length of 24',
    },
  },
};
