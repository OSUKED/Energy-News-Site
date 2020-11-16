<template>
  <div v-if="$themeConfig.sources">
    <span
    v-for="source in $themeConfig.sources"
    :key="source.name"
    >
    <div class="d-flex align-items-center">
      <a class="profile-avatar">
        <img v-if="source.name === $frontmatter.source" :src="($withBase)(source.avatar)" class="avatar-image" :alt="source.name">
      </a>
      <div  v-if="source.name === $frontmatter.source">
        <span>{{source.name}}</span> &nbsp;
        <NavLink v-if="source.name === $frontmatter.source" :link="source.link" class="btn btn-sm btn-outline-dark">{{ source.linktext }}</NavLink>
      </div>
    </div>
    </span>
  </div>
</template>
