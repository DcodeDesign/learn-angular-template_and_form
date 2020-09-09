## Libérer un port TCP / IP?

Afficher les données du port renseigné :
```
lsof -n -i :'4200' | grep LISTEN
```