# create base wildfly image

1. build the docker image:  
   ```shell script
   docker build -t costajlmpp/wildfly-mp:20.1 .
   ```
2. push the docker image
   ```shell script
    docker image push costajlmpp/wildfly-mp:20.1
   ```

3. No we are able to run a docker image  
   ```
   docker run --name wp --link postgres-dbs:dbs -e "DB_HOST=dbs" -e "DB_PORT=" -p "8081:8080" -p "9991:9990" costajlmpp/wildfly-mp:20.1
   ```