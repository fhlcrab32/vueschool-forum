<template>
  <div class="col-full">
    <div class="forum-list">
      <div class = "forum-list title">
        <h1>Welcome to Forum</h1>
      </div>
      <ForumList
        v-for="category in categories"
        :forums="getCategoryForums(category)"
        :category-name = category.name
        :category-id = category.id
        :key ="category.id"/>
    </div>
  </div>
</template>

<script>
import ForumList from "@/components/ForumList";
export default {
  name: "CategoryList",
  components: {ForumList},
  props: {
    categories : {
      type: Array,
      required: true
    },
    forums : {
      type: Array,
      required: true
    }
  },
  methods: {
    getCategoryForums(category) {
      return this.forums.filter(forum => forum.categoryId === category.id)
    }
  }
}
</script>

<style scoped>

</style>
