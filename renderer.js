// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.

const csvWorker = new Worker('./workers/csvWorker.js')

csvWorker.onmessage = event => {
  const workerData = event.data
  console.log('Data from the CSV worker:\n', workerData)
  csvWorker.terminate()
  console.log('The CSV worker is done.')
}

csvWorker.onerror = event => {
  console.error('The CSV worker has failed: ', event)
}
