async function a1 () {
  return '2222'
}
function a2 () {
 
}
async function compose () {
  console.log(1)
  const a = await a1()
  console.log(a)
}
compose()