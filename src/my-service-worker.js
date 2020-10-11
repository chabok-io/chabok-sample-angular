//my-service-worker.js
importScripts('./ngsw-worker.js');
importScripts('./ChabokSDKWorker.js');

self.addEventListener('notificationclick', (event) => {
  console.log('notification clicked!')
});
