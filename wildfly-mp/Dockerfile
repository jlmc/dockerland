FROM jboss/wildfly:20.0.1.Final

LABEL maintainer="Joao Costa <costajlmpp@gmail.com>"

ENV INSTALL_DIR /opt/jboss
ENV WILDFLY_HOME ${INSTALL_DIR}/wildfly
ENV DEPLOYMENT_DIR ${WILDFLY_HOME}/standalone/deployments

EXPOSE 8080 9990 8787

COPY postgresql-42.2.16.jar $WILDFLY_HOME/bin

# Add customization resources
ADD wildfly-setup.sh wildfly-setup.cli postgresql-42.2.16.jar ${WILDFLY_HOME}/customization/

# Execute the customization commands
RUN ["/opt/jboss/wildfly/customization/wildfly-setup.sh"]

# Run cleanup
RUN rm -rf ${WILDFLY_HOME}/standalone/configuration/standalone_xml_history ${WILDFLY_HOME}/standalone/data ${WILDFLY_HOME}/standalone/log ${WILDFLY_HOME}/standalone/tmp


# Set the default command to run on boot
# This will boot WildFly in the standalone mode and bind to all interface
# --debug ->> - EXTRA_JAVA_OPTS="-agentlib:jdwp=transport=dt_socket,address=*:8787,server=y,suspend=n"
ENTRYPOINT ["/opt/jboss/wildfly/bin/standalone.sh", "--debug", "-b", "0.0.0.0", "-bmanagement", "0.0.0.0"]
