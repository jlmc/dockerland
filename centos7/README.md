# costajlmpp/centos

create the Image

```bash
docker build -t costajlmpp/centos .
```

Run a container

```bash
docker run -it --rm --name test costajlmpp/centos /bin/bash
```