<template>
  <div class="col-full">
    <div class="forum-list">
      <h2 class="list-title">
        <router-link
          v-if="categoryId"
          :to="{name: 'Category', params: {id: categoryId}}">
          {{ categoryName }}
        </router-link>
        <span v-else>{{ categoryName }}</span>
      </h2>
      <div class="forum-listing" v-for="forum in forums" :key="forum.id">
        <div class="forum-details">
          <router-link
            :to = "{name: 'Forum', params: {id: forum.id}}"
            class="text-xlarge" >
            {{ forum.name }}
          </router-link>
          <p>{{ forum.description }}</p>
        </div>
        <div class="threads-count">
          <p>
            <span class="count"> {{forum.threads?.length }}</span>
            {{ displayForumThreadCount(forum) }}
          </p>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "ForumList",
  props: {
    forums: {
      type: Array,
      required: true
    },
    categoryId: {
      type: String,
      required: false
    },
    categoryName: {
      type: String,
      default: "Forums"
    }
  },
  methods: {
    displayForumThreadCount(forum) {
      return forum.threads?.length ? (forum.threads?.length > 1 ? 'threads' : 'thread') : 'no threads'
    }
  }
}
</script>

<style scoped>

</style>
