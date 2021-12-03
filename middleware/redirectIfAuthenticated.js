export default function({ app, redirect, error }) {
  const hasToken = !!app.$apolloHelpers.getToken()
  if (hasToken) {
    return redirect('/app/Tasks')
  }
}
