# docklands

You can either make the build.js executable or run it with jjs -scripting build.js

# Notes

All images descend from xine / java 8, so before build an image we must build the xine/java image in from the dockerland/java folder.

    $ docker build -t xine/java8 .

Then we can create a new docker image with wildfly using the java8 image dockerland/wildfly
$ docker build -t xine/wildfly .

After that, we are able to build a image with a any javaee project, if the project folder contain some Dockerfile, for example:

	FROM xine/wildfly

	# Create a WildFly admin user to deploy app with CLI
	#RUN /opt/jboss/wildfly/bin/add-user.sh -up mgmt-users.properties admin Admin#70365 --silent

	#ADD target/coffee.war /opt/jboss/wildfly/standalone/deployments/
	COPY target/coffee.war ${DEPLOYMENT_DIR}


## Run the commands:

    $ mvn package && docker build -t xine/coffee .

And build and run a new container

    $ docker run -d -p 8080:8080 --name coffee xine/coffee

If we execute the url: http://localhost:8080/coffee/resources/coffees

    curl -i http://localhost:8080/coffee/resources/coffees