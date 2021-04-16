const now = 1618425476787;

jest.spyOn(Date, "now").mockImplementation(() => now);

const currentDate = new Date(now);
// const realDate = Date;

// @ts-ignore
global.Date = class extends Date {
  constructor(date) {
    if (date) {
      super(date);
    } else {
      super(currentDate);
    }
  }
};