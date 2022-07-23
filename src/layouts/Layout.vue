<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title class="absolute-center">
          ITTM
        </q-toolbar-title>

        <q-btn
          v-if="!loggedIn"
          to="/auth"
          flat
          class="absolute-right"
          icon-right="account_circle"
          label="Login" />

        <q-btn
          v-else
          @click="logoutUser"
          flat
          class="absolute-right"
          icon-right="logout"
          label="Logout" />
      </q-toolbar>
    </q-header>

    <q-footer>
      <q-tabs>
        <q-route-tab
          v-for="nav in navs"
          :key="nav.id"
          :to="nav.to"
          :icon="nav.icon"
          :label="nav.label" />
      </q-tabs>
    </q-footer>

    <q-drawer
      v-model="leftDrawerOpen"
      :breakpoint="767"
      :width="250"
      class="bg-primary"
      show-if-above
      bordered
    >
      <q-list dark>
        <q-item-label header>
          Navigation
        </q-item-label>

        <q-item
          v-for="nav in navs"
          :key="nav.id"
          :to="nav.to"
          exact
          clickable
          class="text-blue-grey-12">
          <q-item-section avatar>
            <q-icon :name="nav.icon" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ nav.label }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { ref } from 'vue'

export default {
  name: 'MainLayout',

  data() {
    return {
      // sidebar navigation
      navs: [
        {
          id: 1,
          label: 'Todo',
          icon: 'list',
          to: '/',
        },
        {
          id: 2,
          label: 'Settings',
          icon: 'settings',
          to: '/settings',
        },
      ],
    }
  },
  setup () {
    const leftDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  },
  computed: {
    ...mapState('auth', ['loggedIn']),
  },
  methods: {
    ...mapActions('auth', ['logoutUser']),
  },
}
</script>

<style lang="scss" scoped>
@media screen and (min-width: 768px) {
  .q-footer {
    display: none;
  }
}

.q-drawer {
  .q-router-link--exact-active {
    color: white !important;
  }
}
</style>
