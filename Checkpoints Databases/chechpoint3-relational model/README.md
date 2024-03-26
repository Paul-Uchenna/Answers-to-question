# Hotel Management Database

## Overview

This repository contains the relational diagram for a hotel management database. The database is designed to facilitate the management of data for hotels in a tourist area.

## Entity Relationship Model

The entity relationship model provided by the director outlines the entities and their relationships in the database. You can find the entity relationship model [here](https://i.imgur.com/oHkrfiJ.png).

## Relational Diagram

The relational diagram, converted from the entity relationship model, illustrates how the entities are structured and related in the database. It provides a visual representation of tables and their relationships.

### Entities and Attributes

1. **Type**

   - Type_id (Primary Key)
   - Type_Name

2. **Hotel**

   - Hotel_id (Primary Key)
   - Hotel_name
   - type_id (Foreign Key referencing Type)

3. **Employee**

   - Employee_id (Primary Key)
   - Employee_Name
   - Employee_Specialitiy
   - hotel_id (Foreign Key referencing Hotel)

4. **Room**

   - room_id (Primary Key)
   - floor
   - hotel_id (Foreign Key referencing Hotel)
   - cathegory_id (Foreign Key referencing Cathegory)

5. **Cathegory**
   - Cathegory_id (Primary Key)
   - Cathegory_name
   - Price
   - Beds_numbers
