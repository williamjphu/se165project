<template>
<v-container fluid>
  <v-layout row>
    <v-flex xs8 pa-5>
      <v-card >
        <v-toolbar color="orange">
          
          <v-toolbar-title>Account Details</v-toolbar-title>
          <v-spacer></v-spacer>
          </v-toolbar>
        <v-list two-line>
          <v-list-tile>
          	<v-list-tile-title>Name: {name}
          	</v-list-tile-title>
          	<v-list-tile-subtitle>
          		edit
          	</v-list-tile-subtitle>
        </v-list-tile>
        </v-list>
        <v-list two-line>
          <v-list-tile>
          	<v-list-tile-title>Email: {email}
          	</v-list-tile-title>
          	<v-list-tile-subtitle>
          		edit
          	</v-list-tile-subtitle>
        </v-list-tile>
        </v-list> 
        <v-list two-line>
          <v-list-tile>
          	<v-list-tile-title>Password: {password}
          	</v-list-tile-title>
          	<v-list-tile-subtitle>
          		edit
          	</v-list-tile-subtitle>
        </v-list-tile>
        </v-list> 
        
      </v-card>
    </v-flex>
  </v-layout>
</v-container>
</template>

