export default () => {
  const body = document.querySelector('body')

  body.parentElement.removeChild(body)
}
