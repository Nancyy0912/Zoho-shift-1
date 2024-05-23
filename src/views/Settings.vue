<template>
  <v-app>
    <v-container>
      <v-navigation-drawer>
        <v-list-item title="My Application" subtitle="Vuetify"></v-list-item>
        <v-divider></v-divider>
        <!-- <v-virtual-scroll :items="items" height="300" item-height="50"> -->
          <v-list-item link title="General"></v-list-item>
          <v-list-item link title="Schedules"></v-list-item>
          <v-list-item link title="Positions"></v-list-item>
          <v-list-item link title="Messages"></v-list-item>
          <v-list-item link title="Data Backup"></v-list-item>
        <!-- </v-virtual-scroll> -->
      </v-navigation-drawer>
    </v-container>
  </v-app>
</template>
<script setup></script>
