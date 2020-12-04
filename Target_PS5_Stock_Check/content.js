console.log("Chrome Extension working!")

var audio = new Audio(chrome.runtime.getURL("Lyn-Life-Will-Change-trimmed.wav"))

function checkForStock(){
  if (document.querySelectorAll('[data-test="storeFulfillmentAggregator"]')[0]) {
    document.getElementsByClassName("slideDeckPicture")[0].getElementsByTagName("img")[0].src = "https://placekitten.com/200/300"
    if (document.querySelectorAll('[data-test="outOfStockNearbyMessage"]')[0]) {
      // do nothing
      console.log("Nothing to see here")
    } else {
      // It might be go time!
      console.log("Something changed GO GO GO GO!!")
      audio.play()
    }
  } else {
    console.log("Too early try again in one second")
    setTimeout(checkForStock, 1000)
  }
}

checkForStock()
