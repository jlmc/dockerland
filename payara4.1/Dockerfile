FROM costajlmpp/centos
LABEL maintainer="Joao Costa, costajlmpp@gmail.com" description="Payara 4.1 release image"
MAINTAINER costajlmpp, @costajlmpp

ENV PAYARA_ARCHIVE payara41
ENV DOMAIN_NAME domain1
ENV INSTALL_DIR /opt

RUN curl -o ${INSTALL_DIR}/${PAYARA_ARCHIVE}.zip -L http://bit.ly/1Gm0GIw \ 
    && unzip ${INSTALL_DIR}/${PAYARA_ARCHIVE}.zip -d /opt \ 
    && rm ${INSTALL_DIR}/${PAYARA_ARCHIVE}.zip

ENV PAYARA_HOME ${INSTALL_DIR}/payara41/glassfish
ENV EXEC ${PAYARA_HOME}/bin
ENV DEPLOYMENT_DIR ${PAYARA_HOME}/domains/${DOMAIN_NAME}/autodeploy/
ENTRYPOINT asadmin start-domain --verbose ${DOMAIN_NAME}
WORKDIR /opt/payara41/glassfish/bin
EXPOSE 4848 8009 8080 8181