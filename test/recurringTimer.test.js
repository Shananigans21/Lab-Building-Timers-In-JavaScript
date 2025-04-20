const { recurringTimer, stopRecurringTimer } = require("../recurringTimer");

describe("recurringTimer", () => {
  beforeEach(() => {
    jest.useFakeTimers();
    jest.spyOn(console, "log").mockImplementation(() => {});
  });

  afterEach(() => {
    jest.clearAllTimers();
    jest.restoreAllMocks();
    jest.useRealTimers();
  });

  test("should log the message at the specified interval", () => {
    const message = "Hello!";
    recurringTimer(message, 500);

    jest.advanceTimersByTime(1500); // advance time by 1500ms to trigger 3 logs

    expect(console.log).toHaveBeenCalledTimes(3); // should have logged 3 times
    expect(console.log).toHaveBeenCalledWith(message);
  });

  test(
    "should stop logging when stopRecurringTimer is called",
    (done) => {
      const message = "Stay focused!";
      recurringTimer(message, 500);

      jest.advanceTimersByTime(1500); // let it log 3 times

      stopRecurringTimer(); // stop the timer immediately after 3 logs

      jest.advanceTimersByTime(1000); // further advance time but no more logs

      // Ensure no further logs after calling stopRecurringTimer
      setImmediate(() => {
        expect(console.log).toHaveBeenCalledTimes(3); // should still have only logged 3 times
        expect(console.log).toHaveBeenCalledWith(message);
        done(); // mark the test as complete, ensuring all async actions have finished
      });
    },
    10000 // Increase timeout to 10 seconds
  );
});
