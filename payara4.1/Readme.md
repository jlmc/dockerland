# costajlmpp/payara4.1

create the Image

```bash
docker build -t costajlmpp/payara4 .
```

Run a container

```bash
docker run -it -p 8080:8080 -p 4848:4848 -p 8181:8181 --rm --name test costajlmpp/payara4 /bin/bash
```

