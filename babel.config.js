module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
    // 运行出错的原因
    ["@babel/preset-env", { "modules": false }]
  ],
  plugins: [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}
