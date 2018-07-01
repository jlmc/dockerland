# Apache MQ docker images

to build the image we should run the following command:

```bash
docker build -t costax/ativemq:5.15.4 .
```


The generated image will expose the default ports used by Apache Active MQ.

The image also has a volume in the directory:
```
/opt/apache/activemq/apache-activemq-5.15.4/conf
```




## Run the image

To run the generated image we can execute the following command:

```bash
docker run -d --rm \
    --name YOUR_CONTAINER_NAME \
    -p 8161:8161 \
    -p 61616:61616 \
    -p 5672:5672 \
    -p 61613:61613 \
    -p 1883:1883 \
    -p 61614:61614 \
    -v "YOUR_HOST_VOLUME_DIRECTORY:/opt/apache/activemq/apache-activemq-5.15.4/conf" \
    costax/ativemq:5.15.4
```

