console.log('before async');

(async () => {
  try {
    console.log('start async')
    const promise = await new Promise(res => {
      setTimeout(res, 3000)
    })
    console.log('after promise')
    return promise
  } catch (e) {
  }
})()

console.log('after async')