<template>
  <h1>{{ category.name }}</h1>
  <div className="col-full">
    <ForumList
      :forums="getCategoryForums()"
      :category-name="category.name"/>
  </div>
</template>

<script>
import ForumList from "@/components/ForumList";
import sourceData from "@/data.json"

export default {
  name: "PageCategory",
  components: {
    ForumList
  },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      forums: sourceData.forums
    }
  },
  computed: {
    category() {
      return sourceData.categories.find(category => category.id === this.id)
    }
  },
  methods: {
    getCategoryForums() {
      return sourceData.forums.filter(forum => forum.categoryId === this.id)
    }
  }
}
</script>
<style scoped>
</style>

