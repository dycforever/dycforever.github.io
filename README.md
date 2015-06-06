FILE / DIRECTORY    DESCRIPTION

_config.yml
Stores configuration data. Many of these options can be specified from the command line executable but it’s easier to specify them here so you don’t have to remember them.

_drafts
Drafts are unpublished posts. The format of these files is without a date: title.MARKUP. Learn how to work with drafts.

_includes
These are the partials that can be mixed and matched by your layouts and posts to facilitate reuse. The liquid tag {% include file.ext %} can be used to include the partial in _includes/file.ext.

_layouts
These are the templates that wrap posts. Layouts are chosen on a post-by-post basis in the YAML Front Matter, which is described in the next section. The liquid tag  {{ content }} is used to inject content into the web page.

_posts
Your dynamic content, so to speak. The naming convention of these files is important, and must follow the format: YEAR-MONTH-DAY-title.MARKUP. The permalinks can be customized for each post, but the date and markup language are determined solely by the file name.

_data
Well-formatted site data should be placed here. The jekyll engine will autoload all yaml files (ends with  .yml or .yaml) in this directory. If there's a file members.yml under the directory, then you can access contents of the file through site.data.members.

_site
This is where the generated site will be placed (by default) once Jekyll is done transforming it. It’s probably a good idea to add this to your .gitignore file.

.jekyll-metadata
This helps Jekyll keep track of which files have not been modified since the site was last built, and which files will need to be regenerated on the next build. This file will not be included in the generated site. It’s probably a good idea to add this to your .gitignore file.

index.html and other HTML, Markdown, Textile files
Provided that the file has a YAML Front Matter section, it will be transformed by Jekyll. The same will happen for any .html, .markdown,  .md, or .textile file in your site’s root directory or directories not listed above.

Other Files/Folders
Every other directory and file except for those listed above—such as css and images folders,  favicon.ico files, and so forth—will be copied verbatim to the generated site. There are plenty of sites already using Jekyll if you’re curious to see how they’re laid out.