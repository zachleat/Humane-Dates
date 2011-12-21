HumaneDatesPluginTest = TestCase("HumaneDatesPluginTest");

HumaneDatesPluginTest.prototype.getUTCDate = function(d)
{
    function pad(num)
    {
        return num < 10 ? '0' + num : num;
    }

    return d.getUTCFullYear() + '/' +
        pad(d.getUTCMonth() + 1) + '/' +
        pad(d.getUTCDate()) + 'T' +
        pad(d.getUTCHours()) + ':' + 
        pad(d.getUTCMinutes()) + ':' +
        pad(d.getUTCSeconds()) + 'Z';
};

HumaneDatesPluginTest.prototype.testNow = function()
{
    var d = new Date;
    d.setTime(d.getTime());

    jQuery(document.body).append('<span title="' + this.getUTCDate(d) + '">test</span>');
    jQuery('span').humaneDates();

    assertEquals('Just Now', jQuery('span').html());
};


HumaneDatesPluginTest.prototype.testMinutes = function()
{
    var d = new Date;
    d.setTime(d.getTime() + 120*1000);

    jQuery(document.body).append('<span title="' + this.getUTCDate(d) + '">test</span>');
    jQuery('span').humaneDates();

    assertEquals('2 Minutes', jQuery('span').html());
};

HumaneDatesPluginTest.prototype.testHtml5 = function()
{
    var d = new Date;
    d.setTime(d.getTime() + 120*1000);

    jQuery(document.body).append('<time datetime="' + this.getUTCDate(d) + '">test</time>');
    jQuery('time').humaneDates();

    assertEquals('2 Minutes', jQuery('time').html());
};

HumaneDatesPluginTest.prototype.testLowercase = function()
{
    var d = new Date;
    d.setTime(d.getTime() + 120*1000);

    jQuery(document.body).append('<time datetime="' + this.getUTCDate(d) + '">test</time>');
    jQuery('time').humaneDates({'lowercase': true});

    assertEquals('2 minutes', jQuery('time').html());
};