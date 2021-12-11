/* eslint-disable dot-notation */
/* eslint-disable no-console */
import { onError } from '@apollo/client/link/error'

export default function(context) {
  const httpEndpoint = 'http://127.0.0.1:8000/graphql'

  const link = onError(({ graphQLErrors }) => {
    graphQLErrors.forEach((err) => {
      const newErrors = []

      const validationErrors = err['extensions']['validation']
      const validationType = err['path'][0]
      if (validationType === 'register') {
        Object.keys(validationErrors).map((el) => {
          newErrors.push(validationErrors[el][0])
        })
        err.message = newErrors
      }
    })
  })

  return {
    link,
    httpEndpoint,
    tokenName: 'apollo-token',
    authenticationType: 'Bearer'
  }
}
