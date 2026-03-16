# Gavin-HomePage

[Chinese Version](<README.zh_CN.md>)


## Project Introduction

> A modern and elegant personal homepage with fluid animation background, responsive design, and smooth page transitions.

![preview](https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMncyb3oyc21zc3czejU3cGk4M2tiNTdkaTM0N3FodGVpZmU5azNxaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/fhXFCZEogq39rOpKUi/giphy.gif)

Want to install such a cool homepage for your website?

Let's get started!


## Installation Steps

```sh
git clone https://github.com/WeiXingwuyou/Personal_web.git
cd Personal_web
npm install
npm run dev
```



## Features

1. Highly encapsulated all information in the page
2. Use [WebGL-Fluid-Simulation](https://github.com/PavelDoGreat/WebGL-Fluid-Simulation/) as background
3. Use `less` as `css` preprocessor
4. Use `pug` as `html` preprocessor
5. Use `gulp` as build tool, with build scripts configured
6. Comfortable animations and beautiful `UI`
7. Responsive, seamlessly supports mobile devices
8. Total size of referenced `css` and `js` files is less than `18.5` kb!
9. Delayed response to page switching events
10. Many more features for you to explore...



## Project Structure

According to project characteristics, it is divided into two main categories:
1. `intro` First screen
2. `main` Secondary screen

Corresponding functions, styles, and configurations are also based on this standard.



## Basic Configuration

Each key name in the configuration file `config.json` corresponds to the corresponding component name.

For example:

```json
{
	"head": {
		"title": "Gavin",
		"description": "Category:Personal Blog",
		"favicon": "favicon.ico"
	}
}

```
The configuration information above corresponds to the information in the `layout/head.pug` component below.
```html
head
	title #{head.title}
	meta(charset="utf-8")
	meta(name="Description" content=`${head.description}`)
	link(rel="icon" href=`${head.favicon}` type="image/x-icon")
```



## Advanced Configuration

### WebGL-Fluid-Simulation

The homepage uses [WebGL-Fluid-Simulation](https://github.com/PavelDoGreat/WebGL-Fluid-Simulation/) as background.

To disable it, please set `intro.background: false`.

### supportAuthor

The configuration information enables the `supportAuthor` option by default, which supports the author.

All support items are as follows:

1. Display `Octocat` in the top right corner of the homepage
2. Console will print the author's site information

To disable, please set `intro.supportAuthor: false`.

### Icon Replacement
All icons in the project come from [Alibaba Vector Icon Library](https://www.iconfont.cn)

Replacement steps are as follows:

1. Select your icons, add them to the project, and change all colors to white.
2. Click Font Class method
3. Copy the content in the generated link
4. Replace the content in the file `css/common/icon.less`, where the content of the `icon` selector must be retained.
5. Configure the corresponding item `main.ul.*.icon` in the `config.json` file

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



## Project Deployment

Execute `npm run build` in the root directory, and the project files will be generated to the `dist` directory.

Then, you can deploy the `dist` directory to your favorite server hosting provider.

Here is an example using `GithubPage`:

1. Create a new `your-username.github.io` repository

2. ```sh
   cd dist
   git init
   git add -A
   git commit -am"init"
   git remote add origin https://github.com/WeiXingwuyou/WeiXingwuyou.github.io.git
   git push -f origin master
   ```

3. Then set the `GithubPage` option for the repository in `Github`

4. Visit `WeiXingwuyou.github.io` to browse!



If your previous `username.github.io` repository already has content, you can create another repository, such as `blog`.

Then migrate the occupied project to `blog`, and set the `GithubPage` option for this repository.

And this repository becomes a subdirectory `username.github.io/blog`.

In this way, your `username.github.io` repository can be left for the homepage!

## Original Project Address
Thanks to the open source author [SimonAKing](https://github.com/SimonAKing).
Project address:
https://github.com/SimonAKing/HomePage


## Sponsorship
Developing an excellent project requires a lot of time and energy investment.

If this project has helped you, welcome to sponsor and `star`.

Thank you!
