# image de départ
# FROM alpine:3.15

 # stage compilation
 FROM alpine:3.15 as builder

 # chemin de travail
 WORKDIR /app

 # installation des paquets système
 RUN apk add --no-cache --update npm

 # ajout utilisateur node et groupe node
 RUN addgroup -S delph && adduser -S delph -G delph

 # downgrade des privilèges
 USER delph

 # copie des fichiers du dépôt
 COPY --chown=delph:delph . .
 
 # installation des dépendances avec npm
 RUN npm install

 # build avec npm
 RUN npm run build



 # stage exécution
 FROM alpine:3.15 as runner
 WORKDIR /run
 RUN apk add --no-cache --update nodejs
 RUN addgroup -S delph && adduser -S delph -G delph
 USER delph
 COPY --from=builder --chown=delph:delph /app ./

 # exécution
 CMD ["node", "dist/index.js"]