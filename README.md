# SimonAKing-HomePage

[中文版说明](<README.zh_CN.md>)

## Introduction

> A modern and elegant personal homepage with fluid animation background, responsive design and smooth page transitions.

![preview](https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMncyb3oyc21zc3czejU3cGk4M2tiNTdkaTM0N3FodGVpZmU5azNxaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/fhXFCZEogq39rOpKUi/giphy.gif)

[Online browsing](http://simonaking.com)

Do you want to install such a cool homepage for your website?

Let's start now!

## Install

```sh
git clone https://github.com/SimonAKing/HomePage.git
cd HomePage
npm install
npm run dev
```

## Features

1. Highly encapsulates all the information in the page
2. Use [WebGL-Fluid-Simulation](https://github.com/PavelDoGreat/WebGL-Fluid-Simulation/) as background
3. Use `less` as `css` preprocessor
4. Use `pug` as `html` preprocessor
5. Use `gulp` as a build tool and configure the build script
6. Comfortable animation and beautiful UI
7. Responsive, mobile support
8. The referenced `css` and`js` files do not exceed `18.5` kb in total!
9. Delayed response switch page event
10. There are many features left for you to explore...


## Structure

According to the characteristics of the project, it is divided into two categories：
1. `intro` First screen
2. `main` Secondary screen

The corresponding functions, styles and configurations are also based on this standard.



## Basic configuration

Each key name in the config.json file`config.json` corresponds to the corresponding component name.

such as：

```json
{
	"head": {
		"title": "SimonAKing",
		"description": "Category:Personal Blog",
		"favicon": "favicon.ico"
	}
}

```
The above configuration information corresponds to the information in the following `layout/head.pug` component.
```html
head
	title #{head.title}
	meta(charset="utf-8")
	meta(name="Description" content=`${head.description}`)
	link(rel="icon" href=`${head.favicon}` type="image/x-icon")
```



## Advanced configuration

### WebGL-Fluid-Simulation

Use [WebGL-Fluid-Simulation](https://github.com/PavelDoGreat/WebGL-Fluid-Simulation/) as background at home.

If you want to turn it off, set `intro.background: false`.

### supportAuthor

The `supportAuthor` option is turned on by default for configuration information, that is, authors are supported.

All support items are as follows：

1. The `octopus cat` will be displayed in the upper right corner of the home page.
2. The console prints the author's site information

If you want to turn it off, set `intro.author: false`.


### Icon replacement
Icons in the project, all from [阿里巴巴矢量图标库](https://www.iconfont.cn)

The replacement steps are as follows:

1. Please select your icon, add it to the project, and change the color to white.
2. Click Font Class method
3. Copy the contents of the generated link
4. Replace the contents of the file `/src/css/common/icon.less`, where the contents of the `icon` selector must be preserved.
5. Config.json the corresponding item in the `config.json`file`main.ul. * .icon`

```css
.icon {
	display: block;
	width: 1.5em;
	height: 1.5em;
	margin: 0 auto;
	fill: currentColor;
	font-family: 'iconfont' !important;
	font-size: inherit;
	font-style: normal;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}
```



## Deployment

After executing `npm run build` under the root directory, the project file will be generated to the `dist` directory.

You can then deploy the dist directory to your favorite server hosting provider.

The following is an example of `GithubPage`:

1. create `userName.github.io` Repo

2. ```sh
   cd dist
   git init
   git add -A
   git commit -am"init"
   git remote add origin https://github.com/userName/userName.github.io.git
   git push -f origin master
   ```

3. Then set the repo's Github Page option in GitHub.

4. Visit `username.github.io` to browse!



If your previous `username. github.io` repo already has content, you can create another repo, such as `blog`.

 Then migrate the occupied items to `blog` and set the `GithubPage` option for this repo.

 The repo became a subdirectory of `username. github.io/blog`.

 In this way, your `username. github.io` repo can be left to the home page!



## Adding Pictures to Pics Page

The Pics page allows you to showcase your image gallery. To add pictures:

1. Open the `pics.json` file in the root directory
2. Add your picture details to the `pics` array with the following structure:

```json
{
  "pics": [
    {
      "title": "Your Picture Title",
      "description": "A brief description of the picture",
      "thumbnail": "URL to thumbnail image",
      "url": "URL to full-size image"
    }
  ]
}
```

3. After modifying `pics.json`, run `npm run build` to rebuild the project
4. The pictures will be displayed in the Pics page accessible at `/pics.html`

**Tips:**
- Use thumbnail images for better performance (recommended size: 300x200)
- The gallery is responsive and works on both desktop and mobile devices
- Pictures are displayed in a grid layout with hover effects
- Clicking on a picture will open it in a new tab at full size

## Editing the About Page

The About page displays a personal introduction with markdown support and icon support in headings. To edit:

1. Open the `about.md` file in the root directory
2. Edit the content using standard markdown syntax
3. You can use emojis in headings (e.g., `## 🚀 About Me`)
4. After modifying `about.md`, run `npm run build` to rebuild the project
5. The updated content will be displayed in the About page accessible at `/about.html`

**Supported Markdown Features:**
- Headings with icons (using emojis)
- Lists (ordered and unordered)
- Links
- Bold and italic text
- Code blocks and inline code
- Blockquotes
- Tables
- Horizontal rules
- Images

The page automatically renders markdown to HTML with a minimalist geek-style design, consistent with the overall project theme.

## Adding Projects to Projects Page

The Projects page showcases your projects in a timeline format with automatic date sorting and view switching capabilities. To add projects:

1. Open the `projects.json` file in the root directory
2. Add your project details to the `projects` array with the following structure:

```json
{
  "projects": [
    {
      "title": "Project Name",
      "description": "A brief description of the project",
      "date": "2024-01-15",
      "tags": ["React", "Node.js", "MongoDB"],
      "link": "https://github.com/username/project",
      "image": "https://via.placeholder.com/400x300"
    }
  ]
}
```

3. After modifying `projects.json`, run `npm run build` to rebuild the project
4. The projects will be displayed in the Projects page accessible at `/projects.html`

**Features:**
- **Automatic Date Sorting**: Projects are automatically sorted by date (newest first)
- **View Toggle**: Switch between Simple View and Detail View using buttons in the top-right corner
  - **Simple View**: Shows only title, date, and project link
  - **Detail View**: Shows complete information including image, description, and tags
- **Responsive Design**: Works on both desktop and mobile devices
- **Timeline Layout**: Projects are displayed in a visually appealing timeline with hover effects

**Tips:**
- Use the ISO date format (YYYY-MM-DD) for proper sorting
- The image field is optional; projects without images will display without the image section
- Use descriptive tags to help categorize your projects
- Images are recommended to be 400x300 pixels for optimal display

## Sponsor
I spent a lot of time and energy to develop this project.

If this project has brought you help, welcome to sponsor, `star`.

Thank you!