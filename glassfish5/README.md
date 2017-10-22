# costajlmpp/glassfish5

create the Image

```bash
docker build -t costajlmpp/glassfish5 .
```

Run a container

```bash
docker run -it -p 8080:8080 -p 4848:4848 -p 8181:8181 --rm --name test costajlmpp/glassfish5 /bin/bash
```

