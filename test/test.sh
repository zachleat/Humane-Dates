# Usage: ./JsTestDriver.sh TestName
#        where TestName is a directory and TestName.conf in the root.

java -jar lib/JsTestDriver-1.3.2-SVN-Patched-zachleat.jar --config "jsTestDriver.conf" --browser "lib/launch-safari.sh" --tests all --port 8081
osascript -e 'tell application "Safari" to quit' > /dev/null 2>&1