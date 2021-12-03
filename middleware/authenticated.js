export default function({ app, redirect, error }) {
  const hasToken = !!app.$apolloHelpers.getToken()
  if (!hasToken) {
    // error({
    //   errorCode: 503,
    //   message: 'Unauthorized attempt'
    // })
    return redirect('/Login')
  }
}
