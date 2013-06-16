HumaneDatesTest = TestCase("HumaneDatesTest");

HumaneDatesTest.prototype.testNow = function()
{
    assertEquals('Just Now', humaneDate(new Date));
};

HumaneDatesTest.prototype.testNowMax = function()
{
    var d = new Date;
    d.setTime(d.getTime() + 59*1000);
    assertEquals('Just Now', humaneDate(d));
};

HumaneDatesTest.prototype.testNowAgoMax = function()
{
    var d = new Date;
    d.setTime(d.getTime() - 59*1000);
    assertEquals('Just Now', humaneDate(d));
};

HumaneDatesTest.prototype.testISO8601WithFractionalSeconds = function()
{
    var d = new Date;
    d.setTime(d.getTime() - 59.1*1000);
    assertEquals('Just Now', humaneDate(d.toISOString()));
};

HumaneDatesTest.prototype.testMinute = function()
{
    var d = new Date;
    d.setTime(d.getTime() + 60*1000);
    assertEquals('1 Minute', humaneDate(d));
};

HumaneDatesTest.prototype.testMinuteMax = function()
{
    var d = new Date;
    d.setTime(d.getTime() + 1.1*60*1000);
    assertEquals('1 Minute', humaneDate(d));
};

HumaneDatesTest.prototype.testMinuteAgo = function()
{
    var d = new Date;
    d.setTime(d.getTime() - 60*1000); // - 60 seconds
    assertEquals('1 Minute Ago', humaneDate(d));
};

HumaneDatesTest.prototype.testMinuteAgoMax = function()
{
    var d = new Date;
    d.setTime(d.getTime() - 1.1*60*1000); // - 60 seconds
    assertEquals('1 Minute Ago', humaneDate(d));
};

HumaneDatesTest.prototype.testMinutes = function()
{
    var d = new Date;
    d.setTime(d.getTime() + 1.11*60*1000); // + 61 seconds
    assertEquals('2 Minutes', humaneDate(d));
};

HumaneDatesTest.prototype.testMinutesAgo = function()
{
    var d = new Date;
    d.setTime(d.getTime() - 1.11*60*1000); // - 61 seconds
    assertEquals('2 Minutes Ago', humaneDate(d));
};

HumaneDatesTest.prototype.testMinutesMax = function()
{
    var d = new Date;
    d.setTime(d.getTime() + 59*60*1000);
    assertEquals('59 Minutes', humaneDate(d));
};

HumaneDatesTest.prototype.testMinutesAgoMax = function()
{
    var d = new Date;
    d.setTime(d.getTime() - 59*60*1000);
    assertEquals('59 Minutes Ago', humaneDate(d));
};

HumaneDatesTest.prototype.testHour = function()
{
    var d = new Date;
    d.setTime(d.getTime() + 60*60*1000);
    assertEquals('1 Hour', humaneDate(d));
};

HumaneDatesTest.prototype.testHourMax = function()
{
    var d = new Date;
    d.setTime(d.getTime() + 1.1*60*60*1000);
    assertEquals('1 Hour', humaneDate(d));
};

HumaneDatesTest.prototype.testHourAgo = function()
{
    var d = new Date;
    d.setTime(d.getTime() - 60*60*1000);
    assertEquals('1 Hour Ago', humaneDate(d));
};

HumaneDatesTest.prototype.testHourAgoMax = function()
{
    var d = new Date;
    d.setTime(d.getTime() - 1.1*60*60*1000);
    assertEquals('1 Hour Ago', humaneDate(d));
};

HumaneDatesTest.prototype.testHours = function()
{
    var d = new Date;
    d.setTime(d.getTime() + 1.11*60*60*1000); // + 61 minutes
    assertEquals('2 Hours', humaneDate(d));
};

HumaneDatesTest.prototype.testHoursAgo = function()
{
    var d = new Date;
    d.setTime(d.getTime() - 1.11*60*60*1000); // - 61 minutes
    assertEquals('2 Hours Ago', humaneDate(d));
};

HumaneDatesTest.prototype.testHoursMax = function()
{
    var d = new Date;
    d.setTime(d.getTime() + 23*60*60*1000);
    assertEquals('23 Hours', humaneDate(d));
};

HumaneDatesTest.prototype.testHoursAgoMax = function()
{
    var d = new Date;
    d.setTime(d.getTime() - 23*60*60*1000);
    assertEquals('23 Hours Ago', humaneDate(d));
};

HumaneDatesTest.prototype.testDay = function()
{
    var d = new Date;
    d.setTime(d.getTime() + 24*60*60*1000); 
    assertEquals('1 Day', humaneDate(d));
};

HumaneDatesTest.prototype.testDayMax = function()
{
    var d = new Date;
    d.setTime(d.getTime() + 1.1*24*60*60*1000); 
    assertEquals('1 Day', humaneDate(d));
};

HumaneDatesTest.prototype.testDayAgo = function()
{
    var d = new Date;
    d.setTime(d.getTime() - 24*60*60*1000); 
    assertEquals('1 Day Ago', humaneDate(d));
};

HumaneDatesTest.prototype.testDayAgoMax = function()
{
    var d = new Date;
    d.setTime(d.getTime() - 1.1*24*60*60*1000); 
    assertEquals('1 Day Ago', humaneDate(d));
};

HumaneDatesTest.prototype.testDays = function()
{
    var d = new Date;
    d.setTime(d.getTime() + 1.11*24*60*60*1000); 
    assertEquals('2 Days', humaneDate(d));
};

HumaneDatesTest.prototype.testDaysAgo = function()
{
    var d = new Date;
    d.setTime(d.getTime() - 1.11*24*60*60*1000); 
    assertEquals('2 Days Ago', humaneDate(d));
};

HumaneDatesTest.prototype.testDaysMax = function()
{
    var d = new Date;
    d.setTime(d.getTime() + 6*24*60*60*1000); 
    assertEquals('6 Days', humaneDate(d));
};

HumaneDatesTest.prototype.testDaysAgoMax = function()
{
    var d = new Date;
    d.setTime(d.getTime() - 6*24*60*60*1000); 
    assertEquals('6 Days Ago', humaneDate(d));
};

HumaneDatesTest.prototype.testWeek = function()
{
    var d = new Date;
    d.setTime(d.getTime() + 7*24*60*60*1000); 
    assertEquals('1 Week', humaneDate(d));
};

HumaneDatesTest.prototype.testWeekMax = function()
{
    var d = new Date;
    d.setTime(d.getTime() + 1.1*7*24*60*60*1000); 
    assertEquals('1 Week', humaneDate(d));
};

HumaneDatesTest.prototype.testWeekAgo = function()
{
    var d = new Date;
    d.setTime(d.getTime() - 7*24*60*60*1000); 
    assertEquals('1 Week Ago', humaneDate(d));
};

HumaneDatesTest.prototype.testWeekAgoMax = function()
{
    var d = new Date;
    d.setTime(d.getTime() - 1.1*7*24*60*60*1000); 
    assertEquals('1 Week Ago', humaneDate(d));
};

HumaneDatesTest.prototype.testWeeks = function()
{
    var d = new Date;
    d.setTime(d.getTime() + 1.11*7*24*60*60*1000); 
    assertEquals('2 Weeks', humaneDate(d));
};

HumaneDatesTest.prototype.testWeeksAgo = function()
{
    var d = new Date;
    d.setTime(d.getTime() - 1.11*7*24*60*60*1000); 
    assertEquals('2 Weeks Ago', humaneDate(d));
};

HumaneDatesTest.prototype.testWeeksMax = function()
{
    var d = new Date;
    d.setTime(d.getTime() + 30*24*60*60*1000); // 30 days, slightly less than 365/12 ~= 30.14
    assertEquals('5 Weeks', humaneDate(d));
};

HumaneDatesTest.prototype.testWeeksAgoMax = function()
{
    var d = new Date;
    d.setTime(d.getTime() - 30*24*60*60*1000); // 30 days, slightly less than 365/12 ~= 30.14
    assertEquals('5 Weeks Ago', humaneDate(d));
};

HumaneDatesTest.prototype.testMonth = function()
{
    var d = new Date;
    d.setTime(d.getTime() + (365/12)*24*60*60*1000); 
    assertEquals('1 Month', humaneDate(d));
};

HumaneDatesTest.prototype.testMonthMax = function()
{
    var d = new Date;
    d.setTime(d.getTime() + 1.1*(365/12)*24*60*60*1000); 
    assertEquals('1 Month', humaneDate(d));
};

HumaneDatesTest.prototype.testMonthAgo = function()
{
    var d = new Date;
    d.setTime(d.getTime() - (365/12)*24*60*60*1000); 
    assertEquals('1 Month Ago', humaneDate(d));
};

HumaneDatesTest.prototype.testMonthAgoMax = function()
{
    var d = new Date;
    d.setTime(d.getTime() - 1.1*(365/12)*24*60*60*1000); 
    assertEquals('1 Month Ago', humaneDate(d));
};

HumaneDatesTest.prototype.testMonths = function()
{
    var d = new Date;
    d.setTime(d.getTime() + 1.11*(365/12)*24*60*60*1000); 
    assertEquals('2 Months', humaneDate(d));
};

HumaneDatesTest.prototype.testMonthsAgo = function()
{
    var d = new Date;
    d.setTime(d.getTime() - 1.11*(365/12)*24*60*60*1000); 
    assertEquals('2 Months Ago', humaneDate(d));
};

HumaneDatesTest.prototype.testMonthsMax = function()
{
    var d = new Date;
    d.setTime(d.getTime() + 11*(365/12)*24*60*60*1000); 
    assertEquals('11 Months', humaneDate(d));
};

HumaneDatesTest.prototype.testMonthsAgoMax = function()
{
    var d = new Date;
    d.setTime(d.getTime() - 11*(365/12)*24*60*60*1000); 
    assertEquals('11 Months Ago', humaneDate(d));
};

HumaneDatesTest.prototype.testYear = function()
{
    var d = new Date;
    d.setTime(d.getTime() + 365*24*60*60*1000); 
    assertEquals('1 Year', humaneDate(d));
};

HumaneDatesTest.prototype.testYearMax = function()
{
    var d = new Date;
    d.setTime(d.getTime() + 1.1*365*24*60*60*1000); 
    assertEquals('1 Year', humaneDate(d));
};

HumaneDatesTest.prototype.testYearAgo = function()
{
    var d = new Date;
    d.setTime(d.getTime() - 365*24*60*60*1000); 
    assertEquals('1 Year Ago', humaneDate(d));
};

HumaneDatesTest.prototype.testYearAgoMax = function()
{
    var d = new Date;
    d.setTime(d.getTime() - 1.1*365*24*60*60*1000); 
    assertEquals('1 Year Ago', humaneDate(d));
};

HumaneDatesTest.prototype.testYears = function()
{
    var d = new Date;
    d.setTime(d.getTime() + 1.11*365*24*60*60*1000); 
    assertEquals('2 Years', humaneDate(d));
};

HumaneDatesTest.prototype.testYearsAgo = function()
{
    var d = new Date;
    d.setTime(d.getTime() - 1.11*365*24*60*60*1000); 
    assertEquals('2 Years Ago', humaneDate(d));
};

HumaneDatesTest.prototype.testYearsALot = function()
{
    var d = new Date;
    d.setTime(d.getTime() + 100*365*24*60*60*1000); 
    assertEquals('100 Years', humaneDate(d));
};

HumaneDatesTest.prototype.testYearsAgoALot = function()
{
    var d = new Date;
    d.setTime(d.getTime() - 100*365*24*60*60*1000); 
    assertEquals('100 Years Ago', humaneDate(d));
};

HumaneDatesTest.prototype.testInfsanity = function()
{
    assertTrue('Some number is less than infinity.', 400 < Infinity);
};