<template>
  <v-card>
    <v-toolbar color="primary">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Shifts</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon="mdi-magnify"></v-btn>

      <v-btn icon="mdi-dots-vertical"></v-btn>

      <template v-slot:extension>
        <v-tabs v-model="tab" align-tabs="title">
          <v-tab
            v-for="item in items"
            :key="item"
            :text="item"
            :value="item"
          ></v-tab>
        </v-tabs>
      </template>
    </v-toolbar>

    <v-tabs-window v-model="tab">
      <v-tabs-window-item v-for="item in items" :key="item" :value="item">
        <v-card >
          <v-card-text v-if="item === 'Dashboard'">
            <v-container>
              <v-row>
                <v-col cols="12" md="6" lg="4">
                  <v-card class="d-flex flex-column" style="height: 300px;">
                    <v-card-title>Time clock </v-card-title>
                    <v-card-text>No Records Found</v-card-text>
                  </v-card>
                </v-col>
                <v-col cols="12" md="6" lg="4">
                  <v-card class="d-flex flex-column" style="height: 300px;">
                    <v-card-title>Pending Approvals</v-card-title>
                    <v-card-text>No Records Found</v-card-text>
                  </v-card>
                </v-col>
                <v-col cols="12" md="6" lg="4">
                  <v-card class="d-flex flex-column" style="height: 300px;">
                    <v-card-title>Who's working?</v-card-title>
                    <v-card-text>No Records Found</v-card-text>
                  </v-card>
                </v-col>
              </v-row>
            <v-row>
              <v-col cols="12" md="6" lg="4">
                  <v-card class="d-flex flex-column" style="height: 300px;">
                    <v-card-title>My Upcoming Shifts</v-card-title>
                    <v-card-text>No Records Found</v-card-text>
                  </v-card>
                </v-col>
                <v-col cols="12" md="6" lg="4">
                  <v-card class="d-flex flex-column" style="height: 300px;">
                    <v-card-title>My Recent Time Entries</v-card-title>
                    <v-card-text>No Records Found</v-card-text>
                  </v-card>
                </v-col>
                <v-col cols="12" md="6" lg="4">
                  <v-card class="d-flex flex-column" style="height: 300px;">
                    <v-card-title>No Show</v-card-title>
                    <v-card-text>No Records Found</v-card-text>
                  </v-card>
                </v-col>
            </v-row>
            </v-container>
          </v-card-text>
          <v-card-text v-else v-text="text"></v-card-text>
        </v-card>
      </v-tabs-window-item>
    </v-tabs-window>
  </v-card>
</template>

<script setup lang="ts">
import { ref } from "vue";

const tab = ref<string | null>(null);
const items = ref<string[]>([
  "Dashboard",
  "Activities"
]);
const text = ref<string>(
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
);
</script>

<style>
/* Add any additional styles here */
</style>
