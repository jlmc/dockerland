FROM ubuntu:16.04
MAINTAINER Joao Costa <costajlmpp@gmail.com>

ENV ACTIVEMQ_VERSION 5.15.4

RUN apt-get update \
    && apt-get -y upgrade \
    && apt-get install openjdk-8-jdk -y \
    && apt-get -y install curl \
    && rm -rf /var/cache/apk/*

# install and install Apache Active MQ
RUN curl https://archive.apache.org/dist/activemq/${ACTIVEMQ_VERSION}/apache-activemq-{ACTIVEMQ_VERSION}-bin.tar.gz -o apache-activemq-${ACTIVEMQ_VERSION}-bin.tar.gz \
    && mkdir -p /opt/apache/activemq \
    && tar -zxvf apache-activemq-${ACTIVEMQ_VERSION}-bin.tar.gz -C /opt/apache/activemq \
    && rm -rf apache-activemq-${ACTIVEMQ_VERSION}-bin.tar.gz

WORKDIR /opt/apache/activemq/apache-activemq-${ACTIVEMQ_VERSION}/bin
VOLUME /opt/apache/activemq/apache-activemq-${ACTIVEMQ_VERSION}/conf

RUN echo './activemq start && tail -f /opt/apache/activemq/apache-activemq-${ACTIVEMQ_VERSION}/data/activemq.log' > start.sh \
    && chmod u+rwx start.sh

# Main web interface port
EXPOSE 8161
# Transport connector ports
# OpenWire
EXPOSE 61616
# AMQP
EXPOSE 5672
# STOMP
EXPOSE 61613
# MQTT
EXPOSE 1883
# WS
EXPOSE 61614

CMD ["/bin/bash", "./start.sh"]