var cmd = "docker build -t xine/derbydb ."
var System = Java.type("java.lang.System");
$EXEC(cmd, System.in, System.out, System.err);