from energynews import orchestrator

current_articles = orchestrator.combine_current_articles()
orchestrator.rebuild_posts(current_articles, "docs")

