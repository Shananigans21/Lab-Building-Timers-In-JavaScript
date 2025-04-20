const { countdownTimer } = require('../countdown');

jest.useFakeTimers();

describe('countdownTimer', () => {
  beforeEach(() => {
    jest.clearAllTimers();
    jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    console.log.mockRestore();
  });

  test('should log countdown and finish message', () => {
    const startTime = 3;
    const interval = 1000;

    countdownTimer(startTime, interval);

    // Advance time in 1-second intervals
    jest.advanceTimersByTime(3000); // 3 intervals

    // Expect 4 logs: "Time left: 3", "Time left: 2", "Time left: 1", then "Countdown finished!"
    expect(console.log).toHaveBeenCalledTimes(4);
    expect(console.log).toHaveBeenNthCalledWith(1, 'Time left: 3 seconds');
    expect(console.log).toHaveBeenNthCalledWith(2, 'Time left: 2 seconds');
    expect(console.log).toHaveBeenNthCalledWith(3, 'Time left: 1 seconds');
    expect(console.log).toHaveBeenNthCalledWith(4, 'Countdown finished!');
  });
});

