// Request Notification Permission
const requestPermissionButton = document.getElementById("requestPermission");

requestPermissionButton.addEventListener("click", async () => {
  try {
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      console.log("Notification permission granted!");
    } else {
      console.log("Notification permission denied.");
    }
  } catch (error) {
    console.error("Error requesting notification permission:", error);
  }
});

// Sending Push Notifications
const notificationForm = document.getElementById("notificationForm");
const notificationTitleInput = document.getElementById("notificationTitle");
const notificationBodyInput = document.getElementById("notificationBody");

notificationForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const title = notificationTitleInput.value;
  const body = notificationBodyInput.value;

  const message = {
    notification: {
      title,
      body,
    },
    topic: "allUsers", // Replace with a topic that includes all users
  };

  try {
    const response = await fetch(
      "https://fcm.googleapis.com/fcm/send",
      {
        method: "POST",
        headers: {
          Authorization: "Bearer AIzaSyAXEuzB-FzhN14OXG1jqiVmC3W5M2m9LiI",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(message),
      }
    );
    console.log("Notification sent:", await response.text());
  } catch (error) {
    console.error("Error sending notification:", error);
  }
});
