/**
 * Function: recurringTimer
 * Description: Starts a recurring timer that logs a message at fixed intervals.
 *
 * Steps:
 * 1. Accept two parameters: `message` (string) and `interval` (in milliseconds).
 * 2. Use `setInterval` to repeatedly log the message at the specified interval.
 * 3. Return the timer ID so it can be used for stopping the timer.
 *
 * Example Usage:
 * const timerId = recurringTimer("Hello, world!", 2000); // Logs "Hello, world!" every 2 seconds.
 */
function recurringTimer(message, interval) {
  // Set up a timer using setInterval to log the message
  const timerId = setInterval(() => {
    console.log(message);
  }, interval);

  // Return the timer ID
  return timerId;
} 


/**
 * Function: stopRecurringTimer
 * Description: Stops a recurring timer using its ID.
 *
 * Steps:
 * 1. Accept the timer ID as a parameter.
 * 2. Use `clearInterval` to stop the recurring timer.
 *
 * Example Usage:
 * stopRecurringTimer(timerId); // Stops the recurring timer started with the given ID.
 */

function stopRecurringTimer(timerId) {
  clearInterval(timerId);
  console.log("Recurring timer stopped.");
}
// Example usage:
const timerID = recurringTimer("Stay focused!", 2000); 

setTimeout(() => {
  stopRecurringTimer(timerID);
}
, 10000); // Stops the timer after 10 seconds


function startRecurringTask(taskName, intervalInSeconds) {
  const intervalId = setInterval(() => {
    console.log(`Performing task: ${taskName}`);
  }, intervalInSeconds * 1000);

  // Return the intervalId so we can stop it later
  return intervalId;
}

function stopRecurringTask(intervalId) {
  clearInterval(intervalId);
  console.log("Recurring task stopped.");
}

// Example:
const myTask = startRecurringTask("Check Emails", 2);

setTimeout(() => {
  stopRecurringTask(myTask);
}, 10000); // stops after 10 seconds

module.exports = {
  recurringTimer,
  stopRecurringTimer
};
