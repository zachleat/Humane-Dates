PROFILE_NAME="JsTestDriver-Boilerplate"
FIREFOX="/Applications/Firefox.app/Contents/MacOS/Firefox"

exec $FIREFOX -CreateProfile $PROFILE_NAME

# set about:config browser.sessionstore.resume_from_crash=false
#                  browser.tabs.warnOnClose=false