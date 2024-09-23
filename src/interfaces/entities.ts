export interface IRepository {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  description: string;
  stargazers_count: number;
  forks: number;
  homepage: string;
  owner: {
      avatar_url: string;
  }
}

/*
{
  "id": 71995937,
  "node_id": "MDEwOlJlcG9zaXRvcnk3MTk5NTkzNw==",
  "name": "nuxt",
  "full_name": "nuxt/nuxt",
  "private": false,
  "owner": {
    "login": "nuxt",
    "id": 23360933,
    "node_id": "MDEyOk9yZ2FuaXphdGlvbjIzMzYwOTMz",
    "avatar_url": "https://avatars.githubusercontent.com/u/23360933?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/nuxt",
    "html_url": "https://github.com/nuxt",
    "followers_url": "https://api.github.com/users/nuxt/followers",
    "following_url": "https://api.github.com/users/nuxt/following{/other_user}",
    "gists_url": "https://api.github.com/users/nuxt/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/nuxt/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/nuxt/subscriptions",
    "organizations_url": "https://api.github.com/users/nuxt/orgs",
    "repos_url": "https://api.github.com/users/nuxt/repos",
    "events_url": "https://api.github.com/users/nuxt/events{/privacy}",
    "received_events_url": "https://api.github.com/users/nuxt/received_events",
    "type": "Organization",
    "site_admin": false
  },
  "html_url": "https://github.com/nuxt/nuxt",
  "description": "The Intuitive Vue Framework.",
  "fork": false,
  "url": "https://api.github.com/repos/nuxt/nuxt",
  "forks_url": "https://api.github.com/repos/nuxt/nuxt/forks",
  "keys_url": "https://api.github.com/repos/nuxt/nuxt/keys{/key_id}",
  "collaborators_url": "https://api.github.com/repos/nuxt/nuxt/collaborators{/collaborator}",
  "teams_url": "https://api.github.com/repos/nuxt/nuxt/teams",
  "hooks_url": "https://api.github.com/repos/nuxt/nuxt/hooks",
  "issue_events_url": "https://api.github.com/repos/nuxt/nuxt/issues/events{/number}",
  "events_url": "https://api.github.com/repos/nuxt/nuxt/events",
  "assignees_url": "https://api.github.com/repos/nuxt/nuxt/assignees{/user}",
  "branches_url": "https://api.github.com/repos/nuxt/nuxt/branches{/branch}",
  "tags_url": "https://api.github.com/repos/nuxt/nuxt/tags",
  "blobs_url": "https://api.github.com/repos/nuxt/nuxt/git/blobs{/sha}",
  "git_tags_url": "https://api.github.com/repos/nuxt/nuxt/git/tags{/sha}",
  "git_refs_url": "https://api.github.com/repos/nuxt/nuxt/git/refs{/sha}",
  "trees_url": "https://api.github.com/repos/nuxt/nuxt/git/trees{/sha}",
  "statuses_url": "https://api.github.com/repos/nuxt/nuxt/statuses/{sha}",
  "languages_url": "https://api.github.com/repos/nuxt/nuxt/languages",
  "stargazers_url": "https://api.github.com/repos/nuxt/nuxt/stargazers",
  "contributors_url": "https://api.github.com/repos/nuxt/nuxt/contributors",
  "subscribers_url": "https://api.github.com/repos/nuxt/nuxt/subscribers",
  "subscription_url": "https://api.github.com/repos/nuxt/nuxt/subscription",
  "commits_url": "https://api.github.com/repos/nuxt/nuxt/commits{/sha}",
  "git_commits_url": "https://api.github.com/repos/nuxt/nuxt/git/commits{/sha}",
  "comments_url": "https://api.github.com/repos/nuxt/nuxt/comments{/number}",
  "issue_comment_url": "https://api.github.com/repos/nuxt/nuxt/issues/comments{/number}",
  "contents_url": "https://api.github.com/repos/nuxt/nuxt/contents/{+path}",
  "compare_url": "https://api.github.com/repos/nuxt/nuxt/compare/{base}...{head}",
  "merges_url": "https://api.github.com/repos/nuxt/nuxt/merges",
  "archive_url": "https://api.github.com/repos/nuxt/nuxt/{archive_format}{/ref}",
  "downloads_url": "https://api.github.com/repos/nuxt/nuxt/downloads",
  "issues_url": "https://api.github.com/repos/nuxt/nuxt/issues{/number}",
  "pulls_url": "https://api.github.com/repos/nuxt/nuxt/pulls{/number}",
  "milestones_url": "https://api.github.com/repos/nuxt/nuxt/milestones{/number}",
  "notifications_url": "https://api.github.com/repos/nuxt/nuxt/notifications{?since,all,participating}",
  "labels_url": "https://api.github.com/repos/nuxt/nuxt/labels{/name}",
  "releases_url": "https://api.github.com/repos/nuxt/nuxt/releases{/id}",
  "deployments_url": "https://api.github.com/repos/nuxt/nuxt/deployments",
  "created_at": "2016-10-26T11:18:47Z",
  "updated_at": "2024-09-23T18:25:29Z",
  "pushed_at": "2024-09-23T18:26:22Z",
  "git_url": "git://github.com/nuxt/nuxt.git",
  "ssh_url": "git@github.com:nuxt/nuxt.git",
  "clone_url": "https://github.com/nuxt/nuxt.git",
  "svn_url": "https://github.com/nuxt/nuxt",
  "homepage": "https://nuxt.com",
  "size": 113065,
  "stargazers_count": 54185,
  "watchers_count": 54185,
  "language": "TypeScript",
  "has_issues": true,
  "has_projects": true,
  "has_downloads": true,
  "has_wiki": false,
  "has_pages": false,
  "has_discussions": true,
  "forks_count": 4949,
  "mirror_url": null,
  "archived": false,
  "disabled": false,
  "open_issues_count": 803,
  "license": {
    "key": "mit",
    "name": "MIT License",
    "spdx_id": "MIT",
    "url": "https://api.github.com/licenses/mit",
    "node_id": "MDc6TGljZW5zZTEz"
  },
  "allow_forking": true,
  "is_template": false,
  "web_commit_signoff_required": false,
  "topics": [
    "csr",
    "framework",
    "full-stack",
    "hacktoberfest",
    "hybrid",
    "node",
    "nuxt",
    "server-rendering",
    "ssg",
    "ssr",
    "static-site-generator",
    "universal",
    "vue"
  ],
  "visibility": "public",
  "forks": 4949,
  "open_issues": 803,
  "watchers": 54185,
  "default_branch": "main",
  "score": 1.0
}
  */
