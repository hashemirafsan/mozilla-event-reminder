var cakeNotification = "cake-notification"

/*

CAKE_INTERVAL is set to 6 seconds in this example.
Such a short period is chosen to make the add-on's behavior
more obvious, but this is not recommended in real life.
Note that in Chrome, alarms cannot be set for less
than a minute.

*/
var CAKE_INTERVAL = 0.1;

var buttons = [
  {
    "title": "Chocolate"
  }, {
    "title": "Battenberg"
  }
];

browser.alarms.create("", {periodInMinutes: CAKE_INTERVAL});

browser.alarms.onAlarm.addListener(function(alarm) {
  browser.notifications.create(cakeNotification, {
    "type": "basic",
    "iconUrl": browser.extension.getURL("icons/cake-48.png"),
    "title": "Time for cake!",
    "message": "Something something cake",
    "buttons": buttons
  });
});

browser.browserAction.onClicked.addListener(()=> {
  var clearing = browser.notifications.clear(cakeNotification);
  clearing.then(() => {
    console.log("cleared");
  });
});

browser.notifications.onButtonClicked.addListener((id, index) => {
  browser.notifications.clear(id);
  console.log("You chose: " + buttons[index].title);
});
