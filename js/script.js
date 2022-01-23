'use strict';


const inputUzs = document.querySelector("#uzs"),
  inputUsd = document.querySelector("#usd");

inputUzs.addEventListener('input', () => {
  const request = new XMLHttpRequest()
  request.open('GET', 'js/current.json')
  request.setRequestHeader('Content-type', 'application/json')
  request.send()

  request.addEventListener('load', () => {
    if(request.readyState === 4 && request.status === 200){
      console.log(request.response)
      const data = JSON.parse(request.response)
      inputUsd.value = (+inputUzs.value/(data.current.usd)).toFixed(2)
      console.log(data.current.usd)
    }
    else{
      inputUsd.value = 'ERROR'
    }
  })
})
