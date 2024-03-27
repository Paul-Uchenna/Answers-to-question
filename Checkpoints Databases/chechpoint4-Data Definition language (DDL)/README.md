# Modèle Relationnel

## Introduction

Ce référentiel contient le modèle relationnel pour une base de données donnée. Le modèle est conçu pour faciliter la gestion des données selon les contraintes et les relations spécifiées.

## Modèle Relationnel

Le modèle relationnel fourni définit les tables et leurs relations ainsi que les types de données correspondants. Vous pouvez consulter le modèle relationnel [ici](https://i.imgur.com/aZeHhHe.png) et leurs tableaux de types de données correspondants:[ici](https://i.imgur.com/vx1xFvS.png)

## Tables et Types de Données

1. **CLIENT**

   - client_id (Clé Primaire)
   - nom_client
   - tel_client

2. **COMMANDE**

   - produit_id (Clé Étrangère référençant PRODUIT)
   - client_id (Clé Étrangère référençant CLIENT)
   - quantité
   - montant_commande

3. **PRODUIT**

   - produit_id (Clé Primaire)
   - nom_produit
   - prix_produit

## Instructions SQL

Après la création des tables, voici les commandes SQL pour répondre aux exigences spécifiées :

### Ajouter une colonne "Catégorie" (VARCHAR2(20)) à la table PRODUIT

- Ajoutez une colonne Catégorie (VARCHAR2(20)) à la table PRODUCT.
- Ajoutez une colonne OrderDate (DATE) à la table ORDERS qui a SYSDATE comme valeur par défaut.
