<template>
  <div class="post-meta">
  <div
  v-if="source"
  class="post-meta-source"
  itemprop="publisher source"
  itemtype="http://schema.org/Person"
  itemscope
  >
  <span itemprop="name">{{ source }}</span>
  <span v-if="location" itemprop="address"> &nbsp; in {{ location }}</span>
  </div>
  <div v-if="date" class="post-meta-date">
  <time pubdate itemprop="datePublished" :datetime="date">
  {{ resolvedDate }}
  </time>
  </div>

  <div v-if="tags" class="card-subheading post-meta-tags" itemprop="keywords">
  <PostTag v-for="tag in resolvedTags" :key="tag" :tag="tag" />
  </div>

  </div>
</template>

<script>
import dayjs from 'dayjs'
import PostTag from './PostTag.vue'

export default {
  name: 'PostMeta',
  components: {PostTag },
  props: {
    tags: {
      type: [Array, String],
    },
    source: {
      type: String,
    },
    date: {
      type: String,
    },
    location: {
      type: String,
    },
  },
  computed: {
    resolvedDate() {
      return dayjs(this.date).format(
        this.$themeConfig.dateFormat || 'ddd, MMM DD YYYY'
      )
    },
    resolvedTags() {
      if (!this.tags || Array.isArray(this.tags)) return this.tags
      return [this.tags]
    },
  },
}
</script>
