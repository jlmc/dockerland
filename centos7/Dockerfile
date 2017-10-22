FROM centos:7
MAINTAINER costajlmpp, @costajlmpp

RUN yum -y upgrade && \
    yum -y update && \
    yum -y install wget unzip findutils && \
    wget --no-check-certificate --no-cookies --header "Cookie: oraclelicense=accept-securebackup-cookie" http://download.oracle.com/otn-pub/java/jdk/8u151-b12/e758a0de34e24606bca991d704f6dcbf/jdk-8u151-linux-x64.rpm && \
    rpm -ivh jdk-8u151-linux-x64.rpm && \
    yum -y clean all && \
    rm -f jdk-8u151-linux-x64.rpm && \
    yum clean all

ENV JAVA_HOME /usr/java/jdk1.8.0_151
ENV PATH "$PATH":/${JAVA_HOME}/bin:.:
