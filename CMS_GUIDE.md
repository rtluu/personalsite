# CMS Guide — ryanluu.com

This site uses [Decap CMS](https://decapcms.org/) (formerly Netlify CMS) for content management. The CMS admin panel is available at `/admin` on the deployed site.

## Accessing the CMS

1. Visit `https://www.ryanluu.com/admin`
2. Log in with your Netlify Identity credentials
3. Make changes via the UI — changes commit directly to the GitHub repo
4. Netlify auto-deploys when the main branch is updated (usually 1–2 minutes)

## Setting Up Netlify Identity (one-time)

1. In Netlify dashboard → **Site settings → Identity → Enable Identity**
2. Under Identity → **Services → Git Gateway → Enable Git Gateway**
3. Under Identity → **Registration → Invite only** (recommended)
4. Under Identity → **Invite users** → enter your email
5. Accept the invite email and set your password

## What You Can Edit

### Site Config (`/admin` → Site Config → Site Info)
- Your name, headline, short headline
- Bio text (appears on home page About section)
- Contact email for speaking inquiries
- Speaking section text
- Site info panel content ("What is this?", etc.)

### Social Links (`/admin` → Site Config → Social Links)
- Add/remove/reorder social platform links
- Supported platforms: `twitter`, `linkedin`, `github`

### Navigation (`/admin` → Site Config → Navigation)
- Add/remove/reorder folder groups and items in the sidebar
- Set item status to `coming-soon` to show "(coming soon)" label without a link
- `homeLabel` controls the label shown on the home page list items (use `+Title` format)

### Writing (Blog Posts) (`/admin` → Writing)
- Edit existing posts or create new ones
- Each post has sections with a title and text body
- New posts added here will auto-generate a page on the site

### Product Case Studies (`/admin` → Product Case Studies)
- Edit metadata: role, team, tools, timeline
- Edit all section text
- New case studies added here will auto-generate a page (without custom images)

### Development Case Studies (`/admin` → Development Case Studies)
- Same as Product Case Studies

## Content File Locations

| Content Type | File Location |
|---|---|
| Site info | `content/config/site.json` |
| Navigation | `content/config/navigation.json` |
| Social links | `content/config/social.json` |
| Blog posts | `content/writing/*.md` |
| Product case studies | `content/product/*.md` |
| Development case studies | `content/development/*.md` |

## Existing vs. New Pages

**Existing pages** (adhoc, vumble, openrecord, neat, ourluubeginning, fastropelabs, humblevc, journaldaily, remotework) use their dedicated React components with full custom image layouts. Their text metadata is editable via the CMS, and the page component continues to handle the visual layout.

**New pages** created via the CMS use the generic template (`src/templates/case-study.js` or `src/templates/blog-post.js`) which renders a clean, standard layout from the markdown content. Adding custom images requires a developer to add image components.

## Adding a Brand New Case Study

1. Create the content via `/admin` (sets up the markdown file)
2. Ask a developer to:
   - Add images to `src/images/[project-name]/`
   - Create image components in `src/cases/[ProjectName]/images/`
   - Optionally create a custom page component for rich image layout
3. The page will work immediately from the CMS content even without custom images

## Troubleshooting

- **CMS shows "No backend"**: Netlify Identity / Git Gateway is not configured — follow setup steps above
- **Changes not appearing**: Check Netlify deploy logs; build may have failed
- **Image not showing**: New images uploaded via CMS go to `static/uploads/` — reference them as `/uploads/filename.jpg`
