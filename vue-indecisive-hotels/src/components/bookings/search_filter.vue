<template>
  <v-container fluid py-2 px-2>
    <v-layout row wrap>
      <v-flex d-flex xs12>
        <v-expansion-panel expand>
          <v-expansion-panel-content>
            <div slot="header">Sort</div>
            <v-card>
              <v-card-text class="grey lighten-4">By price, from low to high</v-card-text>
              <v-card-text class="grey lighten-3">By price, from high to low</v-card-text>
              <v-card-text class="grey lighten-4">By rating, from low to high</v-card-text>
              <v-card-text class="grey lighten-3">By rating, from high to low</v-card-text>
              <v-card-text class="grey lighten-4">Alphabetically, from low to high</v-card-text>
              <v-card-text class="grey lighten-3">Alphabetically, from high to low</v-card-text>
            </v-card>
          </v-expansion-panel-content>
          <v-expansion-panel-content>
            <div slot="header">Filter By</div>
            <v-card>
              <v-card-text class="grey lighten-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-flex>
    </v-layout>
  </v-container>
</template>